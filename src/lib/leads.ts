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

// Confirmation is shown only after confirmed delivery.
export async function submitLead(payload: QuizPayload): Promise<void> {
  const { answers, contact } = payload;
  const symptoms = Array.isArray(answers.symptoms) ? (answers.symptoms as string[]) : [];
  const realSymptoms = symptoms.filter((s) => s !== NONE_OPTION);

  // Flat field names so they are easy to map in the GoHighLevel workflow.
  const body = {
    source: "qualify-quiz",
    page: typeof window !== "undefined" ? window.location.origin + window.location.pathname : "",
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

  if (typeof window === "undefined" || window.location.hostname !== "upliftmedicalms.com")
    throw new Error("Submission is disabled on preview sites.");
  try {
    const res = await fetch(QUIZ_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    });
    if (!res.ok) {
      throw new Error("Delivery was not confirmed. Please try again or call the office.");
    }
  } catch (err) {
    throw new Error("Delivery was not confirmed. Please try again or call the office.");
  }
}

// GoHighLevel inbound webhook for contact-form messages.
const CONTACT_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/TeOpti4qe6jxiicUI2Sy/webhook-trigger/422f7ecb-d501-4a9b-97da-fc04bcf768b5";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Confirmation is shown only after confirmed delivery.
export async function submitContact(payload: ContactPayload): Promise<void> {
  const body = {
    source: "contact-form",
    page: typeof window !== "undefined" ? window.location.origin + window.location.pathname : "",
    submitted_at: new Date().toISOString(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    message: payload.message,
  };

  if (typeof window === "undefined" || window.location.hostname !== "upliftmedicalms.com")
    throw new Error("Submission is disabled on preview sites.");
  try {
    const res = await fetch(CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    });
    if (!res.ok) {
      throw new Error("Delivery was not confirmed. Please try again or call the office.");
    }
  } catch (err) {
    throw new Error("Delivery was not confirmed. Please try again or call the office.");
  }
}
