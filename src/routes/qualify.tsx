import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Lock, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { SITE } from "@/components/site/site-data";
import { submitLead } from "@/lib/leads";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/qualify")({
  head: () => ({
    meta: [
      { title: "See If You Qualify | Uplift Medical" },
      {
        name: "description",
        content:
          "Take our free 60-second hormone therapy assessment, personalized for men and women. No obligation. Find out if you may be a candidate for care.",
      },
      { property: "og:title", content: "See If You Qualify for Hormone Therapy" },
      {
        property: "og:description",
        content: "Free 60-second assessment from Uplift Medical, personalized for men and women.",
      },
    ],
  }),
  component: Qualify,
});

type StepDef = {
  id: string;
  type: "single" | "multi";
  question: string;
  subtext?: string;
  options: string[];
};

const NONE_OPTION = "None of the above";

const MEN_SYMPTOMS = [
  "Fatigue",
  "Loss of motivation",
  "Weakened erections",
  "Brain fog",
  "Poor sleep",
  "Mood swings",
  "Weight gain",
  "Loss of physical performance",
  'Mid-day "crash"',
  "Low libido",
  NONE_OPTION,
];

const WOMEN_SYMPTOMS = [
  "Fatigue",
  "Loss of motivation",
  "Irregular menstrual cycle",
  "Brain fog",
  "Insomnia",
  "Mood swings",
  "Weight gain",
  "Anxiety",
  "Depression",
  "Low libido",
  "Hot flashes",
  "Heart palpitations",
  "Cramps",
  NONE_OPTION,
];

const MEN_GOALS = [
  "More energy",
  "Build strength and muscle",
  "Lose weight",
  "Sharper focus",
  "Better sleep",
  "Improve libido and performance",
  "Overall wellness",
];

const WOMEN_GOALS = [
  "More energy",
  "Balanced mood",
  "Lose weight",
  "Sharper focus",
  "Better sleep",
  "Improve libido",
  "Relief from hot flashes",
  "Overall wellness",
];

const GENDER_STEP: StepDef = {
  id: "gender",
  type: "single",
  question: "Which best describes you?",
  subtext:
    "Hormone symptoms look different for men and women, so this helps us personalize your assessment.",
  options: ["Male", "Female"],
};

function buildSteps(gender: string | undefined): StepDef[] {
  const isFemale = gender === "Female";
  return [
    GENDER_STEP,
    {
      id: "symptoms",
      type: "multi",
      question: "Which of these have you been experiencing?",
      subtext: "Select all that apply.",
      options: isFemale ? WOMEN_SYMPTOMS : MEN_SYMPTOMS,
    },
    {
      id: "duration",
      type: "single",
      question: "How long have you been dealing with these symptoms?",
      options: ["Less than 6 months", "6 to 12 months", "1 to 3 years", "More than 3 years"],
    },
    {
      id: "impact",
      type: "single",
      question: "How much are these symptoms affecting your daily life?",
      options: [
        "Barely, but I notice them",
        "Somewhat, they slow me down",
        "A lot, they affect my work or relationships",
        "Severely, they affect me every day",
      ],
    },
    {
      id: "checked",
      type: "single",
      question: "Have you ever had your hormone levels checked?",
      options: ["Yes, within the last year", "Yes, more than a year ago", "No, never", "Not sure"],
    },
    {
      id: "goal",
      type: "single",
      question: "What is your main goal?",
      options: isFemale ? WOMEN_GOALS : MEN_GOALS,
    },
    {
      id: "age",
      type: "single",
      question: "What is your age range?",
      options: ["Under 30", "30 to 39", "40 to 49", "50 to 59", "60 and above"],
    },
  ];
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(7, "Required").max(30),
  notes: z.string().trim().max(1000).optional(),
  smsConsent: z.literal(true, { errorMap: () => ({ message: "Required to proceed" }) }),
  marketingConsent: z.boolean().optional(),
});

function Qualify() {
  // 0 = intro, 1..steps.length = questions, steps.length+1 = contact, +2 = thanks
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    smsConsent: false,
    marketingConsent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const gender = typeof answers.gender === "string" ? answers.gender : undefined;
  const steps = useMemo(() => buildSteps(gender), [gender]);

  const total = steps.length + 1; // questions + contact
  const progress = useMemo(() => {
    if (step <= 0) return 0;
    if (step >= total + 1) return 100;
    return Math.round((step / total) * 100);
  }, [step, total]);

  const isQuestion = step >= 1 && step <= steps.length;
  const currentStep = isQuestion ? steps[step - 1] : null;

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  function pickSingle(id: string, value: string) {
    setAnswers((a) => {
      if (id === "gender" && a.gender !== value) {
        // Symptom and goal options change with the path, so clear those answers.
        const { symptoms: _s, goal: _g, ...rest } = a;
        return { ...rest, gender: value };
      }
      return { ...a, [id]: value };
    });
    window.setTimeout(next, 220);
  }

  function toggleMulti(id: string, value: string) {
    setAnswers((a) => {
      const cur = Array.isArray(a[id]) ? (a[id] as string[]) : [];
      const has = cur.includes(value);
      if (has) return { ...a, [id]: cur.filter((x) => x !== value) };
      // "None of the above" clears the rest, and vice versa.
      if (value === NONE_OPTION) return { ...a, [id]: [NONE_OPTION] };
      return { ...a, [id]: [...cur.filter((x) => x !== NONE_OPTION), value] };
    });
  }

  function canAdvance() {
    if (!isQuestion || !currentStep) return true;
    const v = answers[currentStep.id];
    if (currentStep.type === "multi") return Array.isArray(v) && v.length > 0;
    return typeof v === "string" && v.length > 0;
  }

  async function submit() {
    const parsed = contactSchema.safeParse(contact);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    await submitLead({ answers, contact });
    next();
  }

  const symptomCount = Array.isArray(answers.symptoms)
    ? (answers.symptoms as string[]).filter((s) => s !== NONE_OPTION).length
    : 0;
  const servicePath =
    gender === "Female" ? "/services/hormone-therapy-women" : "/services/hormone-therapy-men";
  const serviceLabel =
    gender === "Female" ? "hormone therapy for women" : "hormone therapy for men";

  return (
    <section className="bg-background py-10 md:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Progress */}
        {step > 0 && step <= total && (
          <div className="mb-8 md:mb-10">
            <div className="flex items-center justify-between text-xs tracking-widest text-muted-foreground">
              <span>
                STEP {Math.min(step, total)} / {total}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-hairline">
              <div
                className="h-full bg-gold transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="relative">
          {step === 0 && (
            <Reveal>
              <div className="text-center">
                <span className="eyebrow">Free Assessment</span>
                <h1 className="mt-5 font-display text-4xl leading-tight text-primary sm:text-5xl md:text-7xl">
                  See if you qualify for hormone therapy.
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Answer a few quick questions personalized for men and women. It takes about 60
                  seconds and there is no obligation. We will let you know if you may be a candidate
                  and how to take the next step.
                </p>
                <div className="mt-10">
                  <button
                    onClick={next}
                    className="inline-flex h-14 w-full items-center justify-center rounded-full bg-primary px-10 text-base font-medium tracking-wide text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
                  >
                    Start the Assessment
                  </button>
                </div>
                <p className="mx-auto mt-6 flex max-w-md items-start justify-center gap-2 text-xs leading-relaxed text-muted-foreground">
                  <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>
                    Your answers are private and are used only to follow up about your results. They
                    are never sold or shared.
                  </span>
                </p>
              </div>
            </Reveal>
          )}

          {isQuestion && currentStep && (
            <QuizCard key={currentStep.id}>
              <h2 className="font-display text-2xl leading-snug text-primary sm:text-3xl md:text-4xl">
                {currentStep.question}
              </h2>
              {currentStep.subtext && (
                <p className="mt-3 text-sm text-muted-foreground">{currentStep.subtext}</p>
              )}

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                {currentStep.options.map((opt) => {
                  const selected =
                    currentStep.type === "multi"
                      ? Array.isArray(answers[currentStep.id]) &&
                        (answers[currentStep.id] as string[]).includes(opt)
                      : answers[currentStep.id] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        currentStep.type === "single"
                          ? pickSingle(currentStep.id, opt)
                          : toggleMulti(currentStep.id, opt)
                      }
                      className={`group flex min-h-[52px] items-center justify-between rounded-xl border px-4 py-3.5 text-left text-base transition sm:px-5 sm:py-4 ${
                        selected
                          ? "border-gold bg-gold/10 text-primary"
                          : "border-hairline bg-white text-foreground hover:border-gold/60 hover:bg-gold/5"
                      }`}
                    >
                      <span>{opt}</span>
                      <span
                        className={`ml-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                          selected
                            ? "border-gold bg-gold text-primary"
                            : "border-hairline text-transparent"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  );
                })}
              </div>

              <QuizNav
                onBack={back}
                onNext={next}
                showNext={currentStep.type === "multi"}
                canAdvance={canAdvance()}
              />
            </QuizCard>
          )}

          {step === steps.length + 1 && (
            <QuizCard>
              <h2 className="font-display text-2xl leading-snug text-primary sm:text-3xl md:text-4xl">
                Last step. Where should we send your results?
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We use this only to share your results and follow up. Your information is kept
                confidential and is never sold or shared. You can unsubscribe anytime.
              </p>

              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <QField
                    label="Full Name"
                    value={contact.name}
                    onChange={(v) => setContact({ ...contact, name: v })}
                    error={errors.name}
                  />
                  <QField
                    label="Email"
                    type="email"
                    value={contact.email}
                    onChange={(v) => setContact({ ...contact, email: v })}
                    error={errors.email}
                  />
                </div>
                <QField
                  label="Phone"
                  type="tel"
                  value={contact.phone}
                  onChange={(v) => setContact({ ...contact, phone: v })}
                  error={errors.phone}
                />
                <div>
                  <Label
                    htmlFor="notes"
                    className="text-xs uppercase tracking-widest text-muted-foreground"
                  >
                    Anything else you would like us to know? (optional)
                  </Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={contact.notes}
                    onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                    className="mt-2 rounded-xl border-hairline bg-background"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    No need to share detailed medical history here. You can save that for your
                    private consultation.
                  </p>
                </div>

                <div className="space-y-3 rounded-xl border border-hairline bg-background p-4 sm:p-5">
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
                    <Checkbox
                      checked={contact.smsConsent}
                      onCheckedChange={(v) => setContact({ ...contact, smsConsent: v === true })}
                      className="mt-0.5"
                    />
                    <span>
                      I consent to receive SMS notifications and alerts from Uplift Medical LLC.
                      Message frequency may vary. Message and data rates may apply. Reply STOP to
                      unsubscribe at any time.
                    </span>
                  </label>
                  {errors.smsConsent && (
                    <p className="text-xs text-destructive">{errors.smsConsent}</p>
                  )}
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
                    <Checkbox
                      checked={contact.marketingConsent}
                      onCheckedChange={(v) =>
                        setContact({ ...contact, marketingConsent: v === true })
                      }
                      className="mt-0.5"
                    />
                    <span>
                      I consent to receive occasional marketing messages from Uplift Medical LLC.
                      Reply STOP to unsubscribe at any time.
                    </span>
                  </label>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link to="/privacy" className="underline underline-offset-2 hover:text-primary">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms" className="underline underline-offset-2 hover:text-primary">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  onClick={back}
                  className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary sm:justify-start"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={submit}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium tracking-wide text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  See My Results
                </button>
              </div>
            </QuizCard>
          )}

          {step === steps.length + 2 && (
            <Reveal>
              <div className="rounded-3xl border border-hairline bg-white p-6 text-center shadow-[0_30px_60px_-30px_rgba(14,42,71,0.20)] sm:p-10 md:p-14">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h2 className="mt-6 font-display text-3xl leading-tight text-primary sm:text-4xl md:text-5xl">
                  {symptomCount >= 3
                    ? "Thank you. You may be a strong candidate."
                    : "Thank you. Your results are on the way."}
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {symptomCount >= 3 ? (
                    <>
                      You reported {symptomCount} symptoms commonly linked to hormone imbalance.
                      Many patients with a similar profile are candidates for personalized care at
                      Uplift Medical. Our team will reach out shortly to discuss your results. Want
                      to skip the wait?
                    </>
                  ) : symptomCount >= 1 ? (
                    <>
                      Based on your answers, you may be a candidate for personalized care at Uplift
                      Medical. Our team will reach out shortly to discuss your results. Want to skip
                      the wait?
                    </>
                  ) : (
                    <>
                      Even without classic symptoms, the only way to know where your hormone levels
                      stand is simple lab work. Our team will reach out shortly with your results
                      and next steps. Want to skip the wait?
                    </>
                  )}
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CTAButton to="/book">Book an Appointment</CTAButton>
                  <CTAButton href={SITE.phoneHref} variant="outline">
                    <Phone className="h-4 w-4" /> Call {SITE.phone}
                  </CTAButton>
                </div>
                {gender && (
                  <p className="mt-6 text-sm text-muted-foreground">
                    In the meantime, learn more about{" "}
                    <Link
                      to={servicePath}
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      {serviceLabel}
                    </Link>{" "}
                    at Uplift Medical.
                  </p>
                )}
              </div>
            </Reveal>
          )}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          This assessment is for informational purposes only and is not medical advice, a diagnosis,
          or a guarantee of treatment. Only a licensed provider can determine whether hormone
          therapy is right for you after an evaluation and lab work.
        </p>
      </div>
    </section>
  );
}

function QuizCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-[fadeUp_300ms_ease-out] rounded-3xl border border-hairline bg-white p-5 shadow-[0_30px_60px_-30px_rgba(14,42,71,0.18)] sm:p-8 md:p-12">
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
      {children}
    </div>
  );
}

function QuizNav({
  onBack,
  onNext,
  showNext,
  canAdvance,
}: {
  onBack: () => void;
  onNext: () => void;
  showNext: boolean;
  canAdvance: boolean;
}) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      <button
        onClick={onBack}
        className="inline-flex min-h-[44px] items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>
      {showNext ? (
        <button
          onClick={onNext}
          disabled={!canAdvance}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue <ArrowRight className="h-4 w-4" />
        </button>
      ) : (
        <span className="text-xs text-muted-foreground">Tap to continue</span>
      )}
    </div>
  );
}

function QField({
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <Label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-12 rounded-xl border-hairline bg-background"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
