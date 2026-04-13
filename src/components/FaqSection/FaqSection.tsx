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
        "Yes! Memozy doubles as your AI writing partner and journaling app. It can help you brainstorm ideas, outline plots, and even roleplay characters to bring your stories alive. For personal growth, log your thoughts, reflect on your mood, and receive weekly summaries highlighting your wins, struggles, and insights. Journaling with AI gives you a clearer view of your progress and habits over time.",
    },
    {
      question: "What are the different AI vibes and modes?",
      answer:
        "Memozy adapts to your mood with different chat styles: Friendly (warm and supportive), Professional (structured and clear, like a work assistant), Romantic (roleplay as your AI companion), and RoastMe (playful teasing and witty comebacks). Switch modes anytime to enjoy conversations that feel real and match your current vibe.",
    },
    {
      question: "What features does Memozy offer?",
      answer:
        "Memozy offers smart reminders, notes & to-dos, task organization, image to notes conversion, calendar sync, home screen widgets, voice messages, custom AI voices, weekly journal summaries, and personalized chat experiences. It combines the practicality of an AI assistant with the personality of an AI companion, perfect for students, professionals, and anyone seeking both productivity and connection.",
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
