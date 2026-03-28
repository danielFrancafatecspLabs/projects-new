import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import ScreenFrame from "../components/ScreenFrame";
import introAudio from "../WhatsApp Ptt 2026-03-28 at 01.06.10.ogg";

export default function IntroAudioScreen() {
  const navigate = useNavigate();

  return (
    <ScreenFrame
      title="Hoje é o seu dia"
      subtitle="Esse é o começo desse lugar. Um áudio para abrir o coração com calma."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl space-y-6"
      >
        <AudioPlayer src={introAudio} title="Mensagem de abertura" />

        <p className="text-center text-sm leading-relaxed text-black/60">
          Se quiser, escuta no seu tempo. Sem pressa. Só presença.
        </p>

        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate("/menu")}
            className="rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-medium text-black/80 transition duration-200 hover:bg-black hover:text-white"
          >
            Continuar
          </button>
        </div>
      </motion.div>
    </ScreenFrame>
  );
}
