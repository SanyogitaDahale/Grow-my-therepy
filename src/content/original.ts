import type { SiteContent } from "./types";

const img = (file: string) => `/images/original/${file}`;

export const originalContent: SiteContent = {
  theme: "original",
  brand: {
    name: "Conejo Valley",
    tagline: "Family Counseling",
    logo: {
      src: img("logo.png"),
      alt: "Conejo Valley Family Counseling",
      width: 750,
      height: 219,
    },
  },
  nav: [
    { label: "About", href: "#" },
    {
      label: "Our Team",
      href: "#",
      children: [
        { label: "Jennifer Anderson, LMFT", href: "#" },
        { label: "Candace Bletscher, AMFT", href: "#" },
        { label: "Heather Williams-Baumgart, AMFT", href: "#" },
        { label: "Samantha Johnson, AMFT", href: "#" },
        { label: "Autumn Bodily, AMFT", href: "#" },
        { label: "Rosa Gomez, AMFT", href: "#" },
        { label: "Chad Flores, AMFT", href: "#" },
      ],
    },
    {
      label: "Specialties",
      href: "#",
      children: [
        { label: "Dissociation", href: "#" },
        { label: "Trauma", href: "#" },
        { label: "Special Needs Parenting", href: "#" },
        { label: "Couples", href: "#" },
        { label: "Children & Teens", href: "#" },
        { label: "Anxiety & Depression", href: "#" },
        { label: "Adoption", href: "#" },
      ],
    },
    {
      label: "Methods",
      href: "#",
      children: [
        { label: "EMDR", href: "#" },
        { label: "Brainspotting", href: "#" },
        { label: "Somatic Therapy", href: "#" },
        { label: "Parts Work Therapy", href: "#" },
      ],
    },
    { label: "FAQs", href: "#" },
  ],
  navCta: { label: "Contact", href: "#" },
  hero: {
    eyebrow: "Online & in-person counseling in Newbury Park & across CA",
    title: "Rebuild your foundation on solid ground and finally begin to *thrive*.",
    subtitle:
      "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    cta: { label: "Book an appointment", href: "#" },
    image: { src: img("hero.webp"), alt: "Family walking along the beach" },
    sideImage: {
      src: img("hero-side.webp"),
      alt: "",
      position: "87% 56%",
    },
  },
  intro: {
    title: "You’re holding onto hope that life can be better than it is right now.",
    lead: "At Conejo Valley Family Counseling we want to make that hope a reality.",
    body: [
      "Whether you're an adult seeking personal growth,  looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
    ],
    bodySecondary: [
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    ],
    image: { src: img("intro.webp"), alt: "Waves rolling onto the shore" },
  },
  audiences: {
    title: "Who we *help*",
    items: [
      {
        title: "Adults",
        text: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: {
          src: img("help-adults.webp"),
          alt: "Two friends sitting by the water",
          position: "51% 65%",
        },
      },
      {
        title: "Couples",
        text: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: { src: img("help-couples.webp"), alt: "Couple embracing on the beach" },
      },
      {
        title: "Children & Teens",
        text: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: { src: img("help-kids.webp"), alt: "Siblings playing in the surf" },
      },
    ],
  },
  banner: {
    text: "You deserve a place where your story is heard, valued, and understood. _Nothing will be too heavy for us to carry together._",
    image: { src: img("banner.webp"), alt: "", ungraded: true },
  },
  expertise: {
    title: "Our areas of *expertise*",
    items: [
      "Dissociation",
      "Trauma",
      "Family conflict",
      "Special needs parenting",
      "Depression",
      "Marriage",
      "Anxiety",
      "Relationships",
      "Children",
      "Teens",
      "Intimacy & connection",
      "…and more.",
    ],
  },
  approach: {
    eyebrow: "How we work",
    title: "We’re here to make a difference.",
    lead: "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
    body: [
      " Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
    ],
    bodySecondary: [
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    ],
    link: { label: "Learn more about us", href: "#" },
    image: {
      src: img("how.webp"),
      alt: "Mother and daughter dancing on the sand",
      position: "22% 46%",
    },
  },
  statement: {
    title: "Honoring where you’ve been *&* helping shape where you’re headed.",
    image: { src: img("statement.webp"), alt: "Family holding hands at the water’s edge" },
  },
  specialties: {
    title: "Our *specialties* include…",
    items: [
      {
        title: "Trauma",
        text: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
        link: { label: "Learn more", href: "#" },
      },
      {
        title: "Dissociation",
        text: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        link: { label: "Learn more", href: "#" },
      },
      {
        title: "EMDR",
        text: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        link: { label: "Learn more", href: "#" },
      },
      {
        title: "Special Needs Parenting",
        text: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        link: { label: "Learn more", href: "#" },
      },
    ],
  },
  booking: {
    eyebrow: "Schedule an appointment",
    title: "Find a therapist who is the right fit for *you*.",
    body: [
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
      "Click the button below to schedule an appointment.",
    ],
    cta: { label: "Book now", href: "#" },
    imageLeft: { src: img("cta-left.webp"), alt: "" },
    imageRight: {
      src: img("cta-right.webp"),
      alt: "Child drawing in the sand",
      position: "63% 53%",
      ungraded: true,
    },
  },
  footer: {
    blurb:
      "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    columns: [
      {
        title: "Navigate",
        lines: [
          { label: "Home", href: "#" },
          { label: "About", href: "#" },
          { label: "FAQs", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Our Team",
        lines: [
          { label: "Jennifer Anderson", href: "#" },
          { label: "Heather Williams-Baumgart", href: "#" },
          { label: "Autumn Bodily", href: "#" },
          { label: "Candace Bletscher", href: "#" },
          { label: "Samantha Johnson", href: "#" },
          { label: "Rosa Gomez", href: "#" },
          { label: "Chad Flores", href: "#" },
        ],
      },
      {
        title: "Contact",
        lines: [
          "925 Broadbeck Dr",
          "Suites 200 and 225",
          "Newbury Park, CA 91320",
          { label: "info@conejovalleycounseling.com", href: "mailto:info@conejovalleycounseling.com" },
          { label: "805.242.3120", href: "tel:8052423120" },
        ],
        note: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
      },
    ],
    legal: [
      { label: "Terms", href: "#" },
      " | ",
      { label: "Privacy Policy", href: "#" },
      " | ",
      { label: "Disclaimer", href: "#" },
      " | Website by ",
      { label: "Walker Strategy Co.", href: "#" },
    ],
  },
};
