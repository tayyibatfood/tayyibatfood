"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search as SearchIcon, X } from "lucide-react";
import clsx from "clsx";
import { searchFoods, type SearchHit } from "@/lib/search";
import { VerdictBadge } from "./VerdictBadge";
import { t } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { track } from "@/lib/analytics";

interface LookupSearchProps {
  locale: Locale;
  autofocus?: boolean;
  className?: string;
}

const DEBOUNCE_MS = 150;

export function LookupSearch({ locale, autofocus = false, className }: LookupSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tr = t(locale);
  const isAr = locale === "ar";

  const initialQ = searchParams?.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounced search
  useEffect(() => {
    const q = query.trim();
    if (!q) { setHits([]); return; }
    const timer = setTimeout(() => {
      const results = searchFoods(q, 6);
      setHits(results);
      track("lookup_search", {
        query: q,
        had_result: results.length > 0,
        result_verdict: results[0]?.food.verdict
      });
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  // Autofocus after idle
  useEffect(() => {
    if (!autofocus || !inputRef.current) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 2000);
    return () => clearTimeout(timer);
  }, [autofocus]);

  // Sync URL ?q= without full navigation
  const commitToUrl = useCallback((q: string) => {
    const url = new URL(window.location.href);
    if (q) url.searchParams.set("q", q); else url.searchParams.delete("q");
    window.history.replaceState(null, "", url.toString());
  }, []);

  // Navigate to a dictionary entry on result selection
  const openHit = useCallback((hit: SearchHit) => {
    const slug = encodeURIComponent(hit.food.slug);
    const path = isAr ? `/القاموس/${slug}/` : `/en/dictionary/${slug}/`;
    router.push(path);
  }, [router, isAr]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx(i => Math.min(i + 1, hits.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx(i => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIdx >= 0 && hits[activeIdx]) {
      e.preventDefault();
      openHit(hits[activeIdx]);
    } else if (e.key === "Escape") {
      setHits([]);
      setActiveIdx(-1);
    }
  }, [hits, activeIdx, openHit]);

  const showResults = hits.length > 0 && query.trim().length > 0;

  return (
    <div className={clsx("relative w-full max-w-[640px] mx-auto", className)}>
      {/* ════ SEARCH PILL · signature liquid-glass moment ════ */}
      <div
        className={clsx(
          "relative flex items-center glass-base rounded-full",
          "py-[14px]",
          isAr ? "pl-[10px] pr-[28px]" : "pr-[10px] pl-[28px]"
        )}
        style={{
          background: "linear-gradient(180deg, rgba(255,253,245,0.75) 0%, rgba(250,246,236,0.55) 100%)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          border: "0.5px solid rgba(255,253,245,0.9)",
          boxShadow:
            "0 24px 60px rgba(71,89,58,0.14), 0 6px 18px rgba(155,111,36,0.08), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 2px rgba(71,89,58,0.04)"
        }}
      >
        {/* Specular highlight — top-edge light catch */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-[1px] left-3 right-3 h-3 rounded-t-full opacity-80"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.7), transparent)" }}
        />

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={e => { setQuery(e.target.value); commitToUrl(e.target.value); setActiveIdx(-1); }}
          onKeyDown={handleKeyDown}
          placeholder={tr.search_placeholder}
          className="flex-1 bg-transparent border-none outline-none font-body text-[17px] text-ink placeholder:text-ink-muted px-3"
          aria-label={tr.search_button}
          autoComplete="off"
        />

        {query && (
          <button
            onClick={() => { setQuery(""); commitToUrl(""); setHits([]); inputRef.current?.focus(); }}
            className="flex items-center justify-center w-8 h-8 rounded-full text-ink-muted hover:text-ink hover:bg-cream-warm transition-colors"
            aria-label="Clear"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          aria-label={tr.search_button}
          className={clsx(
            "flex items-center justify-center flex-shrink-0 w-[48px] h-[48px] rounded-full",
            "bg-gradient-to-br from-sage to-sage-deep text-cream",
            "border border-white/30",
            "shadow-[0_6px_16px_rgba(71,89,58,0.35),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(0,0,0,0.15)]"
          )}
        >
          <SearchIcon className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      {/* ════ RESULTS PANEL · glass + ottoman accent bar ════ */}
      {showResults && (
        <div
          className="absolute top-full mt-4 left-0 right-0 rounded-[28px] overflow-hidden z-40"
          style={{
            background: "linear-gradient(180deg, rgba(255,253,245,0.78), rgba(250,246,236,0.60))",
            backdropFilter: "blur(44px) saturate(200%)",
            WebkitBackdropFilter: "blur(44px) saturate(200%)",
            border: "0.5px solid rgba(255,253,245,0.9)",
            boxShadow:
              "0 32px 80px rgba(71,89,58,0.16), 0 8px 24px rgba(155,111,36,0.10), inset 0 1px 0 rgba(255,255,255,0.95)"
          }}
        >
          {/* 2px ottoman accent bar across top — amendment §05 */}
          <span
            aria-hidden
            className="absolute top-0 left-4 right-4 h-[2px] rounded-b-sm"
            style={{
              background: "linear-gradient(to left, transparent, var(--verdict-forbidden) 50%, transparent)"
            }}
          />

          <ul role="listbox" className="py-2">
            {hits.map((hit, idx) => (
              <li key={hit.food.id} role="option" aria-selected={idx === activeIdx}>
                <button
                  onClick={() => openHit(hit)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={clsx(
                    "w-full flex items-center justify-between gap-4 px-6 py-4 text-start transition-colors",
                    idx === activeIdx && "bg-sage-mist/40"
                  )}
                >
                  <div className={clsx("flex flex-col gap-1", isAr ? "text-right" : "text-left")}>
                    <span className="font-display text-[22px] font-semibold text-ink leading-tight">
                      {isAr ? hit.food.name_ar : hit.food.name_en}
                    </span>
                    <span className="font-body text-[12px] text-ink-muted uppercase tracking-wider">
                      {isAr ? hit.food.name_en : hit.food.name_ar}
                    </span>
                  </div>
                  <VerdictBadge verdict={hit.food.verdict} locale={locale} size="sm" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
