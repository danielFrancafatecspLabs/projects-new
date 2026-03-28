import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "04.04.1997",
    title: "O Dia Em Que Você Nasceu",
    description:
      "O dia em que a tia Solange trouxe ao mundo uma das pessoas mais iluminadas que eu já conheci. Alguém que carrega uma leveza rara, que não precisa fazer esforço para ser especial… simplesmente é. Com o tempo, você se tornou a pessoa que transforma tudo ao redor sem perceber, que deixa os dias mais leves, mais bonitos… e a vida, muito mais fácil de sentir.",
    image: "🌟",
  },
  {
    date: "15.06.2024",
    title: "Primeira Vez Que Entendi",
    description:
      "Naquele dia eu percebi que você não era só uma pessoa. Você era a pessoa.",
    image: "💫",
  },
  {
    date: "22.08.2024",
    title: "Noite de Conversas",
    description:
      "Horas de conversa, risos que não queriam parar. Você me mostrou que presença é um presente.",
    image: "🌙",
  },
  {
    date: "14.11.2024",
    title: "Quando Você Sorriu Assim",
    description:
      "Aquele sorriso que mudou tudo. Eu vi nele o futuro que queria construir.",
    image: "✨",
  },
  {
    date: "25.12.2024",
    title: "Feriado Com Você",
    description:
      "Os melhores feriados são aqueles onde o tempo para para você estar perto de mim.",
    image: "🎄",
  },
  {
    date: "08.02.2025",
    title: "Você Em Cada Detalhe",
    description:
      "Percebi que você estava em cada canto da minha rotina. Cada café, cada música, cada respiração.",
    image: "❤️",
  },
];

export default function InteractiveTimeline() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-2xl border border-black/10 bg-gradient-to-br from-white/80 to-white/60 p-5 sm:p-7"
    >
      <h3 className="text-center font-display text-xl text-black/85 sm:text-2xl">
        Momentos que ficaram
      </h3>
      <p className="mt-2 text-center text-xs tracking-wide text-black/50 sm:text-sm">
        Clica em uma data e revive o momento
      </p>

      <div className="mt-6 space-y-2">
        {timelineEvents.map((event, index) => (
          <motion.button
            key={event.date}
            type="button"
            onClick={() =>
              setSelectedIndex(selectedIndex === index ? null : index)
            }
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`w-full rounded-lg border-2 px-4 py-3 text-left transition duration-200 ${
              selectedIndex === index
                ? "border-black/30 bg-white/90 text-black/85"
                : "border-black/10 bg-white/50 text-black/60 hover:bg-white/70"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{event.date}</span>
              <span className="text-lg">
                {selectedIndex === index ? "▼" : "▶"}
              </span>
            </div>
            {selectedIndex === index && (
              <p className="mt-1 text-sm">{event.title}</p>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedIndex !== null ? (
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="mt-5 rounded-xl border border-black/10 bg-white/90 p-4 sm:p-5"
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <div className="flex-shrink-0 text-6xl sm:text-7xl">
                {timelineEvents[selectedIndex].image}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-display text-lg text-black/85 sm:text-xl">
                  {timelineEvents[selectedIndex].title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-black/70 sm:text-base sm:leading-7">
                  {timelineEvents[selectedIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
