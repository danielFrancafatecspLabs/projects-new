import introAudio from "../WhatsApp Ptt 2026-03-28 at 01.06.10.ogg";
import careInSilenceAudio from "../WhatsApp Ptt 2026-03-28 at 01.43.52.ogg";
import whenIPThinkOfYouAudio from "../WhatsApp Ptt 2026-03-28 at 01.53.04.ogg";
import celebrateFirstAudio from "../WhatsApp Ptt 2026-03-28 at 12.01.57.ogg";
import celebrateLastAudio from "../WhatsApp Ptt 2026-03-28 at 16.26.13.ogg";
import difficultDaysFirstAudio from "../WhatsApp Ptt 2026-03-28 at 16.56.05.ogg";

export interface AudioItem {
  title: string;
  file: string;
  text?: string;
}

export interface Category {
  slug: string;
  title: string;
  intro: string;
  icon: string;
  audios: AudioItem[];
}

export interface BookItem {
  title: string;
  description: string;
  audio: string;
}

export interface ContentData {
  categories: Category[];
  books: BookItem[];
}

const content: ContentData = {
  categories: [
    {
      slug: "todas-as-formas-de-te-amar",
      icon: "❤️",
      title: "Todas as formas de te amar",
      intro:
        "Um espaço para lembrar que amor também mora nos detalhes pequenos e nos dias comuns.",
      audios: [
        {
          title: "Jeitos de te cuidar em silêncio",
          file: careInSilenceAudio,
        },
        {
          title: "Quando eu penso em você",
          file: whenIPThinkOfYouAudio,
        },
      ],
    },
    {
      slug: "para-os-dias-dificeis",
      icon: "🌧️",
      title: "Para os dias difíceis",
      intro:
        "Quando o mundo pesar, respira por aqui. Você não precisa atravessar tudo sozinha.",
      audios: [
        {
          title: "Respira, vai passar",
          file: difficultDaysFirstAudio,
        },
        {
          title: "Um colo em forma de voz",
          file: "/audios/dia-dificil-2.mp3",
        },
      ],
    },
    {
      slug: "nao-esquece-de-comemorar",
      icon: "🌤️",
      title: "Não esquece de comemorar",
      intro:
        "Aqui ficam lembretes gentis de tudo que você já conquistou, até o que parecia pequeno.",
      audios: [
        {
          title: "Você venceu mais uma vez",
          file: celebrateFirstAudio,
        },
        {
          title: "Celebra teu próprio caminho",
          file: celebrateLastAudio,
        },
      ],
    },
    {
      slug: "coisas-que-eu-queria-te-dizer-com-calma",
      icon: "🧠",
      title: "Coisas que eu queria te dizer com calma",
      intro:
        "Palavras guardadas para o tempo certo — com honestidade, carinho e presença.",
      audios: [
        {
          title: "O que sinto e quase nunca digo",
          file: "/audios/calma-1.mp3",
        },
        {
          title: "Se eu pudesse resumir em uma carta",
          file: "/audios/calma-2.mp3",
        },
      ],
    },
  ],
  books: [
    {
      title: "Rápido e Devagar",
      description:
        "Me fez entender como a gente vive no automático sem perceber. Esse áudio é sobre respirar antes de reagir.",
      audio: "/audios/livro1.mp3",
    },
    {
      title: "A Coragem de Ser Imperfeito",
      description:
        "Um lembrete de que vulnerabilidade não é fraqueza. É o lugar onde a vida realmente acontece.",
      audio: "/audios/livro2.mp3",
    },
  ],
};

export default content;
export { introAudio };
