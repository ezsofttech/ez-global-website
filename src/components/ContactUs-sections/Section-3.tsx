import { ShieldCheck, FileText, PhoneCall } from "lucide-react";

const STEPS = [
  {
    icon: ShieldCheck,
    title: "We review your enquiry",
    body: "Usually within one business day.",
  },
  {
    icon: PhoneCall,
    title: "We arrange a consultation",
    // The document marks the call length as unconfirmed, so it is not stated.
    body: "A call at no cost and with no obligation, to understand your requirements properly.",
  },
  {
    icon: FileText,
    title: "You receive a written proposal",
    body: "Defined scope, fixed pricing and a delivery timeline.",
  },
];

export function Section3() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-12 font-plus-jakarta">
          What happens next
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.title}
                className="rounded-3xl border border-neutral-200/80 bg-neutral-50 p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#0b64f1] text-white flex items-center justify-center text-sm font-bold tabular-nums shrink-0">
                    {index + 1}
                  </span>
                  <Icon className="w-5 h-5 text-[#0b64f1]" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-8 text-sm text-neutral-500 font-medium">
          Confidentiality assured · No obligation · NDAs available on request
        </p>

        <div className="mt-16 rounded-3xl border border-neutral-200/80 bg-neutral-900 text-white p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 font-plus-jakarta">
            International enquiries
          </h2>
          <p className="text-neutral-300 leading-relaxed max-w-3xl">
            We work with clients in the United Kingdom, the United Arab Emirates
            and the United States. For international enquiries, note your time
            zone in the form and we will schedule a call within your working
            hours.
          </p>
        </div>
      </div>
    </section>
  );
}
