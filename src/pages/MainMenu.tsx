import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import content from "../data/content";
import ScreenFrame from "../components/ScreenFrame";

export default function MainMenu() {
  const cards = [
    ...content.categories.map((category) => ({
      icon: category.icon,
      title: category.title,
      to: `/categoria/${category.slug}`,
    })),
    {
      icon: "📚",
      title: "Coisas que mudaram minha vida",
      to: "/livros",
    },
  ];

  return (
    <ScreenFrame
      title="Um lugar para você"
      subtitle="Escolhe por onde começar. Cada card guarda um pedaço dessa história."
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.35 }}
          >
            <Link
              to={card.to}
              className="group flex h-full items-center gap-3 rounded-2xl border border-black/10 bg-white/75 p-4 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.55)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              <span className="text-xl">{card.icon}</span>
              <span className="text-sm font-medium text-black/80">
                {card.title}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </ScreenFrame>
  );
}
