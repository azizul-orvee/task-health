"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Data = {
  who: string;
  type: string;
  postcode: string;
  when: string;
  funding: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const empty: Data = {
  who: "",
  type: "",
  postcode: "",
  when: "",
  funding: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

/** "Who needs care?" options, in the order the homepage hero chips show them. */
export const WHO = [
  { value: "A parent", label: "A parent" },
  { value: "A partner", label: "A partner" },
  { value: "Myself", label: "Myself" },
  { value: "Another family member", label: "Someone else" },
];
const WHEN = [
  { value: "Immediately (within a week)", label: "Immediately", hint: "within a week" },
  { value: "Within a month", label: "Within a month" },
  { value: "In 1–6 months", label: "In 1–6 months" },
  { value: "Just researching", label: "Just researching" },
];
const CARE_TYPES = [
  "Visiting / domiciliary care",
  "Live-in care",
  "Respite care",
  "Dementia care",
  "End-of-life care",
  "Supported living",
  "Not sure yet",
];
const FUNDING = [
  "Fully private (self-funded)",
  "Direct Payment from Local Authority/NHS",
  "Arranged/funded by Local Authority",
  "Arranged/funded by NHS",
  "Not sure",
];

const STEPS: { title: string; required: (keyof Data)[] }[] = [
  { title: "Care needs", required: ["who", "type", "postcode"] },
  { title: "Timing & funding", required: ["when", "funding"] },
  { title: "Your details", required: ["name", "phone"] },
];

/** Event the homepage "Who needs care?" chips dispatch to pre-fill step 1. */
export const PREFILL_EVENT = "consult:prefill";

export default function ConsultForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [invalid, setInvalid] = useState<Set<keyof Data>>(new Set());
  const [done, setDone] = useState(false);

  // Pre-fill "Type of care" from ?care= (links on the care pages), and "who" from the hero chips.
  useEffect(() => {
    const care = new URLSearchParams(window.location.search).get("care");
    if (care) {
      const match = CARE_TYPES.find((t) => t.toLowerCase().includes(care.toLowerCase()));
      if (match) setData((d) => ({ ...d, type: match }));
    }
    const onPrefill = (e: Event) => {
      const who = (e as CustomEvent<{ who: string }>).detail.who;
      setData((d) => ({ ...d, who }));
      setStep(0);
      setDone(false);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const set =
    (key: keyof Data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
      setInvalid((s) => {
        const n = new Set(s);
        n.delete(key);
        return n;
      });
    };

  const validate = () => {
    const bad = new Set(STEPS[step].required.filter((k) => !data[k].trim()));
    setInvalid(bad);
    return bad.size === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }
    const body = [
      `Who needs care: ${data.who}`,
      `Type of care: ${data.type}`,
      `Postcode: ${data.postcode}`,
      `How soon: ${data.when}`,
      `Funding: ${data.funding}`,
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "-"}`,
      "",
      data.notes,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Consultation request — ${data.name}`)}&body=${encodeURIComponent(body)}`;
    setDone(true);
  };

  const cls = (k: keyof Data) => (invalid.has(k) ? "invalid" : undefined);
  const stepCls = (i: number) => `step${!done && step === i ? " is-active" : ""}`;

  return (
    <form
      className="wizard reveal"
      id="wizard"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
    >
      {!done && (
        <>
          <div className="wizard__top">
            <span className="wizard__count">
              Step <b>{step + 1}</b> of {STEPS.length}
            </span>
            <span className="wizard__title">{STEPS[step].title}</span>
          </div>
        </>
      )}
      <div className="progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${done ? 1 : (step + 1) / STEPS.length})` }} />
      </div>

      <fieldset className={stepCls(0)}>
        <legend className="sr">Care needs</legend>
        <p className="q">Who needs care? *</p>
        <div className={`choices${invalid.has("who") ? " invalid" : ""}`}>
          {WHO.map((o) => (
            <label key={o.value}>
              <input type="radio" name="who" value={o.value} checked={data.who === o.value} onChange={set("who")} />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
        <label className="field">
          Type of care *
          <select name="type" value={data.type} onChange={set("type")} className={cls("type")}>
            <option value="">Select…</option>
            {CARE_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Postcode where care is needed *
          <input
            name="postcode"
            value={data.postcode}
            onChange={set("postcode")}
            className={cls("postcode")}
            placeholder="e.g. IG6 3HA"
            autoComplete="postal-code"
            autoCapitalize="characters"
          />
        </label>
      </fieldset>

      <fieldset className={stepCls(1)}>
        <legend className="sr">Timing and funding</legend>
        <p className="q">How soon is care needed? *</p>
        <div className={`choices choices--stack${invalid.has("when") ? " invalid" : ""}`}>
          {WHEN.map((o) => (
            <label key={o.value}>
              <input type="radio" name="when" value={o.value} checked={data.when === o.value} onChange={set("when")} />
              <span>
                {o.label} {o.hint && <small>{o.hint}</small>}
              </span>
            </label>
          ))}
        </div>
        <label className="field">
          How will care be funded? *
          <select name="funding" value={data.funding} onChange={set("funding")} className={cls("funding")}>
            <option value="">Select…</option>
            {FUNDING.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset className={stepCls(2)}>
        <legend className="sr">Your details</legend>
        <label className="field">
          Full name *
          <input name="name" value={data.name} onChange={set("name")} className={cls("name")} autoComplete="name" />
        </label>
        <label className="field">
          Phone number *
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            value={data.phone}
            onChange={set("phone")}
            className={cls("phone")}
            autoComplete="tel"
          />
        </label>
        <label className="field">
          Email <span className="opt">(optional)</span>
          <input
            name="email"
            type="email"
            inputMode="email"
            value={data.email}
            onChange={set("email")}
            autoComplete="email"
          />
        </label>
        <label className="field">
          Anything else we should know? <span className="opt">(optional)</span>
          <textarea name="notes" rows={3} value={data.notes} onChange={set("notes")} />
        </label>
      </fieldset>

      {done ? (
        <div className="wizard__done">
          <svg className="check" viewBox="0 0 52 52" aria-hidden="true">
            <circle cx="26" cy="26" r="24" />
            <path d="m15 27 7 7 15-15" />
          </svg>
          <h3>Thank you — you’re all set.</h3>
          <p>
            Your email app will open with your request ready to send to our team. If it’s urgent, call{" "}
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> any time.
          </p>
        </div>
      ) : (
        <>
          {invalid.size > 0 && (
            <p className="wizard__err" role="alert">
              Please complete the highlighted fields.
            </p>
          )}
          <div className="wizard__nav">
            {step > 0 && (
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setInvalid(new Set());
                  setStep(step - 1);
                }}
              >
                ← Back
              </button>
            )}
            <button type="submit" className="btn btn--primary btn--lg" data-next>
              {step === STEPS.length - 1 ? "Send my request" : "Continue"}
            </button>
          </div>
          <p className="wizard__note">No obligation. We never share your details.</p>
        </>
      )}
    </form>
  );
}
