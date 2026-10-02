import type { SiteContent } from "./types";

const img = (file: string) => `/images/maya/${file}`;

export const contact = {
  practice: "Maya Reynolds, PsyD",
  street: "123th Street 45 W",
  city: "Santa Monica",
  region: "CA",
  postalCode: "90401",
  email: "hello@drmayareynolds.com",
  phone: "(310) 555-0142",
  phoneHref: "tel:+13105550142",
  mapsHref: "https://maps.google.com/?q=123th+Street+45+W,+Santa+Monica,+CA+90401",
};

const bookHref = `mailto:${contact.email}?subject=Consultation%20request`;

export const mayaContent: SiteContent = {
  theme: "maya",
  brand: {
    name: "Maya Reynolds, PsyD",
    tagline: "Psychologist · Santa Monica",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ],
  navCta: { label: "Contact", href: "#contact" },
  hero: {
    eyebrow: "Clinical psychologist\u00a0· Santa\u00a0Monica",
    title: "Hi, I’m Dr. Maya Reynolds. I’m so glad you’re *here*.",
    subtitle:
      "I help high-achieving adults find relief from anxiety, panic, trauma, and burnout. Through warm, collaborative therapy in my Santa Monica office or by telehealth across California, you’ll have space to slow down, heal, and grow.",
    cta: { label: "Book a consultation", href: "#contact", variant: "button" },
    image: {
      src: img("maya-reynolds.png"),
      alt: "Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica",
      position: "50% 22%",
    },
    sideImage: { src: img("hero-side.jpg"), alt: "", position: "50% 50%" },
  },
  intro: {
    title: "You look “functional” on the outside, but inside you feel exhausted and on edge.",
    lead: "You don’t have to keep bracing for something to go wrong.",
    body: [
      "Maybe you’re stuck in overthinking, carrying tension in your body, or lying awake with a mind that won’t slow down. Or maybe earlier life experiences are still shaping your relationships, your confidence, or your sense of safety.",
    ],
    bodySecondary: [
      "As a licensed clinical psychologist in Santa Monica, I help thoughtful, self-aware adults understand both the emotional and physiological sides of what they’re experiencing. Together, we’ll build insight and resilience so you can feel calmer and more regulated in your daily life, not just during sessions.",
    ],
    image: {
      src: img("intro-santa-monica.jpg"),
      alt: "People walking along Santa Monica beach at sunset near the pier",
      position: "62% 50%",
    },
  },
  audiences: {
    id: "services",
    title: "How I can *help*",
    items: [
      {
        title: "Anxiety & Panic",
        text: "Constant worry, racing thoughts, and a body that won’t settle can leave you drained. Using CBT, mindfulness, and body-oriented tools, we’ll calm your nervous system, ease panic, and break the cycle of overthinking.",
        image: {
          src: img("service-anxiety.jpg"),
          alt: "Woman sitting in soft sunlight with her eyes closed, breathing calmly",
          position: "48% 40%",
        },
      },
      {
        title: "Trauma & EMDR",
        text: "Whether you’ve lived through a single traumatic event or long-standing patterns from childhood, relationships, or chronic stress, we’ll move at a careful pace, with safety and stabilization first, using EMDR to help painful memories lose their grip.",
        image: {
          src: img("service-trauma.jpg"),
          alt: "Person sitting quietly on a blanket facing trees at golden hour",
          position: "50% 60%",
        },
      },
      {
        title: "Burnout & Perfectionism",
        text: "For entrepreneurs, creatives, and professionals who’ve spent years pushing through stress. Therapy becomes a space to slow down, ease high internal pressure, reconnect with yourself, and build more sustainable ways of living and working.",
        image: {
          src: img("service-burnout-desk.jpg"),
          alt: "Person in a cozy sweater typing on a laptop at a wooden desk",
          position: "50% 50%",
        },
      },
    ],
  },
  banner: {
    text: "You’ve been holding everything together for a long time. _This can be the place where you finally slow down and exhale._",
    image: { src: img("banner-wide.jpg"), alt: "", position: "50% 50%" },
  },
  expertise: {
    title: "Areas of *focus*",
    items: [
      "Anxiety",
      "Panic attacks",
      "Single-incident trauma",
      "Complex & childhood trauma",
      "Professional burnout",
      "Perfectionism",
      "Chronic stress",
      "Overthinking & worry",
      "Difficulty sleeping",
      "Relationship patterns",
      "Confidence & self-worth",
      "High internal pressure",
    ],
  },
  approach: {
    id: "about",
    eyebrow: "How I work",
    title: "A Santa Monica psychologist who understands life in a fast-paced world.",
    lead: "Warm, collaborative, and grounded therapy for adults.",
    body: [
      "I’m a licensed clinical psychologist offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware, yet internally feel exhausted, stuck in overthinking, or emotionally on edge. Our sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
    ],
    bodySecondary: [
      "I believe therapy works best when you feel respected, understood, and actively involved in the process. My goal isn’t just symptom relief. It’s helping you develop insight, resilience, and a stronger relationship with yourself over time. If you’re looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit.",
    ],
    link: { label: "Book a consultation", href: "#contact", variant: "button" },
    image: {
      src: img("approach-tea-window.jpg"),
      alt: "Woman holding a cup of tea and looking out of a sunlit window",
      position: "42% 45%",
    },
  },
  specialties: {
    id: "approach",
    title: "My therapeutic *approach*",
    items: [
      {
        title: "Cognitive-Behavioral Therapy",
        text: "CBT helps you notice the thought patterns that fuel worry, overthinking, and self-criticism, and gives you practical, evidence-based tools to respond differently, so anxious moments feel more manageable in everyday life.",
        link: { label: "Learn more", href: "#faqs" },
      },
      {
        title: "Mindfulness-Based Practices",
        text: "Mindfulness helps you step out of autopilot and into the present moment. We’ll practice simple ways to notice thoughts and emotions without being swept away by them, creating more space between you and the stress you carry.",
        link: { label: "Learn more", href: "#faqs" },
      },
      {
        title: "EMDR Therapy",
        text: "Eye Movement Desensitization and Reprocessing (EMDR) helps your brain reprocess painful memories so they feel less overwhelming. It is always paced carefully, with an emphasis on safety and stabilization before we go deeper.",
        link: { label: "Learn more", href: "#faqs" },
      },
      {
        title: "Body-Oriented Techniques",
        text: "Anxiety and trauma live in the body as well as the mind. Body-oriented techniques help you recognize tension, calm your nervous system, and feel more regulated in your daily life, not just during our sessions.",
        link: { label: "Learn more", href: "#faqs" },
      },
    ],
  },
  office: {
    id: "office",
    eyebrow: "The Santa Monica office",
    title: "A calm, private space where you can finally *exhale*.",
    body: [
      "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease the moment they arrive.",
      "Prefer to meet from home? Secure telehealth sessions are available for clients located anywhere in California, so you can choose what works best for you.",
    ],
    details: [
      {
        label: "Address",
        value: `${contact.street}, ${contact.city}, ${contact.region} ${contact.postalCode}`,
        href: contact.mapsHref,
      },
      { label: "In person", value: "Quiet, private office with natural light" },
      { label: "Telehealth", value: "Secure sessions for clients in California" },
    ],
    cta: { label: "Schedule a visit", href: "#contact", variant: "button" },
    images: [
      {
        src: img("office-therapy-room.jpg"),
        alt: "Dr. Reynolds’ Santa Monica therapy room with a soft gray sofa, olive tree, and tall sunlit windows",
        position: "45% 55%",
      },
      {
        src: img("office-lounge.jpg"),
        alt: "Bright office seating area with an armchair, sofa, and exposed brick in natural light",
        position: "70% 60%",
      },
    ],
  },
  faq: {
    id: "faqs",
    title: "Frequently asked *questions*",
    intro:
      "Starting therapy can bring up a lot of questions. Here are answers to the ones I hear most often. If yours isn’t here, I’m happy to talk it through.",
    items: [
      {
        question: "Who do you work with?",
        answer:
          "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of my clients are high-achieving entrepreneurs, creatives, and professionals who look “functional” on the outside but feel exhausted, on edge, or stuck in overthinking on the inside.",
      },
      {
        question: "Do you offer in-person sessions or telehealth?",
        answer:
          "Both. You can meet with me in person at my private office in Santa Monica, or through secure telehealth sessions if you’re located anywhere in California.",
      },
      {
        question: "What is EMDR, and is it right for me?",
        answer:
          "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based method that helps the brain reprocess painful memories so they feel less overwhelming. I use it as part of trauma work, always paced carefully with safety and stabilization first. We’ll decide together whether it’s a good fit for you.",
      },
      {
        question: "I’m functioning fine on the outside. Is therapy still for me?",
        answer:
          "Absolutely. Many people I work with are capable and successful, yet quietly struggle with constant worry, tension in their body, trouble sleeping, or a sense that they’re always bracing for something to go wrong. You don’t need to be in crisis to deserve support.",
      },
      {
        question: "What can I expect from our sessions?",
        answer:
          "Sessions are warm, collaborative, and structured enough to feel supportive, while leaving space for reflection and depth. I draw on CBT, EMDR, mindfulness-based practices, and body-oriented techniques, and you’ll always be an active part of deciding where we focus.",
      },
      {
        question: "How do fees and insurance work?",
        answer:
          "Every situation is a little different, so I prefer to go over fees and insurance with you directly. Reach out by phone or email and I’ll walk you through the details before we begin.",
      },
      {
        question: "How do I get started?",
        answer: `Call ${contact.phone} or email ${contact.email} to book a consultation. We’ll talk about what’s bringing you in and whether working together feels like the right fit.`,
      },
    ],
  },
  booking: {
    id: "contact",
    eyebrow: "Schedule a consultation",
    title: "Take the first step toward feeling more like *yourself*.",
    body: [
      "Reaching out takes courage, especially when you’re used to handling everything on your own. Whether you’d like to meet in person at my Santa Monica office or through secure telehealth from anywhere in California, my goal is for you to feel respected, understood, and actively involved from our very first conversation.",
      "Click the button below to request a consultation.",
    ],
    cta: { label: "Book now", href: bookHref, variant: "button" },
    imageLeft: { src: img("cta-left.jpg"), alt: "", position: "40% 50%" },
    imageRight: {
      src: img("cta-right.jpg"),
      alt: "Person walking down a wooden boardwalk across the sand toward the ocean",
      position: "50% 60%",
    },
  },
  footer: {
    blurb:
      "Therapy for anxiety, trauma, and burnout. Meet in person at my Santa Monica office or through secure telehealth from anywhere in California, whichever feels right for you.",
    columns: [
      {
        title: "Navigate",
        lines: [
          { label: "Home", href: "#" },
          { label: "About", href: "#about" },
          { label: "Office", href: "#office" },
          { label: "FAQs", href: "#faqs" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Services",
        lines: [
          { label: "Anxiety & Panic Therapy", href: "#services" },
          { label: "Trauma Therapy", href: "#services" },
          { label: "EMDR Therapy", href: "#approach" },
          { label: "Burnout & Perfectionism", href: "#services" },
          { label: "Telehealth in California", href: "#office" },
        ],
      },
      {
        title: "Contact",
        lines: [
          contact.street,
          `${contact.city}, ${contact.region} ${contact.postalCode}`,
          { label: contact.email, href: `mailto:${contact.email}` },
          { label: contact.phone, href: contact.phoneHref },
        ],
        note: "In person in Santa Monica · Telehealth across California",
      },
    ],
    legal: [
      "© 2026 Maya Reynolds, PsyD | ",
      { label: "Privacy Policy", href: "#" },
      " | ",
      { label: "Terms", href: "#" },
      " | In crisis? Call or text ",
      { label: "988", href: "tel:988" },
    ],
  },
};
