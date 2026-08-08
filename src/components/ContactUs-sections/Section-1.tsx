"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../button";
import GlobeDemo from "@/components/globe-demo";
import { toast } from "sonner";
import { services } from "@/data/services";
import { COMPANY } from "@/lib/company";

const SERVICE_OPTIONS = [
  ...services.map((service) => service.name),
  "Not sure yet",
];

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000–₹2,00,000",
  "₹2,00,000–₹10,00,000",
  "Above ₹10,00,000",
  "To be discussed",
];

const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "Exploring options",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
  consent: false,
  /** Honeypot — invisible to people, commonly filled in by bots. */
  website: "",
};

const inputClass =
  "border-2 border-zinc-200 w-full p-3 outline-none focus:border-[#3C83F6] rounded-lg mt-2";

export function Section1() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please confirm consent so we can respond to your enquiry.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          website: formData.website,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      toast.success(
        "Thank you — your enquiry has reached us. A member of our team will respond within one business day."
      );

      setFormData(EMPTY_FORM);
    } catch (err) {
      console.error(err);
      toast.error(
        err instanceof Error
          ? err.message
          : `We could not submit your enquiry. Please check the required fields and try again, or email us directly at ${COMPANY.email.general}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 md:px-20 py-10 mt-20 md:mt-28 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="w-full max-w-xl mx-auto text-left">
          <div className="flex flex-row gap-2 items-center mb-4">
            <span className="h-2 w-2 bg-[#3C83F6] rounded-full"></span>
            <h2 className="text-sm font-semibold tracking-wider uppercase text-neutral-500">
              Contact Us
            </h2>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight font-plus-jakarta">
              Let&rsquo;s discuss your project.
            </h1>

            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
              Tell us what you are trying to build or fix. We will review your
              requirements and respond with a realistic assessment — usually
              within one business day.
            </p>

            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              The more context you provide, the more useful our first response
              will be. If you are uncertain about scope or budget, say so — that
              is a normal starting point, and precisely what an initial
              consultation is for.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot: hidden from people, attractive to bots. */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="text-base font-semibold text-neutral-800"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-base font-semibold text-neutral-800"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-base font-semibold text-neutral-800"
              >
                Telephone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Include country code for international enquiries"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="text-base font-semibold text-neutral-800"
              >
                Company{" "}
                <span className="font-normal text-neutral-400">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="text-base font-semibold text-neutral-800"
              >
                Service required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`${inputClass} bg-white`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="budget"
                  className="text-base font-semibold text-neutral-800"
                >
                  Indicative budget{" "}
                  <span className="font-normal text-neutral-400">
                    (optional)
                  </span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${inputClass} bg-white`}
                >
                  <option value="">Select</option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="text-base font-semibold text-neutral-800"
                >
                  Preferred timeline{" "}
                  <span className="font-normal text-neutral-400">
                    (optional)
                  </span>
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={`${inputClass} bg-white`}
                >
                  <option value="">Select</option>
                  {TIMELINE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-base font-semibold text-neutral-800"
              >
                Project details
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe what you need, any systems it must work with, and what a successful outcome would look like."
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 accent-[#3C83F6] shrink-0"
              />
              <label
                htmlFor="consent"
                className="text-sm text-neutral-600 leading-relaxed"
              >
                I consent to EZGlobal storing and processing this information in
                order to respond to my enquiry. See our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#3C83F6] font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
            </Button>
          </form>
        </div>

        <div className="w-full lg:-mt-10 flex justify-center items-center overflow-hidden min-h-[350px] sm:min-h-[450px] md:min-h-[500px]">
          <GlobeDemo />
        </div>
      </div>
    </section>
  );
}
