"use client";

import { FormEvent, useState } from "react";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFields: FormFields = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ManagementContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);

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
        "",
        fields.message.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:cmason.sm@gmail.com?subject=${subject}&body=${body}`;
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

      <div className="sm:col-span-2">
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

      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className="form-label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="form-input resize-y min-h-[160px]"
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send
        </button>
        <p className="mt-4 text-[13px] leading-[1.65] text-white/50">
          Submitting opens your email app with a pre-filled message to
          Carrie Mason. A representative will respond as soon as possible.
        </p>
      </div>
    </form>
  );
}
