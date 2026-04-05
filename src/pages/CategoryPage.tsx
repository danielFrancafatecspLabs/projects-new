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
import loveSectionCover from "../assets/WhatsApp Image 2026-03-28 at 11.23.30.jpeg";
import botanikafeCover from "../assets/images (2).jpg";
import maspCover from "../assets/download (1).jpg";
import ibirapueraCover from "../assets/download (2).jpg";
import firstBookAudio from "../WhatsApp Ptt 2026-03-28 at 11.40.46.ogg";
import himymCover from "../assets/download.jpg";
import himymAudio from "../WhatsApp Ptt 2026-03-28 at 17.08.07.ogg";
import doorsParableAudio from "../WhatsApp Ptt 2026-04-05 at 16.24.29.ogg";

export default function CategoryPage() {
  const { slug } = useParams();

  const category = content.categories.find((item) => item.slug === slug);
  const isLoveCategory = category?.slug === "todas-as-formas-de-te-amar";
  const isCalmCategory =
    category?.slug === "coisas-que-eu-queria-te-dizer-com-calma";
  const showDifficultDaysPlaceRecommendation =
    category?.slug === "para-os-dias-dificeis";
  const firstBookTitle = "Jogo dos desejos";
  const showMovieRecommendation =
    category?.slug === "todas-as-formas-de-te-amar";
  const longText = category ? categoryLongTexts[category.slug] : undefined;
  const difficultDaysAtHomeText =
    "Roteiro de casa: pede um japa, coloca um filme leve (ou Suits), descansa no seu tempo e aproveita para se distrair vendo coisinhas na Amazon. E aproveita pra rir de mim comendo japa pela primeira vez, especialmente aquela alga que deixou gosto na minha boca por diasss 😂. Zero cobrança, só cuidado com você.";
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
        !isLoveCategory && (
          <div className="space-y-4">
            {(isCalmCategory
              ? category.audios.slice(0, 1)
              : category.audios
            ).map((audio, index) => (
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
        )
      )}

      {category.slug !== "nao-esquece-de-comemorar" && paragraphs.length > 0 ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={
            isLoveCategory
              ? "mt-8 rounded-3xl border border-[#d8c8a8] bg-[#fdf6e8] p-6 text-[#3f3022] shadow-[0_18px_36px_-24px_rgba(78,57,28,0.5)] sm:p-8"
              : "mt-8 rounded-2xl border border-black/10 bg-white/70 p-5 sm:p-7"
          }
        >
          {isLoveCategory ? (
            <>
              <div className="mb-4 text-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#6d5537]/70">
                  capítulo especial
                </p>
              </div>

              <div className="space-y-4 font-serif text-[1rem] leading-8">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={`${index}-${paragraph.slice(0, 16)}`}
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
            </>
          ) : (
            paragraphs.map((paragraph, index) =>
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
            )
          )}
        </motion.article>
      ) : null}

      {isCalmCategory && category.audios.length > 1 ? (
        <div className="mt-6 space-y-4">
          {category.audios.slice(1).map((audio, index) => (
            <motion.article
              key={audio.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + index * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white/70 p-4"
            >
              <h2 className="mb-3 text-base font-medium text-black/85">
                {audio.title}
              </h2>
              <AudioPlayer src={audio.file} size="sm" />

              {audio.text
                ? (() => {
                    const fullText = audio.text;
                    const sectionTitles = ["🚪 A parábola das portas"];

                    const foundSections = sectionTitles
                      .map((title) => ({
                        title,
                        index: fullText.indexOf(title),
                      }))
                      .filter((item) => item.index >= 0)
                      .sort((a, b) => a.index - b.index);

                    const mainText =
                      foundSections.length > 0
                        ? fullText.slice(0, foundSections[0].index).trim()
                        : fullText;

                    const mainParagraphs = mainText
                      .split("\n\n")
                      .map((paragraph) => paragraph.trim())
                      .filter(Boolean);

                    const extraSections = foundSections.map(
                      (section, index) => {
                        const start = section.index + section.title.length;
                        const end =
                          index < foundSections.length - 1
                            ? foundSections[index + 1].index
                            : fullText.length;

                        const body = fullText
                          .slice(start, end)
                          .trim()
                          .split("\n\n")
                          .map((paragraph) => paragraph.trim())
                          .filter(Boolean);

                        return {
                          title: section.title,
                          paragraphs: body,
                        };
                      },
                    );

                    return (
                      <>
                        <div className="mt-5 rounded-2xl border border-black/10 bg-white/80 p-5 sm:p-6">
                          {mainParagraphs.map((paragraph, textIndex) =>
                            textIndex === 0 ? (
                              <h3
                                key={`calm-audio-main-${textIndex}-${paragraph.slice(0, 16)}`}
                                className="font-display text-2xl text-black/85 sm:text-3xl"
                              >
                                {paragraph}
                              </h3>
                            ) : (
                              <p
                                key={`calm-audio-main-${textIndex}-${paragraph.slice(0, 16)}`}
                                className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8"
                              >
                                {paragraph}
                              </p>
                            ),
                          )}
                        </div>

                        {extraSections.map((section) => (
                          <div
                            key={`calm-audio-section-${section.title}`}
                            className="mt-5 rounded-2xl border border-black/10 bg-white/80 p-5 sm:p-6"
                          >
                            <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
                              {section.title}
                            </h3>

                            {section.title === "🚪 A parábola das portas" ? (
                              <div className="mt-4">
                                <AudioPlayer
                                  src={doorsParableAudio}
                                  size="sm"
                                />
                              </div>
                            ) : null}

                            {section.paragraphs.map((paragraph, textIndex) => (
                              <p
                                key={`calm-audio-extra-${section.title}-${textIndex}-${paragraph.slice(0, 16)}`}
                                className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        ))}
                      </>
                    );
                  })()
                : null}
            </motion.article>
          ))}
        </div>
      ) : null}

      {isLoveCategory ? (
        <div className="mt-6 space-y-4">
          {category.audios.map((audio, index) => (
            <motion.article
              key={audio.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.08 + index * 0.05,
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
      ) : null}

      {showDifficultDaysPlaceRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="mt-8 rounded-3xl border border-sky-200/70 bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 p-5 shadow-[0_18px_36px_-24px_rgba(46,92,175,0.4)] sm:p-6"
        >
          <div className="mb-4 text-center sm:mb-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-500/80">
              roteiro visual para dias ruins
            </p>
            <h3 className="mt-2 font-display text-2xl text-indigo-900 sm:text-3xl">
              Um plano para sair + um plano para ficar em casa 💜
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white/85 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Roteiro 1 • Sair e viver
              </p>
              <p className="mt-2 text-sm leading-7 text-black/75">
                Acorda cedo, se arruma, fica linda e vai viver. O plano já tá
                pronto: Botanikafé, MASP, Ibirapuera e, à noite, um rolê
                criativo no Ateliê Cerâmica & Vinho.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-white/85 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                Roteiro 2 • Casa e conforto
              </p>
              <p className="mt-2 text-sm leading-7 text-black/75">
                {difficultDaysAtHomeText}
              </p>
            </div>
          </div>
        </motion.article>
      ) : null}

      {showDifficultDaysPlaceRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="mt-8 rounded-2xl border border-black/10 bg-white/75 p-4 sm:p-6"
        >
          <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
            1) Botanikafé ☕
          </h3>

          <div className="mt-4 flex justify-center">
            <img
              src={botanikafeCover}
              alt="Foto do Botanikafé"
              className="h-auto w-full max-w-[360px] rounded-2xl border border-black/15 object-cover shadow-sm"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
            O Botanikafé é um dos cafés que eu sempre quis conhecer, mas ainda
            não tive a oportunidade. Parece aquele tipo de lugar gostosinho pra
            um cafézinho e um bolinho com calda de chocolate... hmmm... deve
            curar qualquer dia triste. Afinal, dia ruim a gente entende no
            detalhe, né?
          </p>

          <p className="mt-4 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
            Mas é claro: se você me chamar, EU TO DENTRO!!! Você sabe que eu não
            consigo negar convite... sou fraco demais 😌 Mas, se você quiser ir
            sozinha também, vai sem medo — acho que você vai amar do mesmo
            jeito.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-white">
            <iframe
              title="Botanikafé no mapa"
              src="https://www.google.com/maps?q=Botanikaf%C3%A9%20Pinheiros%20R.%20Padre%20Garcia%20Velho%2056%20S%C3%A3o%20Paulo&output=embed"
              className="h-64 w-full sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://share.google/jmTzgpjGijFN8vxDQ"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black hover:text-white"
          >
            📍 Ver local no mapa
          </a>
        </motion.article>
      ) : null}

      {showDifficultDaysPlaceRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18 }}
          className="mt-6 rounded-2xl border border-black/10 bg-white/75 p-4 sm:p-6"
        >
          <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
            2) MASP 🎨
          </h3>

          <div className="mt-4 flex justify-center">
            <img
              src={maspCover}
              alt="MASP"
              className="h-auto w-full max-w-[360px] rounded-2xl border border-black/15 object-cover shadow-sm"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
            Depois do café, um passeio no MASP pode ser perfeito para aprender
            um pouco sobre arte e mudar a energia do dia com um rolê cultural.
          </p>

          <a
            href="https://www.google.com/maps/search/MASP"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black hover:text-white"
          >
            🎟️ Ver MASP no mapa
          </a>
        </motion.article>
      ) : null}

      {showDifficultDaysPlaceRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.22 }}
          className="mt-6 rounded-2xl border border-black/10 bg-white/75 p-4 sm:p-6"
        >
          <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
            3) Parque Ibirapuera 🚲
          </h3>

          <div className="mt-4 flex justify-center">
            <img
              src={ibirapueraCover}
              alt="Parque Ibirapuera"
              className="h-auto w-full max-w-[360px] rounded-2xl border border-black/15 object-cover shadow-sm"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-black/70 sm:text-base sm:leading-8">
            Se quiser algo mais leve, vai de Ibirapuera: bike, fone, paisagem
            linda e aquele respiro bom que muda o dia inteiro.
          </p>

          <a
            href="https://www.google.com/maps/search/Parque+Ibirapuera"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black hover:text-white"
          >
            🌳 Ver Ibirapuera no mapa
          </a>
        </motion.article>
      ) : null}

      {showDifficultDaysPlaceRecommendation ? (
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.26 }}
          className="mt-6 rounded-2xl border border-black/10 bg-gradient-to-br from-rose-50 to-amber-50 p-4 sm:p-6"
        >
          <h3 className="font-display text-2xl text-black/85 sm:text-3xl">
            4) Ateliê Cerâmica & Vinho | Pullman Ibirapuera 🍷
          </h3>

          <p className="mt-5 text-sm leading-7 text-black/75 sm:text-base sm:leading-8">
            Viva uma experiência criativa que une cerâmica, open bar de vinhos e
            petiscos em um ambiente criativo. No Ateliê Cerâmica & Vinho |
            Pullman Ibirapuera, você aprende técnicas de modelagem e impressão
            botânica enquanto desfruta de uma atmosfera acolhedora e
            inspiradora. Garanta sua vaga!
          </p>

          <p className="mt-4 text-sm leading-7 text-black/75 sm:text-base sm:leading-8">
            E o melhor: você pode ir com alguém e transformar isso em um rolê
            especial. Mas, se preferir outro plano, vale muito trocar por um
            cineminha também — o importante é você se distrair e curtir.
          </p>

          <div className="mt-5 rounded-2xl border border-black/10 bg-white/80 p-4 text-sm leading-7 text-black/75 sm:text-base sm:leading-8">
            <p className="font-semibold text-black/85">
              O que você vai curtir:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                🏺 Oficina guiada por ceramistas da Associação Cerâmicas
                Baluarte
              </li>
              <li>🌿 Técnica de modelagem e impressão botânica</li>
              <li>🍷 Open bar de vinhos durante o evento</li>
              <li>🧀 Petiscos para harmonizar com a experiência</li>
              <li>
                🖐️ Sua peça autoral, finalizada posteriormente após processo
                artesanal de queima e esmaltação (45 dias)
              </li>
            </ul>

            <p className="mt-4 font-semibold text-black/85">Informações:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>
                📅 Data: selecione sua data diretamente no seletor de ingressos
              </li>
              <li>🕗 Horário: 19h</li>
              <li>⏳ Duração: aproximadamente 2 horas</li>
              <li>📍 Local: Hotel Pullman Ibirapuera</li>
              <li>👤 Idade: a partir de 18 anos</li>
              <li>
                ♿ Acessibilidade: o local é acessível a pessoas com mobilidade
                reduzida
              </li>
            </ul>

            <p className="mt-4 font-semibold text-black/85">Descrição:</p>
            <p className="mt-2">
              O Ateliê Cerâmica & Vinho | Pullman Ibirapuera é uma experiência
              criativa que combina oficina de cerâmica, open bar de vinhos e
              petiscos em um ambiente criativo e acolhedor. Guiada por
              ceramistas da Associação Cerâmicas Baluarte, a atividade ensina
              técnicas de modelagem e impressão botânica inspiradas na natureza.
              Ideal para quem busca desacelerar, criar com as próprias mãos e
              viver uma experiência sensorial diferenciada na cidade. Garanta já
              seus ingressos!
            </p>
          </div>

          <a
            href="https://feverup.com/m/592987"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-black hover:text-white"
          >
            🍷 Ver evento no Fever
          </a>
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
