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

// TODO: wire this to the GoHighLevel webhook or form POST. For now, log only.
export async function submitLead(payload: QuizPayload): Promise<void> {
  console.log("[submitLead]", payload);
}

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// TODO: wire this to the GoHighLevel webhook or form POST. For now, log only.
export async function submitContact(payload: ContactPayload): Promise<void> {
  console.log("[submitContact]", payload);
}