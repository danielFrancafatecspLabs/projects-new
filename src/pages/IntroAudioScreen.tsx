import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import ScreenFrame from "../components/ScreenFrame";
import introAudio from "../WhatsApp Ptt 2026-03-28 at 01.06.10.ogg";

const birthdayMessage = `E aí, aniversariante… meia-noite chegou, e já é dia 04 de abril.

Hoje é o seu dia. E, de verdade, que alegria poder estar aqui, mesmo que de longe, comemorando você. Queria poder te dar um abraço apertado, te ver de perto, te dar um beijo… mas mesmo assim fico feliz só de saber que essa mensagem vai chegar até você.

Primeiro, eu quero te desejar tudo de melhor que a vida pode oferecer. Muita saúde, muita paz, muitas conquistas… mas, principalmente, muito amor. Mas muito amor mesmo. Porque se tem uma coisa que define você, é isso: você é amor.

Você ama de um jeito leve, gratuito, sem precisar provar nada pra ninguém… e ainda assim é algo imenso, verdadeiro, raro. Muito raro.

E hoje não é só mais um aniversário. É o começo de um novo ciclo. Como se a vida te desse mais uma oportunidade de viver mais 365 dias sendo exatamente quem você é.

Pra algumas pessoas, viver é só existir. Pra outras, é correr atrás, conquistar, acumular. Mas pra você… viver sempre foi amar.

E quando eu olho pra sua história, eu não vejo só uma sequência de fases… eu vejo alguém que, em cada momento, escolheu amar. Amar as pessoas, amar os momentos, amar até aquilo que doeu.

Uma mulher de 29 anos, forte, linda, educada, uma filha incrível, uma irmã presente, uma madrinha que se faz presente, uma amiga leal… um ser humano que carrega amor em tudo que faz.

Tudo que você viveu até aqui não tirou isso de você. Pelo contrário… só fortaleceu. Porque mesmo depois de tudo, você continua sendo alguém que ama. Que se entrega. Que acredita.

E isso… isso não é pra qualquer um.

Então hoje, no seu dia, eu só espero que você continue sendo exatamente isso: amor. Com esse coração gigante, com esse jeito único de cuidar, de sentir, de se doar… do jeitinho que só você sabe ser.

Que esse novo ciclo venha leve, mas cheio de coisas boas. Que a vida te devolva, em dobro, todo o amor que você coloca no mundo.

Se houver um amanhã que não estejamos juntos, existe uma coisa que você precisa lembrar… você é mais corajosa do que imagina, mais forte do que parece… mas acima de tudo, você é alguém que ama de verdade. E isso sempre vai te fazer única.

Ah… e tem mais uma coisa.

Seus presentes estão comigo. Eu fiz tudo com muito carinho, pensando em você em cada detalhe.
Como estamos afastados achei melhor te entregar em uma hora mais oportuna em que você se sentisse confortável.

Feliz aniversário.
Aproveita seu dia 🤍`;

const birthdayParagraphs = birthdayMessage.split("\n\n");

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
        <div className="rounded-3xl border border-[#d8c8a8] bg-[#fdf6e8] p-6 text-[#3f3022] shadow-[0_18px_36px_-24px_rgba(78,57,28,0.5)] sm:p-8">
          <div className="mb-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6d5537]/70">
              capítulo especial
            </p>
          </div>

          <div className="space-y-4 font-serif text-[1rem] leading-8">
            {birthdayParagraphs.map((paragraph, index) => (
              <p
                key={`${paragraph.slice(0, 24)}-${index}`}
                className={
                  index === 0
                    ? "first-letter:mr-1 first-letter:font-display first-letter:text-4xl first-letter:leading-none first-letter:text-[#8b5a2b]"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

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
