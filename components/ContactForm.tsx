"use client";

import { Button } from "@/components/ui/Button";

export function ContactForm() {
  return (
    <form
      className="min-w-0 rounded-2xl border border-[#5B2C83]/14 bg-white p-5 shadow-lg sm:rounded-3xl sm:p-6 md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="text-xl font-semibold text-[#3D1B5F] sm:text-2xl">Send a Message</h3>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full min-h-11 rounded-xl border border-[#5B2C83]/20 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#5B2C83]/30 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full min-h-11 rounded-xl border border-[#5B2C83]/20 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#5B2C83]/30 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="inquiry" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            Inquiry Type
          </label>
          <select
            id="inquiry"
            name="inquiry"
            className="w-full min-h-11 rounded-xl border border-[#5B2C83]/20 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#5B2C83]/30 sm:text-sm"
          >
            <option value="general">General Question</option>
            <option value="volunteer">Volunteer</option>
            <option value="donation">Donation</option>
            <option value="partnership">Partnership</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#3D1B5F]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full min-h-11 rounded-xl border border-[#5B2C83]/20 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-[#5B2C83]/30 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
      </div>
    </form>
  );
}
