"use client";

import { useState, type FormEvent } from "react";
import clsx from "clsx";
import type { Locale } from "@/lib/types";
import { t } from "@/lib/i18n";
import { track } from "@/lib/analytics";

export function NewsletterForm({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const isAr = locale === "ar";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    // Stub — wire to Brevo/Mailerlite/etc. in a subsequent commit
    track("newsletter_signup", { source: "homepage" });
    setStatus("sent");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-auto inline-flex items-center justify-between p-[6px] rounded-full"
      style={{
        background: "rgba(255, 253, 245, 0.12)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: "0.5px solid rgba(255, 253, 245, 0.25)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)"
      }}
    >
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder={tr.newsletter_placeholder}
        className={clsx(
          "flex-1 bg-transparent border-none outline-none text-cream font-body text-sm",
          isAr ? "pr-4 pl-2" : "pl-4 pr-2",
          "placeholder:text-cream/50"
        )}
        aria-label={tr.newsletter_cta}
      />
      <button
        type="submit"
        className="flex-shrink-0 px-5 py-2 rounded-full font-body text-[13px] font-semibold text-cream transition-transform active:scale-95"
        style={{
          background: "linear-gradient(135deg, var(--gold-leaf), var(--gold-deep))",
          boxShadow: "0 4px 12px rgba(155, 111, 36, 0.4), inset 0 1px 0 rgba(255,255,255,0.25)"
        }}
      >
        {status === "sent" ? (isAr ? "شكراً" : "Thank you") : tr.newsletter_cta}
      </button>
    </form>
  );
}
