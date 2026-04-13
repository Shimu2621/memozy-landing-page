import { FaqSectionClient } from "./FaqSectionClient";

export function FaqSection() {
  const faqs = [
    {
      question: "What is Memozy?",
      answer:
        "Memozy is not just another AI chatbot. It's your AI memory, productivity tool, and personal companion - built to help you stay organized, focused, and emotionally supported every day. Whether you need a smart AI assistant app for reminders and planning, or a friendly AI character chat for roleplay and conversation, Memozy adapts to your world.",
    },
    {
      question: "How does Memozy help with productivity?",
      answer:
        "Memozy works as your personal second brain and AI-powered productivity assistant. It helps you manage daily tasks, schedule events, and stay on top of important deadlines. You can create to-do lists, prioritize your work, set smart reminders, sync with your calendar, and quickly capture ideas on the go. From simple shopping lists to complex project timelines, everything is organized in one place for easy access and better productivity.",
    },
    {
      question: "Can Memozy help with writing and journaling?",
      answer:
        "Absolutely! Memozy acts as your AI-powered writing assistant and personal journaling companion. It helps you brainstorm ideas, structure your thoughts, outline stories, and even roleplay characters to bring your writing to life. For personal growth, you can journal daily, track your mood, and reflect on your experiences. Memozy also provides insightful weekly summaries, highlighting your achievements, challenges, and patterns—helping you better understand your habits and progress over time.",
    },
    {
      question: "What are the different AI vibes and modes?",
      answer:
        "Memozy adapts to your mood with a variety of AI-powered chat styles. Choose from Friendly (warm, supportive, and conversational), Professional (clear, structured, and work-focused), Romantic (engaging companion-style interactions), and RoastMe (playful teasing with witty comebacks). You can switch between modes anytime, making every conversation feel personalized and perfectly aligned with your current vibe.",
    },
    {
      question: "What features does Memozy offer?",
      answer:
        "Memozy brings together a powerful set of features to boost both productivity and personal expression. It includes smart reminders, notes and to-do lists, advanced task organization, image-to-notes conversion, seamless calendar sync, and convenient home screen widgets. You can also send voice messages, choose custom AI voices, and receive insightful weekly journal summaries. With personalized chat experiences, Memozy blends the efficiency of an AI assistant with the warmth of an AI companion—making it ideal for students, professionals, and anyone looking to stay organized while feeling connected.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    publisher: {
      "@type": "Organization",
      name: "Memozy",
      url: "https://memozy.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://memozy.ai/favicon.png",
      },
    },
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions about Memozy"
      className="py-20 px-4 relative overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 via-blue-500/30 to-emerald-400/15 dark:from-violet-500/10 dark:via-blue-500/20" />
      <FaqSectionClient faqs={faqs} />
    </section>
  );
}
