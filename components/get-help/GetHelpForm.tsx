"use client";

import { Button } from "@/components/ui/Button";
import { formFieldClassName } from "@/components/forms/formStyles";
import { CTA } from "@/lib/cta";

const SUPPORT_OPTIONS = [
  "Christmas Celebration Support",
  "Back-to-School Support",
  "Emergency Assistance",
  "Community Resource Connections",
] as const;

const CONTACT_METHODS = ["Email", "Phone", "Either"] as const;

export function GetHelpForm() {
  return (
    <form
      className="min-w-0 rounded-2xl border border-[#5B2C83]/14 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8"
      onSubmit={(e) => e.preventDefault()}
      aria-describedby="get-help-form-notice"
    >
      <p className="sr-only">Request help form for Monique-A-Wish family support</p>
      <p className="text-sm leading-relaxed text-[#4A4A4A]">
        Share a few details so we can understand how to support your family. All fields help us respond
        with care.
      </p>

      <div
        id="get-help-form-notice"
        className="mt-5 rounded-xl border border-[#D4A017]/35 bg-[#F8F3EA] px-4 py-3 text-sm leading-relaxed text-[#3D1B5F]"
        role="status"
      >
        Form submission setup coming soon. Please contact us directly for immediate needs at{" "}
        <a href="mailto:contact@moniqueawish.org" className="font-semibold underline underline-offset-2">
          contact@moniqueawish.org
        </a>
        .
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="help-name" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            Name
          </label>
          <input
            id="help-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={formFieldClassName}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="help-email" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
              Email
            </label>
            <input
              id="help-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={formFieldClassName}
            />
          </div>
          <div>
            <label htmlFor="help-phone" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
              Phone
            </label>
            <input
              id="help-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={formFieldClassName}
            />
          </div>
        </div>

        <div>
          <label htmlFor="help-city-state" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            City / State
          </label>
          <input
            id="help-city-state"
            name="cityState"
            type="text"
            autoComplete="address-level2"
            placeholder="e.g. Emporia, KS"
            className={formFieldClassName}
          />
        </div>

        <div>
          <label htmlFor="help-support-type" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            Type of support needed
          </label>
          <select id="help-support-type" name="supportType" required className={formFieldClassName}>
            <option value="">Select support type</option>
            {SUPPORT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="help-message" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            Message
          </label>
          <textarea
            id="help-message"
            name="message"
            rows={5}
            required
            placeholder="Please share what support your family needs and any helpful context."
            className={formFieldClassName}
          />
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-[#3D1B5F]">Preferred contact method</legend>
          <div className="flex flex-wrap gap-4">
            {CONTACT_METHODS.map((method) => (
              <label key={method} className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="preferredContact"
                  value={method}
                  defaultChecked={method === "Either"}
                  className="size-4 accent-[#5B2C83]"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <Button type="submit" className="w-full sm:w-auto" aria-disabled="true">
          {CTA.getHelp}
        </Button>
        <p className="mt-3 text-xs leading-relaxed text-[#5B2C83]/80">
          Online submission is not yet active. Email{" "}
          <a href="mailto:contact@moniqueawish.org" className="font-semibold underline">
            contact@moniqueawish.org
          </a>{" "}
          for the fastest response.
        </p>
      </div>
    </form>
  );
}
