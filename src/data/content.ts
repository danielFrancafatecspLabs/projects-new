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

Tem coisas que a gente só começa a perceber quando tudo desacelera. Quando o silêncio ocupa os espaços que antes eram preenchidos com naturalidade, quando aquilo que era rotina deixa de existir e, no lugar, sobra você. Foi nesse espaço que eu comecei a entender, de verdade, o que mudou em mim depois da gente. E não foi algo pontual, nem superficial. Foi uma transformação silenciosa, que começou nas pequenas coisas e, quando eu percebi, já tinha atravessado partes muito mais profundas de mim.

Ir ao cinema sozinho, por exemplo, foi uma das primeiras experiências em que isso ficou evidente. Depois de ter me acostumado com você ali, comentando alguma cena, dividindo aquele momento de forma leve, estar sozinho parecia deslocado, quase como se algo estivesse fora do lugar. Mas, com o tempo, esse estranhamento foi dando lugar a outra coisa: presença. Eu comecei a aprender a estar comigo, sem precisar preencher o espaço com alguém, sem precisar fugir do silêncio. E isso, que parece simples, mudou muito mais do que eu imaginava.

No treino também. Antes, o celular sempre por perto, como uma extensão de alguma expectativa, como se eu estivesse sempre esperando alguma coisa acontecer ali na tela. Hoje não. Hoje eu vou, treino, volto. Sem essa necessidade de distração, sem essa ansiedade disfarçada. Só eu, ali, presente. E, no meio dessas mudanças aparentemente pequenas, outras coisas começaram a se reorganizar dentro de mim.

Também aprendi a olhar para a nossa história de um jeito diferente. Não mais com o peso constante de tentar entender tudo ou de querer voltar em algum ponto específico, mas com uma leveza que vem da aceitação. Hoje eu consigo sorrir quando lembro da gente. Sorrir de verdade. Não porque foi perfeito, mas porque foi significativo. Porque teve troca, teve verdade, teve momentos que, de alguma forma, me atravessaram e deixaram algo que não se perde.

E, talvez, uma das mudanças mais importantes tenha sido aprender a sentir as coisas como elas são. Aprendi a chorar quando dói, sem tentar racionalizar tudo ou fugir daquilo que incomoda. Aprendi que existem dias em que a melhor decisão é não sair, é ficar quieto, é respeitar o próprio limite. Existe uma necessidade real em sentir, em não anestesiar, em não fingir que está tudo bem quando não está. E, por mais desconfortável que isso seja, é nesse lugar que a gente cresce de verdade.

Com o tempo, eu também entendi que revisitar conversas, lembrar de falas, reconhecer erros e deslizes não é um tipo de punição, como muitas vezes parece. É um processo de construção. É ali que a gente percebe padrões, entende onde exagerou, onde faltou, onde poderia ter sido diferente. E foi nesse processo que eu tive uma das percepções mais difíceis: eu não sou tão bonzinho quanto eu gostava de acreditar. Existe um lado meu que é inseguro, que é medroso, e que, na tentativa de se proteger, acaba machucando o que está em volta. Olhar para isso não é confortável, mas foi essencial para que eu começasse a mudar de verdade.

Essa mudança também passou pela forma como eu comecei a lidar com o que eu sinto. Ao invés de descontar, de reagir impulsivamente, eu fui canalizar. Fui lutar, literalmente. E nessas últimas semanas, apanhando mais do que acertando, eu comecei a perceber que cada queda carrega uma lição. Cada erro mostra um caminho diferente, uma alternativa melhor, uma forma mais consciente de agir. E isso saiu do treino e virou uma forma de enxergar a vida. Nem sempre a gente acerta de primeira, mas sempre existe algo a aprender em cada tentativa.

Outra coisa que mudou foi a minha relação com o tempo. Eu entendi, talvez pela primeira vez de forma real, que não existe essa urgência que eu criava dentro de mim. Eu tenho tempo. Tenho 24 anos. E isso não é pouco. Isso não precisa ser vivido com pressa, com ansiedade, com a sensação de que tudo precisa acontecer agora. E, por causa disso, eu comecei a me permitir viver mais, mesmo quando não era exatamente o que eu queria fazer. Fui para um samba quando preferia estar no meu lugar de conforto, fui para situações que não eram naturais para mim, justamente para experimentar, fazer coisas que nunca fiz, para entender, para viver. E, no meio disso, eu lembrei muito de você, do quanto você falava sobre viver, sobre aproveitar, sobre não deixar a vida passar. Sobre experimentar sabores, pessoas, lugares e sentir a vida de forma diferente.

E talvez esse seja um dos pontos mais bonitos de tudo isso: eu aprendi a viver um pouco mais, sem deixar de ser quem eu sou. Sem perder meus valores, meus princípios, minha essência. Não se trata de virar outra pessoa, mas de ampliar quem eu já era. De adicionar consciência, presença, responsabilidade emocional.

No fim de tudo, quando eu olho para trás, o que fica não é arrependimento. É aprendizado. É um reconhecimento sincero de que tudo que aconteceu teve um papel na pessoa que eu estou me tornando agora. E, por mais que nem tudo tenha sido leve, foi necessário.

Porque, de alguma forma, eu sei que hoje eu sou mais consciente, mais presente e, principalmente, mais preparado do que eu era antes da gente.

Tem coisas que a gente só começa a entender quando não tem mais pra onde correr. Quando o silêncio se instala de um jeito que não dá pra distrair, quando a ausência deixa de ser só um espaço vazio e passa a ser algo que a gente precisa aprender a conviver. E, sendo muito honesto, eu ainda não me acostumei com a sua ausência. Ainda tem momentos em que eu sinto como se algo estivesse fora do lugar, como se faltasse um pedaço do dia que antes era preenchido com naturalidade.

Mas, no meio disso, eu comecei a perceber que, antes de qualquer reação, antes de qualquer tentativa de resolver, antes até de chorar… eu precisava aceitar. Aceitar que as coisas mudaram. Aceitar que nem tudo volta pro lugar que a gente gostaria. Teve noite em que eu esperei uma ligação sua, com o celular por perto, como se em algum momento algo fosse acontecer e, de alguma forma, reorganizar tudo. Mas o tempo foi passando… e eu fui entendendo que essa espera também precisava acabar.

E foi aí que algumas coisas começaram a mudar.

Eu comecei a ligar para pessoas que eu não ligava há muito tempo. Amigos que sempre estiveram ali, mas que nunca foram prioridade enquanto eu estava ocupado vivendo outras coisas. E, nessas conversas, eu reencontrei algo que eu nem sabia que estava sentindo falta: profundidade. Aquele tipo de troca que não é sobre preencher tempo, mas sobre realmente se fazer presente. Ainda assim, nem tudo cabe nessas conversas. Tem coisas que eu continuo escrevendo, organizando em silêncio, tentando entender sozinho. Mas eu entendi uma coisa importante: eu preciso de alguém que saiba me escutar de verdade. E isso não é detalhe. Isso é essencial. Só que agora, com mais calma, com mais cuidado… sem pressa de encontrar.

Foi depois disso que eu comecei a perceber outras mudanças mais sutis.

Ir ao cinema sozinho, por exemplo, deixou de ser só estranho e passou a ser um exercício. Um exercício de lidar com o silêncio, de não preencher automaticamente o espaço, de aceitar que nem todo momento precisa ser compartilhado pra ter valor. E, aos poucos, aquilo que parecia vazio foi se tornando presença. Presença minha.

No treino também. Antes, o celular sempre ali, como se eu estivesse esperando algo acontecer fora de mim. Hoje não. Hoje eu fico. Eu treino. Eu volto. Sem distração, sem ansiedade, sem aquela sensação de que algo está faltando. E isso parece pequeno… mas não é. Porque, no fundo, é aprender a não depender de algo externo pra estar bem.

E, no meio dessas mudanças, algumas percepções começaram a ficar mais claras.

Eu comecei a olhar pra nossa história de um jeito diferente. Sem tentar encaixar em certo ou errado, sem tentar entender onde começou ou onde terminou. Só reconhecendo. Reconhecendo que foi real, que teve valor, que teve momentos que, de alguma forma, me atravessaram e deixaram marcas que não se apagam.

E talvez o mais importante tenha sido isso: eu aprendi a sentir de verdade.

Aprendi a chorar quando dói, sem tentar esconder, sem tentar racionalizar tudo. Aprendi que existem dias em que a melhor decisão é não sair, é não forçar, é respeitar o próprio tempo. E que sentir não é fraqueza. É processo.

Mas também aprendi a olhar pra mim com mais honestidade.

A entender que eu não sou tão bonzinho quanto eu gostava de acreditar. Que existe um lado meu inseguro, um lado que tem medo, e que, muitas vezes, pra se proteger, acaba machucando o que está em volta. E olhar pra isso não foi fácil. Mas foi necessário.

Porque foi a partir daí que eu comecei a mudar de verdade.

Eu parei de descontar o que eu sentia… e comecei a canalizar. Fui lutar. E, nessas últimas semanas, apanhando mais do que acertando, eu entendi que cada queda carrega uma lição. Que sempre existe uma forma melhor, mais consciente, mais equilibrada de agir. E isso saiu do treino e virou uma forma de enxergar a vida.

Eu também entendi que a pressa que eu sentia não fazia sentido. Que eu tenho tempo. Que eu tenho 24 anos. E que viver não precisa ser uma corrida. Por causa disso, eu comecei a me permitir mais. Fui pra lugares que não eram minha primeira escolha, fiz coisas que não eram tão naturais pra mim, só pra experimentar, só pra viver. E, no meio disso, eu lembrei muito de você. Do quanto você falava sobre viver, sobre aproveitar, sobre não deixar a vida passar.

E talvez esse seja um dos maiores aprendizados que você deixou em mim.

Eu estou aprendendo a viver.

Sem perder quem eu sou.

Sem perder meus valores, meus princípios, minha essência.

Só… mais consciente agora.

Mais presente.

Mais responsável com o que eu sinto.

E, no fim de tudo, quando eu olho pra trás, eu não vejo só o que acabou.

Eu vejo o que ficou.

E o que ficou…
foi grande demais pra ser ignorado.

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
