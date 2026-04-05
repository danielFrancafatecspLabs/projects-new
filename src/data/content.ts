import introAudio from "../WhatsApp Ptt 2026-03-28 at 01.06.10.ogg";
import whenIPThinkOfYouAudio from "../WhatsApp Ptt 2026-03-28 at 01.53.04.ogg";
import celebrateFirstAudio from "../WhatsApp Ptt 2026-03-28 at 12.01.57.ogg";
import celebrateLastAudio from "../WhatsApp Ptt 2026-03-28 at 16.26.13.ogg";
import difficultDaysFirstAudio from "../WhatsApp Ptt 2026-03-28 at 16.56.05.ogg";
import calmIntroAudio from "../WhatsApp Ptt 2026-04-04 at 15.27.00.ogg";
import calmSecondAudio from "../WhatsApp Ptt 2026-04-04 at 15.41.02.ogg";

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
          title: "Primeiras palavras do coração",
          file: calmIntroAudio,
        },
        {
          title: "Depois do silêncio, o que ficou",
          file: calmSecondAudio,
          text: `O que mudou em mim depois da gente

No último um mês, especialmente na última semana que as coisas ficaram 100% em silência pela primeira vez, eu notei que tem coisas que a gente só começa a perceber quando tudo desacelera.
Quando o silêncio ocupa os espaços que antes eram preenchidos com naturalidade, quando aquilo que era rotina deixa de existir e, no lugar, sobra você.

Foi nesse espaço que eu comecei a entender o que mudou em mim depois da gente.

E não foi algo pontual.
Foi uma transformação silenciosa.

No começo, tudo parecia deslocado. Coisas simples, como ir ao cinema sozinho, carregavam um estranhamento difícil de explicar. Depois de me acostumar com você ali, dividindo o momento, o silêncio parecia errado. Mas, com o tempo, aquilo mudou.

O que antes era ausência… virou presença.

Eu comecei a aprender a estar comigo. Sem precisar preencher o espaço, sem fugir do silêncio. E isso mudou mais do que eu imaginava.

Outras coisas foram se ajustando junto.

No treino, por exemplo, eu parei de esperar alguma coisa acontecer fora de mim. O celular deixou de ser uma extensão de expectativa. Hoje eu só vou, faço o que precisa ser feito e volto. Sem distração. Sem ansiedade disfarçada.

E, no meio dessas mudanças, comecei a olhar pra nossa história de um jeito diferente.

Sem o peso de tentar entender tudo.
Sem a necessidade de voltar em algum ponto.

Hoje eu consigo lembrar da gente com leveza. Sorrir de verdade. Não porque foi perfeito, mas porque foi significativo. Porque teve troca, teve verdade, teve momentos que me atravessaram e deixaram algo que não se perde.

Também aprendi a sentir.

A não fugir quando dói. A não racionalizar tudo como forma de proteção. Tem dias em que a melhor escolha é ficar quieto, respeitar o próprio limite. E, por mais desconfortável que isso seja, é nesse lugar que a gente cresce.

Foi nesse processo que eu tive uma das percepções mais difíceis:

Eu não sou tão bonzinho quanto eu gostava de acreditar.

Existe um lado meu inseguro, um lado que tem medo… e que, na tentativa de se proteger, acaba machucando o que está em volta.

Olhar pra isso não foi fácil.
Mas foi necessário.

Porque foi a partir daí que eu comecei a mudar de verdade.

Eu parei de reagir… e comecei a canalizar.

Fui lutar. E, apanhando mais do que acertando, entendi que cada queda ensina. Que sempre existe uma forma mais consciente de agir. E isso saiu do treino e virou uma forma de enxergar a vida.

Também entendi que a pressa que eu sentia não fazia sentido.

Eu tenho tempo.
Tenho 24 anos.

E viver não precisa ser uma corrida.

Por causa disso, comecei a me permitir mais. Fui pra lugares que não eram minha primeira escolha, fiz coisas fora do meu padrão… só pra experimentar, só pra viver.

E, no meio disso, eu lembrei muito de você.

Do quanto você falava sobre viver. Sobre aproveitar. Sobre não deixar a vida passar.

E talvez esse seja um dos maiores aprendizados que você deixou em mim:

Eu estou aprendendo a viver.

Sem deixar de ser quem eu sou.
Sem perder meus valores, meus princípios, minha essência.

Só… mais consciente agora.
Mais presente.
Mais responsável com o que eu sinto.

No fim, quando eu olho pra trás, eu não vejo só o que acabou.

Eu vejo o que ficou.

E o que ficou… foi grande demais pra ser ignorado.

🚪 A parábola das portas

E talvez, no meio de tudo isso, exista uma coisa que explicou muito do que eu estava sentindo e não conseguia organizar.

Havia, em um lugar onde o tempo não corria — apenas se acumulava — um corredor infinito de portas.

Cada porta representava um encontro. Algumas eram leves como vento de verão: abriam e fechavam no mesmo instante, quase sem deixar rastro. Outras, no entanto, tinham dobradiças mais profundas… e quando se abriam, pareciam não conhecer o gesto de fechar.

Duas pessoas, quando se encontravam diante de uma dessas portas, não precisavam dizer nada. Havia um reconhecimento silencioso, como se algo muito antigo — anterior até mesmo à memória — dissesse: “fiquem.”

E então a porta se abria.

No início, tudo era passagem. Luz atravessando, risos ecoando, passos sem peso. Era como se o mundo inteiro coubesse naquele vão. Mas o que ninguém dizia — porque ninguém ensinou — é que algumas portas não foram feitas para permanecer abertas.

Elas não rangem, não avisam, não imploram por fechamento.

Elas apenas continuam.

E é justamente aí que começa o sofrimento.

Porque quando a porta não fecha, as pessoas também não partem. Elas ficam entre o que foi e o que já não é. Não estão mais dentro, mas também não conseguem sair. Vivem no batente, presas ao eco do que sentiram, alimentando a esperança de que, em algum momento, o que passou volte a atravessar aquele espaço.

E não volta.

Mas a porta continua aberta.

E quanto mais aberta, mais vento entra. E quanto mais vento, mais lembranças. E quanto mais lembranças, mais difícil é aceitar que não há mais ninguém do outro lado.

Assim, muitos passam a vida inteira diante de portas que nunca se fecharam — acreditando que isso é amor, quando na verdade é ausência de despedida.

Mas existe um outro tipo de encontro.

Mais raro. Mais silencioso. Quase imperceptível.

São duas pessoas que também reconhecem algo profundo. Também abrem a porta. Também atravessam juntas tudo o que aquele espaço oferece. Mas, em algum momento — quando a presença já cumpriu seu papel e o que tinha de ser vivido foi vivido — elas fazem algo que poucos conseguem.

Elas olham uma para a outra… e, sem raiva, sem fuga, sem orgulho…

fecham a porta.

Não por falta de amor.

Mas por respeito ao que foi inteiro.

E quando uma porta é fechada assim, ela não range, não pede volta, não deixa fresta. Ela simplesmente… se encerra.

E aquela porta…

nunca mais se abre.`,
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
