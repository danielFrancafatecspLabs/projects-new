import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import content from "../data/content";
import ScreenFrame from "../components/ScreenFrame";
import birthdayAudio from "../WhatsApp Ptt 2026-03-29 at 21.17.44.ogg";
import presentsAudio from "../WhatsApp Ptt 2026-03-29 at 21.00.31.ogg";

export default function MainMenu() {
  const [birthdayClicked, setBirthdayClicked] = useState(false);
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);
  const [showPresentsModal, setShowPresentsModal] = useState(false);
  const [showPresentsLockModal, setShowPresentsLockModal] = useState(false);
  const [isPresentsUnlocked, setIsPresentsUnlocked] = useState(false);
  const [presentsPassword, setPresentsPassword] = useState("");
  const [presentsPasswordError, setPresentsPasswordError] = useState("");

  const presentsExplanationText = `Bom… você já sabe que eu sou um amante de gestos românticos.

Eu amo a ideia da aliança, de flores, de chocolates…
eu gosto de mimar. Gosto de dar significado pras coisas, de transformar momentos simples em algo que fica.

Mas, sendo bem sincero…

eu fiquei pensando muito antes de escolher o seu presente.

Porque como é que se mima alguém…
que não cabe em nenhuma caixinha?

Pqp… que difícil.

Foi difícil mesmo.

Porque, quando se trata de você, não dá vontade de dar qualquer coisa.
Dá vontade de dar algo que represente. Que carregue sentido. Que fale por si só.

E a gente ama isso, né?
Dar significado.

Então eu fiquei tentando encontrar alguma coisa que conseguisse traduzir, pelo menos um pouco, o que existe aqui.

E aí eu lembrei de uma coisa que já tinha te contado…

sobre o significado da aliança.

A história de que, lá no Antigo Egito, há milhares de anos, os anéis simbolizavam algo que não tinha fim.
Um ciclo contínuo.
Um compromisso eterno.

E eu sempre achei isso muito bonito.

Muito mesmo.

Só que, dessa vez…
não fazia sentido ser um anel.

E foi aí que ficou ainda mais difícil.

Porque eu queria encontrar alguma simbologia…
algum objeto…
que não fosse óbvio,
mas que ainda assim carregasse essa ideia de conexão.

E eu confesso…

às vezes eu sou meio exagerado mesmo.

Igual o Cazuza.

Mas não é amor inventado…
é só intensidade de verdade.

E, ultimamente, eu tenho deixado isso vir mais do coração.

Sem tentar encaixar.
Sem tentar controlar tanto.

E, olhando pra tudo que a gente já viveu…

os altos, os baixos, os momentos bons, os momentos difíceis…

o fato de a gente ainda estar aqui…

me fez pensar em uma coisa muito simples:

parece que existe um fio invisível ligando a gente.

Um fio que não depende de fase.
Não depende de momento perfeito.
Não depende de explicação.

Ele só… existe.

E, pra mim, isso não parece algo momentâneo.

Parece algo que continua.

Algo que, de alguma forma, é infinito.

E foi por isso que eu escolhi esse colar.

Não como um objeto.

Mas como um símbolo.

Um símbolo dessa conexão que a gente construiu…
do nosso jeito…
no nosso tempo.

E, pensando bem…

de todas as formas de te amar…

eu escolhi todas.

Todas as que a vida deixou a gente viver até aqui.

Como amiga.
Como aquela pessoa que eu conto tudo.
Como alguém que me entende.
Como alguém que esteve comigo em momentos importantes.
Como cúmplice.
Como confidente.
Como alguém que eu admiro de verdade.

E, acima de tudo…

como alguém que fez e faz muito sentido na minha vida.

Então esse colar…

eu queria que ele fosse mais do que um presente.

Eu queria que ele fosse um lembrete.

Um lugar.

Um ponto de volta.

Pra quando a gente não se entender.
Pra quando as coisas ficarem confusas.
Pra quando bater distância.

Se algum dia isso acontecer…

coloca a mão nele.

Respira.

E lembra.

Lembra de tudo que a gente construiu.
De tudo que a gente viveu.
De tudo que fez sentido.

Não precisa resolver tudo na hora.

Só lembrar.

Porque algumas coisas…
não precisam ser perfeitas pra continuarem existindo.

E, de alguma forma…

o que a gente tem…
não é feito pra acabar.`;

  const cards = [
    ...content.categories.map((category) => ({
      icon: category.icon,
      title: category.title,
      to: `/categoria/${category.slug}`,
      isNew: category.slug === "coisas-que-eu-queria-te-dizer-com-calma",
    })),
  ];

  const handlePresentsAccess = () => {
    if (isPresentsUnlocked) {
      setShowPresentsModal(true);
      return;
    }

    setShowPresentsLockModal(true);
    setPresentsPassword("");
    setPresentsPasswordError("");
  };

  const handleUnlockPresents = () => {
    if (presentsPassword.trim().toLowerCase() !== "infinito") {
      setPresentsPasswordError("Senha incorreta. Tenta novamente 💛");
      return;
    }

    setIsPresentsUnlocked(true);
    setShowPresentsLockModal(false);
    setPresentsPassword("");
    setPresentsPasswordError("");
    setShowPresentsModal(true);
  };

  return (
    <ScreenFrame
      title="Um lugar para você"
      subtitle="Escolhe por onde começar. Cada card guarda um pedaço dessa história."
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 rounded-2xl border border-black/10 bg-gradient-to-r from-black/[0.02] to-black/[0.08] p-3 text-center"
      >
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/50">
          👇 clica no botão abaixo primeiro
        </p>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => {
          setBirthdayClicked(!birthdayClicked);
          setShowBirthdayModal(true);
        }}
        className="mb-16 w-full"
      >
        <motion.div
          animate={
            birthdayClicked
              ? {
                  backgroundColor: [
                    "rgba(255,255,255,1)",
                    "rgba(255,240,245,1)",
                    "rgba(255,255,255,1)",
                  ],
                  boxShadow: [
                    "0 0 30px rgba(255,105,180,0.8), 0 0 60px rgba(255,192,203,0.6)",
                    "0 0 60px rgba(255,105,180,0.8), 0 0 100px rgba(255,192,203,0.8)",
                    "0 0 30px rgba(255,105,180,0.8), 0 0 60px rgba(255,192,203,0.6)",
                  ],
                  scale: [1, 1.03, 1],
                }
              : {
                  backgroundColor: "rgba(255,255,255,0.8)",
                  boxShadow: "0 8px 30px -20px rgba(0,0,0,0.55)",
                }
          }
          transition={
            birthdayClicked
              ? { duration: 0.7, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.2 }
          }
          className="flex items-center justify-center gap-3 rounded-2xl border-2 border-black/10 p-5 font-display text-2xl font-bold text-black/85"
        >
          <motion.span
            animate={birthdayClicked ? { rotate: 360 } : { rotate: 0 }}
            transition={
              birthdayClicked ? { duration: 1, repeat: Infinity } : {}
            }
          >
            🎂
          </motion.span>
          <span>Feliz Aniversário!</span>
          <motion.span
            animate={birthdayClicked ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={
              birthdayClicked ? { duration: 0.6, repeat: Infinity } : {}
            }
          >
            ✨
          </motion.span>
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="mb-6 mt-4"
      >
        <button
          type="button"
          onClick={handlePresentsAccess}
          className={`group w-full rounded-2xl p-4 text-left transition duration-200 hover:-translate-y-0.5 ${
            isPresentsUnlocked
              ? "border border-amber-200/80 bg-gradient-to-r from-amber-50 via-white to-yellow-50 shadow-[0_12px_28px_-22px_rgba(161,98,7,0.55)] hover:shadow-[0_18px_35px_-22px_rgba(161,98,7,0.7)]"
              : "border border-black/15 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 shadow-[0_12px_28px_-22px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_35px_-22px_rgba(0,0,0,0.5)]"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl shadow-inner ${
                isPresentsUnlocked
                  ? "bg-amber-100 shadow-amber-200/60"
                  : "bg-zinc-300 shadow-zinc-400/50"
              }`}
            >
              🎁
            </div>
            <div className="flex min-w-0 flex-col">
              <span
                className={`font-display text-lg font-bold ${
                  isPresentsUnlocked ? "text-amber-900/90" : "text-zinc-800"
                }`}
              >
                Sobre os seus presentes
              </span>
              <span
                className={`text-xs font-medium ${
                  isPresentsUnlocked ? "text-amber-800/70" : "text-zinc-600"
                }`}
              >
                {isPresentsUnlocked
                  ? "Toque para ouvir a explicação 💛"
                  : "🔒 Só abre com a senha após pegar o presente"}
              </span>
            </div>
          </div>
        </button>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.07, duration: 0.35 }}
          >
            <Link
              to={card.to}
              className="group relative flex h-full items-center gap-3 rounded-2xl border border-black/10 bg-white/75 p-4 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.55)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              {card.isNew ? (
                <span className="absolute -top-2 right-3 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm">
                  NOVO
                </span>
              ) : null}
              <span className="text-xl">{card.icon}</span>
              <span className="text-sm font-medium text-black/80">
                {card.title}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showBirthdayModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowBirthdayModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-lg"
            >
              <div className="mb-6 text-center">
                <h2 className="font-display text-3xl font-bold text-black/90">
                  🎂 Feliz Aniversário! ✨
                </h2>
                <p className="mt-2 text-sm text-black/60">
                  Uma mensagem especial para você
                </p>
              </div>

              <div className="mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 p-6">
                <audio
                  src={birthdayAudio}
                  controls
                  autoPlay
                  className="w-full"
                />
              </div>

              <button
                onClick={() => setShowBirthdayModal(false)}
                className="w-full rounded-xl bg-black/85 py-3 font-medium text-white transition hover:bg-black"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPresentsLockModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => {
              setShowPresentsLockModal(false);
              setPresentsPassword("");
              setPresentsPasswordError("");
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-lg"
            >
              <div className="mb-4 text-center">
                <h2 className="font-display text-2xl font-bold text-black/90">
                  🔒 Conteúdo bloqueado
                </h2>
                <p className="mt-2 text-sm text-black/60">
                  Só abre com a senha após pegar o presente.
                </p>
              </div>

              <input
                type="password"
                value={presentsPassword}
                onChange={(event) => setPresentsPassword(event.target.value)}
                placeholder="Digite a senha (após pegar o presente)"
                className="mb-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black/80 outline-none transition focus:border-black/30"
              />

              {presentsPasswordError ? (
                <p className="mb-3 text-xs text-rose-600">
                  {presentsPasswordError}
                </p>
              ) : null}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPresentsLockModal(false);
                    setPresentsPassword("");
                    setPresentsPasswordError("");
                  }}
                  className="w-full rounded-xl border border-black/15 py-3 text-sm font-medium text-black/70 transition hover:bg-black/5"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleUnlockPresents}
                  className="w-full rounded-xl bg-black/85 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  Desbloquear
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPresentsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowPresentsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-lg"
            >
              <div className="mb-6 text-center">
                <h2 className="font-display text-3xl font-bold text-black/90">
                  🎁 Sobre os seus presentes
                </h2>
                <p className="mt-2 text-sm text-black/60">
                  Uma explicação especial para você
                </p>
              </div>

              <div className="mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 p-6">
                <audio
                  src={presentsAudio}
                  controls
                  autoPlay
                  className="w-full"
                />
              </div>

              <div className="mb-6 max-h-64 overflow-y-auto rounded-2xl border border-amber-200/70 bg-amber-50/60 p-4 text-sm leading-relaxed text-amber-950/90">
                <p className="whitespace-pre-line">{presentsExplanationText}</p>
              </div>

              <button
                onClick={() => setShowPresentsModal(false)}
                className="w-full rounded-xl bg-black/85 py-3 font-medium text-white transition hover:bg-black"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ScreenFrame>
  );
}
