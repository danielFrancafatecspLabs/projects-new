import { motion } from "framer-motion";
import { Navigate, useParams } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import ScreenFrame from "../components/ScreenFrame";
import { categoryLongTexts } from "../data/categoryLongTexts";
import content from "../data/content";
import movieCover from "../assets/images (1).jpg";
import movieAudio from "../WhatsApp Ptt 2026-03-28 at 08.22.17.ogg";
import movieCover2 from "../assets/images.webp";
import movieAudio2 from "../WhatsApp Ptt 2026-03-28 at 10.25.06.ogg";
import SurprisePhrasesGame from "../components/SurprisePhrasesGame";
import CelebrateRemindersGame from "../components/CelebrateRemindersGame";
import categoryIntroAudio from "../WhatsApp Ptt 2026-03-28 at 10.49.58.ogg";
import loveSectionCover from "../assets/WhatsApp Image 2026-03-28 at 11.23.30.jpeg";
import firstBookAudio from "../WhatsApp Ptt 2026-03-28 at 11.40.46.ogg";
import himymCover from "../assets/download.jpg";
import himymAudio from "../WhatsApp Ptt 2026-03-28 at 17.08.07.ogg";

export default function CategoryPage() {
  const { slug } = useParams();

  const category = content.categories.find((item) => item.slug === slug);
  const firstBookTitle = "Jogo dos desejos";
  const showMovieRecommendation =
    category?.slug === "todas-as-formas-de-te-amar";
  const longText = category ? categoryLongTexts[category.slug] : undefined;
  const paragraphs = longText
    ? longText
        .split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : [];

  if (!category) {
    return <Navigate to="/menu" replace />;
  }

  return (
    <ScreenFrame title={category.title} subtitle={category.intro}>
      {category.slug === "todas-as-formas-de-te-amar" ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 flex justify-center"
          >
            <img
              src={loveSectionCover}
              alt="Momento especial"
              className="h-auto w-full max-w-[360px] rounded-2xl border border-black/10 object-contain shadow-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6 rounded-2xl border border-black/10 bg-white/70 p-4"
          >
            <AudioPlayer
              src={categoryIntroAudio}
              title="Uma mensagem para começar"
              size="sm"
            />
          </motion.div>
          <div className="mb-8">
            <SurprisePhrasesGame />
          </div>
        </>
      ) : null}

      {category.slug === "nao-esquece-de-comemorar" &&
      category.audios.length > 0 ? (
        <div className="space-y-4">
          {/* Primeiro áudio */}
          <motion.article
            key={category.audios[0].title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.08,
            }}
            className="rounded-2xl border border-black/10 bg-white/70 p-4"
          >
            <h2 className="mb-3 text-base font-medium text-black/85">
              {category.audios[0].title}
            </h2>
            <AudioPlayer src={category.audios[0].file} size="sm" />
          </motion.article>

          <CelebrateRemindersGame />

          {/* Texto de comemoração */}
          {paragraphs.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-2xl border border-black/10 bg-white/70 p-5 sm:p-7"
            >
              {paragraphs.map((paragraph, index) =>
                index === 0 ? (
                  <h2
                    key={`celebrate-${index}-${paragraph.slice(0, 16)}`}
                    className="font-display text-2xl text-black/85 sm:text-3xl"
                  >
                    {paragraph}
                  </h2>
                ) : (
                  <p
                    key={`celebrate-${index}-${paragraph.slice(0, 16)}`}
                    className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </motion.article>
          )}

          {/* Demais áudios */}
          {category.audios.slice(1).map((audio, index) => (
            <motion.article
              key={audio.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.22 + index * 0.05,
              }}
              className="rounded-2xl border border-black/10 bg-white/70 p-4"
            >
              <h2 className="mb-3 text-base font-medium text-black/85">
                {audio.title}
              </h2>
              <AudioPlayer src={audio.file} size="sm" />
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {category.audios.map((audio, index) => (
            <motion.article
              key={audio.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay:
                  paragraphs.length > 0 ? 0.08 + index * 0.05 : index * 0.05,
              }}
              className="rounded-2xl border border-black/10 bg-white/70 p-4"
            >
              <h2 className="mb-3 text-base font-medium text-black/85">
                {audio.title}
              </h2>
              <AudioPlayer src={audio.file} size="sm" />
            </motion.article>
          ))}
        </div>
      )}

      {category.slug !== "nao-esquece-de-comemorar" && paragraphs.length > 0 ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-5 sm:p-7"
        >
          {paragraphs.map((paragraph, index) =>
            index === 0 ? (
              <h2
                key={`${index}-${paragraph.slice(0, 16)}`}
                className="font-display text-2xl text-black/85 sm:text-3xl"
              >
                {paragraph}
              </h2>
            ) : (
              <p
                key={`${index}-${paragraph.slice(0, 16)}`}
                className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ),
          )}
        </motion.article>
      ) : null}

      {showMovieRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-8 rounded-2xl border border-black/10 bg-white/75 p-4 sm:p-6"
        >
          <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
            Indicação de Filme: P.S. I Love You
          </h3>

          <div className="mt-4 flex justify-center">
            <img
              src={movieCover}
              alt="Capa do filme P.S. I Love You"
              className="h-auto w-full max-w-[280px] rounded-xl border border-black/10 object-contain shadow-sm sm:max-w-[320px]"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
            Holly e Gerry são um casal profundamente apaixonado, com uma relação
            intensa, cheia de vida e companheirismo. Mas tudo muda quando Gerry
            morre de forma inesperada, deixando Holly perdida, sem direção e
            mergulhada no luto. O que ela não esperava é que, antes de partir,
            Gerry tivesse preparado uma série de cartas — todas terminando com
            “P.S. I Love You”. Aos poucos, essas mensagens começam a chegar até
            ela, guiando seus passos, ajudando-a a enfrentar a dor, redescobrir
            a si mesma e, principalmente, reaprender a viver. Cada carta é um
            gesto de amor que atravessa a ausência, mostrando que, mesmo depois
            do fim, o sentimento ainda encontra formas de permanecer. Mais do
            que uma história sobre perda, o filme é sobre continuidade — sobre
            como o amor pode ir além do tempo, das circunstâncias e da própria
            presença física.
          </p>

          <div className="mt-5">
            <AudioPlayer
              src={movieAudio}
              title="Áudio sobre o filme"
              size="sm"
            />
          </div>
        </motion.article>
      ) : null}

      {showMovieRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-6 rounded-2xl border border-black/10 bg-white/75 p-4 sm:p-6"
        >
          <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
            Indicação de Filme: Simplesmente Acontece
          </h3>

          <div className="mt-4 flex justify-center">
            <img
              src={movieCover2}
              alt="Capa do filme Simplesmente Acontece"
              className="h-auto w-full max-w-[280px] rounded-xl border border-black/10 object-contain shadow-sm sm:max-w-[320px]"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
            Rosie e Alex são melhores amigos desde a infância, sempre muito
            próximos e inseparáveis. Entre conversas, sonhos e momentos
            compartilhados, existe algo mais entre eles — um sentimento que
            nunca chega a ser totalmente dito no momento certo. Ao longo dos
            anos, a vida começa a levá-los por caminhos diferentes. Decisões
            impulsivas, desencontros, relacionamentos com outras pessoas e
            oportunidades perdidas fazem com que eles se afastem em alguns
            momentos, mesmo permanecendo ligados de alguma forma. Enquanto
            crescem e enfrentam os desafios da vida adulta, Rosie e Alex
            continuam orbitando um ao outro, como se existisse algo que nunca se
            desfaz completamente. O filme mostra que nem todo amor segue um
            caminho linear ou acontece no tempo esperado — às vezes, ele apenas
            encontra formas de continuar existindo, mesmo entre idas e vindas,
            até que finalmente possa ser reconhecido.
          </p>

          <div className="mt-5">
            <AudioPlayer
              src={movieAudio2}
              title="Áudio sobre o filme"
              size="sm"
            />
          </div>
        </motion.article>
      ) : null}

      {showMovieRecommendation ? (
        <article className="mt-6 rounded-2xl border border-black/10 bg-white/80 p-4 sm:p-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">📖</span>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/45">
              Primeira indicação de livro
            </p>
          </div>
          <h3 className="mt-2 font-display text-2xl text-black/85 sm:text-3xl">
            {firstBookTitle}
          </h3>

          <div className="mt-5">
            <AudioPlayer
              src={firstBookAudio}
              title="Áudio sobre o livro"
              size="sm"
            />
          </div>
        </article>
      ) : null}

      {showMovieRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="mt-6 rounded-2xl border border-black/10 bg-white/80 p-4 sm:p-6"
        >
          <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
            Indicação de Série: How I Met Your Mother
          </h3>

          <div className="mt-4 flex justify-center">
            <img
              src={himymCover}
              alt="Capa da série How I Met Your Mother"
              className="h-auto w-full max-w-[280px] rounded-xl border border-black/10 object-contain shadow-sm sm:max-w-[320px]"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
            How I Met Your Mother acompanha Ted e seus amigos em Nova York,
            entre encontros, desencontros e histórias que parecem simples, mas
            mudam tudo com o tempo. A série fala sobre amizade, amor, destino e
            sobre como algumas pessoas entram na nossa vida para ficar. Entre
            risadas e momentos emocionantes, ela lembra que os caminhos do amor
            nem sempre são lineares — mas, quando existe conexão de verdade,
            sempre existe um jeito de voltar um para o outro.
          </p>

          <div className="mt-5">
            <AudioPlayer
              src={himymAudio}
              title="Áudio sobre a série"
              size="sm"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-6 rounded-2xl border border-black/10 bg-gradient-to-br from-black/[0.04] to-black/[0.08] p-4 sm:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
              Teoria da linha invisível
            </p>
            <p className="mt-3 text-sm leading-7 text-black/75 sm:text-base sm:leading-8">
              A teoria da linha invisível diz que duas pessoas que se pertencem
              de verdade permanecem conectadas por uma linha que ninguém vê, mas
              que nunca se rompe. Às vezes ela estica com o tempo, com as fases
              e com a distância, mas sempre puxa de volta na direção certa. E é
              por isso que eu acredito na gente: porque mesmo nos dias
              diferentes, a nossa linha continua firme, lembrando que o nosso
              amor não é acaso — é caminho.
            </p>
          </motion.div>
        </motion.article>
      ) : null}
    </ScreenFrame>
  );
}
