"use client";

import { FormEvent, useEffect, useState } from "react";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  eventDate: string;
  message: string;
};

const initialFields: FormFields = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  eventDate: "",
  message: "",
};

const CONTACT_EMAIL = "scott@scottmason.org";

const DEFAULT_ZOHO_FORM_URL =
  "https://forms.zohopublic.com/virtualoffice1scottscott11/form/Contactwithphone/formperma/UiYmAUiQnrEERpNZ2AvAq-50OA2DHehxqIUbXTexjPY";

function getZohoEmbedUrl(url: string) {
  const embedUrl = new URL(url);
  embedUrl.searchParams.set("zf_rszfm", "1");
  return embedUrl.toString();
}

function ZohoFormEmbed({
  formUrl,
  onUseFallback,
}: {
  formUrl: string;
  onUseFallback: () => void;
}) {
  const [iframeHeight, setIframeHeight] = useState(540);

  useEffect(() => {
    function handleResize(event: MessageEvent) {
      if (typeof event.data !== "string") {
        return;
      }

      const parts = event.data.split("|");
      if (parts.length < 2) {
        return;
      }

      const height = Number.parseInt(parts[1], 10);
      if (height > 0) {
        setIframeHeight(height + 12);
      }
    }

    window.addEventListener("message", handleResize, false);
    return () => window.removeEventListener("message", handleResize, false);
  }, []);

  return (
    <>
      <div className="zoho-form-embed -mx-1 overflow-hidden sm:-mx-2">
        <iframe
          src={getZohoEmbedUrl(formUrl)}
          title="Contact with phone"
          aria-label="Contact with phone"
          className="block w-full border-0 bg-transparent"
          style={{ height: `${iframeHeight}px`, minHeight: "480px" }}
          loading="lazy"
        />
      </div>
      <p className="mt-4 text-center text-[12px] leading-[1.65] text-white/45">
        Form not loading?{" "}
        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/65 underline-offset-2 hover:text-[var(--color-accent)] hover:underline"
        >
          Open the form directly
        </a>{" "}
        or{" "}
        <button
          type="button"
          onClick={onUseFallback}
          className="text-white/65 underline-offset-2 hover:text-[var(--color-accent)] hover:underline"
        >
          use email instead
        </button>
        .
      </p>
    </>
  );
}

export default function ContactForm() {
  const zohoFormUrl = process.env.NEXT_PUBLIC_ZOHO_FORM_URL || DEFAULT_ZOHO_FORM_URL;
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [useFallbackForm, setUseFallbackForm] = useState(false);

  if (zohoFormUrl && !useFallbackForm) {
    return (
      <ZohoFormEmbed
        formUrl={zohoFormUrl}
        onUseFallback={() => setUseFallbackForm(true)}
      />
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Speaking inquiry from ${fields.name.trim() || "website visitor"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${fields.name.trim()}`,
        `Email: ${fields.email.trim()}`,
        fields.phone.trim() ? `Phone: ${fields.phone.trim()}` : null,
        fields.organization.trim()
          ? `Organization: ${fields.organization.trim()}`
          : null,
        fields.eventDate.trim() ? `Event date: ${fields.eventDate.trim()}` : null,
        "",
        fields.message.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  function updateField(key: keyof FormFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2"
      noValidate
    >
      <div className="sm:col-span-1">
        <label htmlFor="contact-name" className="form-label">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={fields.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="form-input"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="contact-email" className="form-label">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={fields.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="form-input"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="contact-phone" className="form-label">
          Phone <span className="text-white/40">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="form-input"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="contact-organization" className="form-label">
          Organization
        </label>
        <input
          id="contact-organization"
          name="organization"
          type="text"
          value={fields.organization}
          onChange={(event) => updateField("organization", event.target.value)}
          className="form-input"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-event-date" className="form-label">
          Event date <span className="text-white/40">(optional)</span>
        </label>
        <input
          id="contact-event-date"
          name="eventDate"
          type="text"
          placeholder="e.g. March 2026 or TBD"
          value={fields.eventDate}
          onChange={(event) => updateField("eventDate", event.target.value)}
          className="form-input"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="form-label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your event, audience, and location."
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="form-input min-h-[160px] resize-y"
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send inquiry
        </button>
        <p className="mt-4 text-[13px] leading-[1.65] text-white/50">
          Submitting opens your email app with a pre-filled message to{" "}
          {CONTACT_EMAIL}. A representative will respond as soon as possible.
        </p>
      </div>
    </form>
  );
}
