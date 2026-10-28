import { z } from "zod";

export const intakeContactSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(7, "Required").max(30),
  notes: z.string().trim().max(1000).optional(),
  smsConsent: z.literal(true, { error: "Required to proceed" }),
  marketingConsent: z.boolean().optional(),
});
