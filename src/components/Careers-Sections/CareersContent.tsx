"use client";

import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  Send,
  Users,
  Award,
  Code,
  Layout,
  Rocket,
  Megaphone,
  Layers,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { roles } from "@/data/roles";
import { COMPANY } from "@/lib/company";

const ROLE_ICONS: Record<string, LucideIcon> = {
  code: Code,
  layout: Layout,
  rocket: Rocket,
  cloud: Cloud,
  megaphone: Megaphone,
};

const ROLE_TITLES = roles.map((role) => role.title);

/**
 * "Why EZGlobal" from section 5.3 of the content document.
 *
 * The document's "Deliberate learning" item is omitted until the team confirms
 * what they actually offer — candidates verify these at offer stage, and a
 * discrepancy costs the hire.
 */
const WHY_HERE = [
  {
    icon: Rocket,
    title: "Real products, real users",
    desc: "You will not be maintaining internal tooling nobody uses. Our work ships to clients across four markets, and you will see it in production within weeks of joining.",
  },
  {
    icon: Layers,
    title: "Range, not narrowness",
    desc: "Our teams work across web, mobile, AI, cloud, commerce and growth. Engineers here develop genuine breadth rather than spending three years inside a single module.",
  },
  {
    icon: Users,
    title: "Ownership from the start",
    desc: "We keep teams small and accountable. You will have direct input into technical decisions rather than implementing someone else's specification.",
  },
  {
    icon: Award,
    title: "A base in Chhattisgarh",
    desc: "Serious engineering work without relocating to a metropolitan city, at a cost of living that leaves your salary intact.",
  },
];

/**
 * Application process from section 5.7.
 *
 * Response windows, call length and assessment format are all marked as
 * unconfirmed in the content document, so those specifics are left out rather
 * than invented. Add them here once the team commits to them.
 */
const PROCESS = [
  {
    title: "Application",
    body: "Send your CV along with links to anything you have built. We read every application.",
  },
  {
    title: "Introductory call",
    body: "A conversation about your background, what you are looking for, and what the role actually involves.",
  },
  {
    title: "Technical assessment",
    body: "A practical exercise relevant to the role, so you can show how you work rather than only describe it.",
  },
  {
    title: "Team conversation",
    body: "A discussion with the people you would work alongside, covering how you approach problems and how you collaborate.",
  },
  {
    title: "Offer",
    body: "A written offer with salary, benefits and start date stated clearly.",
  },
];

export function CareersContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: ROLE_TITLES[0],
    message: "",
    resume:null as File|null,
  });

  const [resumeName, setResumeName] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const data = new FormData();

    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("role", formData.role);
    data.append("message", formData.message);

    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    const response = await fetch("/api/career", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    toast.success(
      "Thank you — your application has reached us. We read every application and will be in touch."
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: ROLE_TITLES[0],
      message: "",
      resume: null,
    });

    // File input reset
    (
      document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement
    ).value = "";
  } catch (err: any) {
    toast.error(err.message || "Submission Failed");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-96 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header Section */}
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Careers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-plus-jakarta">
            Build things that{" "}
            <span className="text-blue-600">matter.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            We are looking for engineers, designers and marketers who care about
            the details — and who want to work on systems real businesses depend
            on.
          </p>
          <div className="pt-2">
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-colors shadow-sm"
            >
              View Open Roles
            </a>
          </div>
        </div>

        {/* Why EZGlobal */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center sm:text-left font-plus-jakarta">
            Why EZGlobal
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_HERE.map((perk, idx) => {
            const IconComponent = perk.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-600 border border-blue-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{perk.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
              </div>
            );
          })}
        </div>
        </div>

        {/* Working arrangements */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-plus-jakarta">
            How we work
          </h2>

          {/*
            This section previously rendered nothing but the office address,
            because the culture copy was left pending. The paragraphs below
            describe the delivery model the rest of the site already commits to
            — small accountable teams, sprints, reviewable builds — rather than
            inventing HR specifics.
          */}
          <div className="space-y-4 text-slate-600 leading-relaxed max-w-3xl">
            <p>
              Teams are small and accountable. The people who scope a project
              are the people who deliver it, so you work directly on the problem
              rather than through layers of hand-off — and you have real input
              into technical decisions instead of implementing someone
              else&apos;s specification.
            </p>
            <p>
              Work runs in sprints with a reviewable build at the end of each
              one. Feedback arrives while it is still useful, and you see what
              you have built reach real users across four markets rather than
              disappearing into a backlog.
            </p>
            <p>
              We document decisions as we make them and hold to consistent
              conventions across projects, so the engineer who opens your code
              next — whether that is a colleague or you in a year — can pick it
              up without an archaeology exercise.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Office:</span>{" "}
              {COMPANY.addressLine}
            </p>
          </div>

          {/*
            TODO (client input required): confirm working hours and the
            on-site / hybrid arrangement, then state them alongside the office
            address above. The same applies to the benefits list in section 5.5
            of the content document — list only benefits genuinely provided,
            since candidates verify them at offer stage.
          */}
        </div>
        

        {/* Open Positions Grid */}
        <div id="open-roles" className="space-y-8 scroll-mt-28">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-plus-jakarta">
              Open roles
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Explore available opportunities and find your next role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((job, idx) => {
              const IconComp = ROLE_ICONS[job.icon] ?? Code;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-blue-500/60 hover:border-2 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {job.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 font-medium">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-blue-600" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{job.description}</p>

                    <div className="space-y-1.5 pt-2">
                      {job.requirements.map((req, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <a
                      href="#apply-form"
                      onClick={() => setFormData((prev) => ({ ...prev, role: job.title }))}
                      className="block text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-600 text-white hover:text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      Apply For This Role
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Form Section */}
        <div id="apply-form" className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-2xl relative">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-plus-jakarta">
              Submit your application
            </h2>
            <p className="text-slate-600 text-sm">
              Fill in your details and select the position you wish to apply
              for.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Phone Number <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              {/* Role Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Role <span className="text-blue-600">*</span>
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium"
                >
                  {ROLE_TITLES.map((role) => (
                    <option key={role} value={role} className="bg-white text-slate-900">
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Optional Cover Note / Message */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Message / Portfolio Link
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself and share links to anything you have built."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all text-sm font-medium resize-none"
              />
            </div>
            {/* Resume upload */}
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Resume <span className="text-blue-600">*</span>
                </label>

                <label
                  htmlFor="resume"
                  className="flex items-center justify-between w-full px-5 py-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-600 group-hover:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 11v8m0-8l-3 3m3-3l3 3"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {resumeName || "Upload your Resume"}
                      </p>

                      <p className="text-xs text-slate-500 mt-1">
                        PDF, DOC or DOCX • Max 5 MB
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-600 text-white">
                    Browse
                  </span>
                </label>

                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    setResumeName(file?.name || "");

                    setFormData((prev) => ({
                      ...prev,
                      resume: file || null,
                    }));
                  }}
                />
              </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* What to expect */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center sm:text-left font-plus-jakarta">
            What to expect
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map((step, idx) => (
              <li
                key={step.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-3"
              >
                <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold tabular-nums shrink-0">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Closing CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-plus-jakarta">
            Don&rsquo;t see your role?
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            If you believe you would strengthen our team, we would still like to
            hear from you. Tell us what you do and what you would want to work
            on here.
          </p>
          <a
            href={`mailto:${COMPANY.email.careers}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-colors"
          >
            Send Us Your CV
            <Send className="w-4 h-4" />
          </a>
          <p className="mt-4 text-sm text-slate-400 break-all">
            {COMPANY.email.careers}
          </p>
        </div>
      </div>
    </div>
  );
}
