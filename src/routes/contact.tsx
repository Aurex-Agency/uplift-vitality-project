import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { SITE } from "@/components/site/site-data";
import { submitContact } from "@/lib/leads";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Uplift Medical | Tupelo, MS" },
      { name: "description", content: "Call, message, or visit Uplift Medical at 144 S Thomas St in Tupelo, MS. Hours, map, and contact form." },
      { property: "og:title", content: "Contact Uplift Medical" },
      { property: "og:description", content: "We would love to hear from you. Reach out by phone, message, or visit." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(7, "Required").max(30),
  message: z.string().trim().min(1, "Required").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    await submitContact(parsed.data);
    setSent(true);
  }

  return (
    <>
      <section className="bg-background pt-14 pb-10 md:pt-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="eyebrow">Get in Touch</span>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-primary md:text-7xl">
              We would love to hear from you.
            </h1>
            <span className="gold-rule mt-6" />
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-hairline bg-white p-8 md:p-10">
                {sent ? (
                  <div className="py-10 text-center">
                    <span className="eyebrow">Thank You</span>
                    <h2 className="mt-3 font-display text-3xl text-primary">Your message is on its way.</h2>
                    <p className="mt-3 text-muted-foreground">We will be in touch shortly. For anything urgent, call us.</p>
                    <div className="mt-6">
                      <CTAButton href={SITE.phoneHref} variant="outline">Call {SITE.phone}</CTAButton>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" name="name" error={errors.name} />
                      <Field label="Email" name="email" type="email" error={errors.email} />
                    </div>
                    <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                    <div>
                      <Label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground">Message</Label>
                      <Textarea id="message" name="message" rows={6} className="mt-2 rounded-xl border-hairline bg-background" />
                      {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium tracking-wide text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="space-y-6">
                <DetailRow icon={MapPin} label="Visit">{SITE.address}</DetailRow>
                <DetailRow icon={Phone} label="Call">
                  <a href={SITE.phoneHref} className="hover:text-gold">{SITE.phone}</a>
                </DetailRow>
                <DetailRow icon={Clock} label="Hours">
                  <div className="space-y-1">
                    {SITE.hours.map((h) => (
                      <div key={h.day}>
                        <span className="text-muted-foreground">{h.day}: </span>
                        {h.time}
                      </div>
                    ))}
                  </div>
                </DetailRow>
                <DetailRow icon={Facebook} label="Follow">
                  <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                    Facebook
                  </a>
                </DetailRow>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-hairline">
                <iframe
                  title="Map to Uplift Medical in Tupelo, MS"
                  src="https://www.google.com/maps?q=144+S+Thomas+St+Suite+102+Tupelo+MS+38801&output=embed"
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs tracking-widest uppercase text-muted-foreground">{label}</Label>
      <Input id={name} name={name} type={type} className="mt-2 h-12 rounded-xl border-hairline bg-background" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function DetailRow({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-hairline bg-white p-6">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <div className="mt-1 text-base text-foreground">{children}</div>
      </div>
    </div>
  );
}