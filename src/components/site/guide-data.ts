export type GuideSection = { heading: string; body: string[] };
export type GuideLink = { label: string; to: string };

export type Guide = {
  slug: string;
  category: string;
  title: string; // <title> / H1-adjacent, keyword-led
  h1: string;
  description: string; // meta description
  summary: string; // short teaser for the hub/cards
  readMinutes: number;
  updated: string; // ISO date
  intro: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  related: GuideLink[];
};

const DISCLAIMER =
  "This article is for general education and is not medical advice or a diagnosis. Only a licensed provider can determine whether hormone therapy is right for you after an evaluation and lab work.";

export const GUIDES: Record<string, Guide> = {
  "signs-of-low-testosterone": {
    slug: "signs-of-low-testosterone",
    category: "Men's Hormone Health",
    title: "10 Signs of Low Testosterone in Men (and What to Do)",
    h1: "10 signs of low testosterone in men",
    description:
      "Fatigue, low libido, brain fog, weight gain, and mood changes can all point to low testosterone. Here are the common signs and how to find out where your levels stand.",
    summary:
      "The symptoms men most often miss, why they happen, and the simple way to find out if low testosterone is the cause.",
    readMinutes: 6,
    updated: "2026-07-09",
    intro: [
      "Testosterone does a lot more than most men realize. It influences your energy, mood, focus, muscle, body fat, sleep, and sex drive. When levels drift below where your body works best, the symptoms rarely show up all at once. They creep in, get written off as stress or aging, and slowly chip away at how you feel day to day.",
      "The good news: low testosterone is measurable and treatable. Below are the signs we see most often in men who turn out to be candidates for treatment, followed by the one step that actually tells you what is going on.",
    ],
    sections: [
      {
        heading: "The most common signs",
        body: [
          "1. Persistent fatigue, even after a full night of sleep. 2. Low sex drive or weaker erections. 3. Loss of muscle and strength despite training. 4. Increasing body fat, especially around the midsection. 5. Brain fog and trouble concentrating. 6. Low mood, irritability, or a shorter fuse. 7. Poor or restless sleep. 8. A mid-day energy crash. 9. Reduced motivation and drive. 10. Longer recovery after workouts.",
          "One or two of these on their own do not prove anything. But when several show up together and stick around, low testosterone is worth ruling in or out rather than pushing through.",
        ],
      },
      {
        heading: "Why levels decline",
        body: [
          "Testosterone naturally declines with age, but that is only part of the story. Poor sleep, chronic stress, excess body fat, certain medications, and underlying health conditions can all lower it, sometimes well before a man expects. That is why two men the same age can have very different levels and very different symptoms.",
        ],
      },
      {
        heading: "How to know for sure",
        body: [
          "Symptoms point you in a direction, but only lab work confirms it. A simple blood panel measures your total and free testosterone along with related markers, and a provider reads those numbers against how you actually feel. That combination, your labs plus your symptoms, is what determines whether treatment makes sense.",
          "At Uplift Medical we build every plan from your own results rather than a one-size protocol, and we see patients in Tupelo or by telehealth across Mississippi and Tennessee.",
        ],
      },
    ],
    faqs: [
      {
        q: "At what age does testosterone start to drop?",
        a: "Levels typically begin a gradual decline in a man's 30s, but lifestyle, sleep, stress, and health conditions mean some men see symptoms earlier and others later. Age alone does not tell you your level; lab work does.",
      },
      {
        q: "Can low testosterone be fixed without medication?",
        a: "Sleep, strength training, fat loss, and stress management can all help and are part of a good plan. When levels are genuinely low, testosterone replacement therapy may be appropriate. A provider can tell you which applies after reviewing your labs.",
      },
    ],
    related: [
      { label: "See if you qualify (free 60-second quiz)", to: "/qualify" },
      {
        label: "Testosterone replacement therapy (TRT) for men",
        to: "/services/hormone-therapy-men",
      },
      { label: "Book a consultation", to: "/book" },
    ],
  },

  "how-much-does-trt-cost": {
    slug: "how-much-does-trt-cost",
    category: "Cost & Getting Started",
    title: "How Much Does TRT Cost? A Straightforward Breakdown",
    h1: "How much does TRT cost?",
    description:
      "A plain-English look at what testosterone replacement therapy actually costs, what drives the price, and why concierge, no-insurance care is often simpler than it sounds.",
    summary:
      "What TRT actually costs, what drives the price, and how concierge care compares to insurance-based clinics.",
    readMinutes: 5,
    updated: "2026-07-09",
    intro: [
      "Cost is one of the first questions men ask about testosterone replacement therapy, and the honest answer is: it depends on your plan. What follows is a straightforward look at what you are actually paying for so there are no surprises.",
    ],
    sections: [
      {
        heading: "What you are paying for",
        body: [
          "A complete TRT program is more than a prescription. It usually includes your initial consultation, lab work to measure your hormone levels, the medication itself, and ongoing follow-up visits to monitor your response and adjust the dose. Clinics that quote a single low number sometimes leave out the labs and monitoring that make treatment safe and effective.",
        ],
      },
      {
        heading: "Why concierge, no-insurance care can be simpler",
        body: [
          "Insurance-based hormone care often means prior authorizations, coverage denials, and rigid protocols. A concierge model skips the insurance middleman: you pay a transparent price and get care built around your labs and goals, not around what a plan will approve. For many men, that ends up being both simpler and more predictable.",
          "At Uplift Medical there is no insurance required and no surprise fees. We will walk you through exactly what your plan includes before you commit to anything.",
        ],
      },
      {
        heading: "Getting an accurate number",
        body: [
          "Because the right plan depends on your labs, goals, and which treatments fit you, the most reliable way to get a real number is a consultation. It is quick, there is no obligation, and you leave knowing your options and the cost before deciding anything.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does insurance cover TRT?",
        a: "Some plans cover parts of hormone care, but coverage is inconsistent and often comes with restrictions. Uplift Medical is a concierge practice with transparent pricing and no insurance required, so you always know the cost up front.",
      },
      {
        q: "Is cheaper TRT worth it?",
        a: "Be cautious with rock-bottom prices that leave out lab work and follow-up. Monitoring is what keeps treatment safe and effective. The value is in a plan that is dosed to your labs and adjusted over time, not just the lowest sticker price.",
      },
    ],
    related: [
      { label: "Book a consultation for exact pricing", to: "/book" },
      {
        label: "Testosterone replacement therapy (TRT) for men",
        to: "/services/hormone-therapy-men",
      },
      { label: "Hormone therapy for women", to: "/services/hormone-therapy-women" },
    ],
  },

  "how-to-choose-a-trt-clinic": {
    slug: "how-to-choose-a-trt-clinic",
    category: "Choosing a Clinic",
    title: "How to Choose a TRT Clinic: 7 Things That Actually Matter",
    h1: "How to choose a TRT clinic",
    description:
      "Not all testosterone clinics are the same. Here are seven things to look for, from labs-based dosing to who you actually see at each visit, before you commit.",
    summary:
      "Seven things that separate a great hormone clinic from a franchise mill, so you pick the right one the first time.",
    readMinutes: 6,
    updated: "2026-07-09",
    intro: [
      "The number of testosterone clinics has exploded, and they are not all created equal. Some are national franchises that run every patient through the same protocol; others are built around you. Here is what to look for before you hand over your health and your money.",
    ],
    sections: [
      {
        heading: "Seven things that matter",
        body: [
          "1. Labs-based dosing. Your plan should come from your own bloodwork, not a standard protocol every patient gets. 2. The same provider each visit. Continuity means someone who actually knows your history and how you are responding. 3. Real monitoring. Ongoing labs and follow-ups keep treatment safe and let the dose be adjusted over time. 4. Care for men and women. A clinic that treats both tends to think about hormones more completely. 5. Telehealth plus local labs. You should not have to rearrange your life for routine visits. 6. Transparent pricing. No surprise fees, and a clear picture of what your plan includes. 7. A whole-person approach. Nutrition, training, and supplement guidance that support the results, not just a shot.",
        ],
      },
      {
        heading: "Franchise vs. concierge",
        body: [
          "National chains can be convenient, but the trade-off is often a standardized protocol, rotating providers, and men-only care. A concierge practice trades that assembly-line model for a plan built around your labs, the same provider each time, and treatment for your whole household. Neither is wrong for everyone, but know which one you are signing up for.",
          "Uplift Medical is intentionally the concierge option: labs-based plans, one provider who knows you, care for men and women, telehealth with local lab draws, and transparent pricing.",
        ],
      },
      {
        heading: "Questions to ask before you commit",
        body: [
          "Ask any clinic: Will my dose be based on my own labs? Will I see the same provider each visit? What monitoring is included? Do you treat women too? Is telehealth available and where do I get labs drawn? What exactly does the price include? The answers tell you very quickly what kind of clinic you are dealing with.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are national testosterone franchises a good option?",
        a: "They can be convenient, but many use a standardized protocol and rotating providers, and treat men only. If you want a plan built from your own labs with the same provider each visit, a concierge clinic is usually the better fit.",
      },
      {
        q: "Can I get TRT through telehealth?",
        a: "Yes. Uplift Medical offers telehealth visits with lab draws arranged near you, so most of your care can happen without a trip to the clinic. Mississippi and Tennessee patients are welcome.",
      },
    ],
    related: [
      { label: "Why patients choose Uplift Medical", to: "/about" },
      {
        label: "Testosterone replacement therapy (TRT) for men",
        to: "/services/hormone-therapy-men",
      },
      { label: "See if you qualify", to: "/qualify" },
    ],
  },
};

export const GUIDE_LIST = Object.values(GUIDES);
export const GUIDE_DISCLAIMER = DISCLAIMER;
