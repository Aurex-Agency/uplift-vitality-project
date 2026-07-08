export type LocationInfo = {
  slug: string;
  name: string;
  county: string;
  headline: string;
  sub: string;
  intro: string[];
  visitNote: string;
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: Record<string, LocationInfo> = {
  tupelo: {
    slug: "tupelo",
    name: "Tupelo",
    county: "Lee County",
    headline: "Hormone therapy in Tupelo, MS.",
    sub: "Our home base. Concierge hormone and wellness care at 144 S Thomas St, Suite 102.",
    intro: [
      "Uplift Medical is proudly based in Tupelo, Mississippi. Our clinic at 144 S Thomas St is where it all happens: consultations, lab reviews, treatment plans, and follow-ups with a team that knows you by name.",
      "Whether you are dealing with fatigue, weight gain, low libido, brain fog, or mood swings, we build a personalized plan around your labs, your history, and your goals. Prefer to skip the trip? Every service we offer is also available by telehealth.",
    ],
    visitNote:
      "Visit us in person at 144 S Thomas St, Suite 102, or connect by telehealth from anywhere in Mississippi or Tennessee.",
    faqs: [
      {
        q: "Where is Uplift Medical located in Tupelo?",
        a: "We are at 144 S Thomas St, Suite 102, B, Tupelo, MS 38801. Parking is available on site, and same-week appointments are often available.",
      },
      {
        q: "Do I need a referral to be seen in Tupelo?",
        a: "No referral is needed. Schedule a consultation, get your lab work done, and we will build a personalized treatment plan. No insurance is required either.",
      },
    ],
  },
  saltillo: {
    slug: "saltillo",
    name: "Saltillo",
    county: "Lee County",
    headline: "Hormone therapy near Saltillo, MS.",
    sub: "Concierge hormone and wellness care, just a short drive down US-45 from Saltillo.",
    intro: [
      "If you live in Saltillo, expert hormone care is closer than you think. Our Tupelo clinic is about fifteen minutes south on US-45, making in-person visits easy to fit around work, school pickup, or the gym.",
      "Many of our Saltillo patients combine a quick first visit for labs with telehealth follow-ups, so ongoing care rarely requires the drive. Fatigue, low energy, weight gain, and low libido do not have to be your normal.",
    ],
    visitNote:
      "About 15 minutes from Saltillo via US-45. Telehealth follow-ups available so you only drive when you want to.",
    faqs: [
      {
        q: "How far is Uplift Medical from Saltillo?",
        a: "Our Tupelo clinic is roughly a 15 minute drive from Saltillo down US-45, at 144 S Thomas St, Suite 102.",
      },
      {
        q: "Can I handle most visits from Saltillo by telehealth?",
        a: "Yes. After your initial consultation and lab work, most follow-ups can be handled by secure telehealth from home.",
      },
    ],
  },
  pontotoc: {
    slug: "pontotoc",
    name: "Pontotoc",
    county: "Pontotoc County",
    headline: "Hormone therapy near Pontotoc, MS.",
    sub: "Personalized hormone and wellness care about 25 minutes east of Pontotoc.",
    intro: [
      "Pontotoc patients choose Uplift Medical for care that treats them like a person, not a number. Our Tupelo clinic sits about 25 minutes east along Highway 6, an easy trip for the visits that matter most.",
      "We pair in-person consultations with telehealth follow-ups and local lab draw options, so restoring your energy, strength, and balance does not take over your calendar.",
    ],
    visitNote:
      "About 25 minutes from Pontotoc via MS-6. Telehealth visits and local lab draws keep travel to a minimum.",
    faqs: [
      {
        q: "How far is Uplift Medical from Pontotoc?",
        a: "We are about 25 minutes east of Pontotoc via Highway 6, at 144 S Thomas St, Suite 102 in Tupelo.",
      },
      {
        q: "Do Pontotoc patients have to come to Tupelo for every visit?",
        a: "No. Most patients come in for their initial consultation and then use telehealth for follow-ups, with lab draws arranged close to home.",
      },
    ],
  },
  amory: {
    slug: "amory",
    name: "Amory",
    county: "Monroe County",
    headline: "Hormone therapy near Amory, MS.",
    sub: "Concierge hormone and wellness care for Monroe County, about 30 minutes from Amory.",
    intro: [
      "From Amory and across Monroe County, patients trust Uplift Medical for personalized hormone care. Our Tupelo clinic is about a 30 minute drive, and most ongoing care can happen by telehealth once your plan is dialed in.",
      "If you are pushing through fatigue, stubborn weight gain, poor sleep, or a libido that is not what it used to be, a simple lab panel can tell us a lot. We build your plan around your results and your life.",
    ],
    visitNote:
      "About 30 minutes from Amory. In-person when you need it, telehealth when you do not.",
    faqs: [
      {
        q: "How far is Uplift Medical from Amory?",
        a: "Our Tupelo clinic is about a 30 minute drive from Amory, at 144 S Thomas St, Suite 102.",
      },
      {
        q: "Is telehealth available for Amory patients?",
        a: "Yes. After your initial visit and labs, follow-ups can be handled by secure telehealth so you do not have to make the drive for every appointment.",
      },
    ],
  },
  "new-albany": {
    slug: "new-albany",
    name: "New Albany",
    county: "Union County",
    headline: "Hormone therapy near New Albany, MS.",
    sub: "Personalized hormone and wellness care, a quick trip down I-22 from New Albany.",
    intro: [
      "New Albany sits just up I-22 from our Tupelo clinic, about a 30 minute drive. That puts physician-guided hormone therapy, peptides, and personalized wellness plans within easy reach of Union County.",
      "Start with a consultation and lab work, then manage most of your ongoing care by telehealth. More energy, better sleep, sharper focus, and restored confidence are closer than you think.",
    ],
    visitNote:
      "About 30 minutes from New Albany via I-22. Telehealth follow-ups keep your care convenient.",
    faqs: [
      {
        q: "How far is Uplift Medical from New Albany?",
        a: "We are about 30 minutes from New Albany via I-22, at 144 S Thomas St, Suite 102 in Tupelo.",
      },
      {
        q: "Can New Albany patients use telehealth?",
        a: "Yes. Most follow-up visits can be handled by secure telehealth, with lab draws arranged near you when needed.",
      },
    ],
  },
  oxford: {
    slug: "oxford",
    name: "Oxford",
    county: "Lafayette County",
    headline: "Hormone therapy for Oxford, MS.",
    sub: "Concierge hormone and wellness care for Oxford, in person or by telehealth.",
    intro: [
      "Oxford patients do not have to choose between quality and convenience. Uplift Medical serves Lafayette County with comprehensive telehealth visits, supported by local lab draw stations, so most of your care never requires leaving Oxford.",
      "When an in-person visit makes sense, our Tupelo clinic is about an hour east on Highway 6. Either way, you get the same personalized plan built from your labs, your history, and your goals.",
    ],
    visitNote:
      "Full telehealth care with lab draws near Oxford, or visit our Tupelo clinic about an hour east on MS-6.",
    faqs: [
      {
        q: "Do I have to drive to Tupelo from Oxford?",
        a: "Usually not. Most Oxford patients handle visits by secure telehealth with lab draws arranged locally. Our Tupelo clinic is about an hour away when you prefer in-person care.",
      },
      {
        q: "What services are available to Oxford patients?",
        a: "Everything we offer: testosterone therapy for men and women, progesterone and estrogen therapy, peptides, nutrition, personalized training, and supplementation protocols.",
      },
    ],
  },
};

export const LOCATION_LIST = Object.values(LOCATIONS);
