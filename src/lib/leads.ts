// GoHighLevel inbound webhook for "See If You Qualify" quiz leads.
const QUIZ_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/TeOpti4qe6jxiicUI2Sy/webhook-trigger/2d960318-8023-49a6-a31f-fa2d66c10617";

const NONE_OPTION = "None of the above";

export type QuizPayload = {
  answers: Record<string, unknown>;
  contact: {
    name: string;
    email: string;
    phone: string;
    notes?: string;
    smsConsent: boolean;
    marketingConsent: boolean;
  };
};

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

// Failures are logged but never thrown: a webhook outage must not block
// the thank-you screen after someone has already handed us their info.
export async function submitLead(payload: QuizPayload): Promise<void> {
  const { answers, contact } = payload;
  const symptoms = Array.isArray(answers.symptoms) ? (answers.symptoms as string[]) : [];
  const realSymptoms = symptoms.filter((s) => s !== NONE_OPTION);

  // Flat field names so they are easy to map in the GoHighLevel workflow.
  const body = {
    source: "qualify-quiz",
    page: typeof window !== "undefined" ? window.location.href : "",
    submitted_at: new Date().toISOString(),
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    notes: contact.notes ?? "",
    sms_consent: contact.smsConsent,
    marketing_consent: contact.marketingConsent,
    gender: str(answers.gender),
    symptoms: realSymptoms.join(", "),
    symptom_count: realSymptoms.length,
    symptom_duration: str(answers.duration),
    daily_life_impact: str(answers.impact),
    hormones_checked: str(answers.checked),
    main_goal: str(answers.goal),
    age_range: str(answers.age),
  };

  try {
    const res = await fetch(QUIZ_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    });
    if (!res.ok) {
      console.error("[submitLead] webhook responded with", res.status);
    }
  } catch (err) {
    console.error("[submitLead] webhook request failed", err);
  }
}

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// TODO: wire this to a GoHighLevel webhook for contact-form messages. For now, log only.
export async function submitContact(payload: ContactPayload): Promise<void> {
  console.log("[submitContact]", payload);
}
