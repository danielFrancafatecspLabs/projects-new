import { motion } from "framer-motion";
import AudioPlayer from "../components/AudioPlayer";
import ScreenFrame from "../components/ScreenFrame";
import content from "../data/content";

export default function BookSection() {
  return (
    <ScreenFrame
      title="Coisas que mudaram minha vida"
      subtitle="Livros que deixaram marcas e viraram conversa. Se quiser, você pode ouvir sobre cada um."
    >
      <div className="space-y-4">
        {content.books.map((book, index) => (
          <motion.article
            key={book.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-2xl border border-black/10 bg-white/75 p-4"
          >
            <h2 className="font-display text-2xl text-black/85">
              {book.title}
            </h2>
            <p className="mb-4 mt-2 text-sm leading-relaxed text-black/60">
              {book.description}
            </p>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-black/45">
              Ouvir sobre isso
            </p>
            <AudioPlayer src={book.audio} size="sm" />
          </motion.article>
        ))}
      </div>
    </ScreenFrame>
  );
}
