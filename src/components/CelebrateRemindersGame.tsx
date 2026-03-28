import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const celebrationReminders = [
  "Você merece celebrar cada vez que escolhe continuar, mesmo em silêncio.",
  "Você merece celebrar por ter um coração que ainda sente bonito.",
  "Você merece celebrar por tudo que já venceu sem precisar anunciar.",
  "Você merece celebrar por cuidar de si, mesmo quando ninguém está vendo.",
  "Você merece celebrar por existir com verdade, do seu jeito.",
  "Você merece celebrar os dias comuns que você transforma em abrigo.",
  "Você merece celebrar a força leve que existe em você.",
  "Você merece celebrar por ser exatamente quem é: inteira, rara e amorosa.",
];

export default function CelebrateRemindersGame() {
  const [currentReminder, setCurrentReminder] = useState<string | null>(null);
  const [usedReminders, setUsedReminders] = useState<Set<string>>(new Set());

  const handleRevealReminder = () => {
    const available = celebrationReminders.filter(
      (reminder) => !usedReminders.has(reminder),
    );

    if (available.length === 0) {
      setCurrentReminder(null);
      setUsedReminders(new Set());
      return;
    }

    const nextReminder =
      available[Math.floor(Math.random() * available.length)];
    setCurrentReminder(nextReminder);
    setUsedReminders((previous) => new Set([...previous, nextReminder]));
  };

  const progress = usedReminders.size;
  const total = celebrationReminders.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-black/10 bg-gradient-to-br from-white/85 to-white/65 p-5 sm:p-7"
    >
      <h3 className="text-center font-display text-xl text-black/85 sm:text-2xl">
        Lembretes para celebrar você
      </h3>
      <p className="mt-2 text-center text-xs tracking-wide text-black/50 sm:text-sm">
        Um clique por vez, com carinho, pra te lembrar do que já é lindo em você
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {celebrationReminders.map((_, index) => (
          <span
            key={`dot-${index}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index < progress ? "bg-black/70" : "bg-black/15"
            }`}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={handleRevealReminder}
          className="rounded-full border-2 border-black/20 bg-black px-7 py-3 text-sm font-medium text-white transition duration-200 hover:bg-black/90 active:scale-95"
        >
          {progress === total ? "🔄 Recomeçar" : "💌 Me lembra mais uma"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {currentReminder ? (
          <motion.div
            key={currentReminder}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mt-6 rounded-xl border border-black/10 bg-white/90 p-4 text-center sm:p-5"
          >
            <p className="text-sm leading-7 text-black/75 sm:text-base sm:leading-8">
              {currentReminder}
            </p>
            <p className="mt-3 text-xs text-black/50">
              {progress} de {total} lembretes revelados
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {progress === total && currentReminder === null ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-5 rounded-lg bg-black/5 p-3 text-center"
        >
          <p className="text-xs font-medium text-black/70">
            🤍 Você revelou todos os lembretes. Você merece celebrar cada um
            deles.
          </p>
        </motion.div>
      ) : null}
    </motion.div>
  );
}
