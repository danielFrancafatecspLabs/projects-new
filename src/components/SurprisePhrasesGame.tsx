import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const surprisePhrases = [
  'Eu amo o jeito que você vira os olhos quando algo te irrita.',
'Amo quando você faz aquele bicão quando fica brava.',
'Amo o seu jeitinho debochado que aparece do nada.',
'Amo quando você tenta esconder que está com ciúmes.',
'Amo a forma como você enxerga o mundo com mais sensibilidade.',
'Amo como você se preocupa com todo mundo, mesmo quando ninguém vê.',
'Amo o jeito que você fala das coisas que sente.',
'Amo quando você começa uma frase e se perde no meio dela.',
'Amo quando você ri de algo que só você achou graça.',
'Amo o jeito que você fica pensativa do nada.',
'Amo quando você tenta ser durona, mas não consegue por muito tempo.',
'Amo quando você cuida dos outros sem perceber.',
'Amo o seu olhar quando você está tranquila.',
'Amo quando você fica meio brava e ao mesmo tempo fofa.',
'Amo quando você tenta explicar algo e se empolga.',
'Amo o seu jeito de se importar de verdade.',
'Amo quando você fala com carinho sem nem perceber.',
'Amo quando você se entrega em uma conversa.',
'Amo quando você fica quietinha, mas presente.',
'Amo o jeito que você escuta.',
'Amo quando você tenta esconder que está feliz.',
'Amo quando você se permite ser leve.',
'Amo o jeito que você observa tudo ao seu redor.',
'Amo quando você demonstra afeto sem esforço.',
'Amo o seu jeito de cuidar de quem você gosta.',
'Amo quando você se preocupa comigo.',
'Amo quando você tenta entender tudo.',
'Amo o jeito que você sente as coisas com intensidade.',
'Amo quando você se abre.',
'Amo o seu lado sensível.',
'Amo quando você fala sério e depois quebra com uma risada.',
'Amo quando você fica meio perdida nos pensamentos.',
'Amo o seu jeito de ser você.',
'Amo quando você não tenta ser perfeita.',
'Amo quando você simplesmente é.',
'Amo quando você me olha sem dizer nada.',
'Amo quando você ri com o olhar.',
'Amo o seu jeito de viver.',
'Amo quando você demonstra saudade.',
'Amo quando você fala coisas profundas do nada.',
'Amo quando você tenta ser racional, mas o coração fala mais alto.',
'Amo quando você se permite sentir.',
'Amo o jeito que você acolhe.',
'Amo quando você fala com verdade.',
'Amo quando você se posiciona.',
'Amo quando você é intensa.',
'Amo quando você é leve.',
'Amo quando você é você, sem filtro.',
'Amo quando você se importa de verdade.',
'Amo quando você mostra quem você é.',
'Amo quando você fala com brilho nos olhos.',
'Amo quando você ri de coisas simples.',
'Amo quando você se permite viver.',
'Amo quando você demonstra carinho.',
'Amo quando você não desiste fácil.',
'Amo quando você continua mesmo cansada.',
'Amo o jeito que você segue em frente.',
'Amo quando você cuida até sem perceber.',
'Amo quando você demonstra amor nos detalhes.',
'Amo quando você fala com o coração.',
'Amo quando você se expressa do seu jeito.',
'Amo quando você se mostra vulnerável.',
'Amo quando você tenta ser forte.',
'Amo quando você é forte sem perceber.',
'Amo quando você é gentil.',
'Amo quando você é doce.',
'Amo quando você é firme.',
'Amo quando você é intensa.',
'Amo quando você desacelera.',
'Amo quando você se permite sentir.',
'Amo quando você se deixa ser cuidada.',
'Amo quando você se abre aos poucos.',
'Amo quando você confia.',
'Amo quando você fica confortável.',
'Amo quando você é espontânea.',
'Amo quando você não pensa demais.',
'Amo quando você vive o momento.',
'Amo quando você se permite ser feliz.',
'Amo quando você relaxa.',
'Amo quando você sorri de verdade.',
'Amo quando você ri sem filtro.',
'Amo quando você fica feliz por coisas pequenas.',
'Amo quando você compartilha seus pensamentos.',
'Amo quando você fala dos seus sonhos.',
'Amo quando você fala do futuro.',
'Amo quando você fala do passado.',
'Amo quando você lembra de coisas simples.',
'Amo quando você se conecta.',
'Amo quando você se entrega.',
'Amo quando você demonstra cuidado.',
'Amo quando você demonstra presença.',
'Amo quando você está ali.',
'Amo quando você não precisa falar nada.',
'Amo quando você só fica.',
'Amo quando você é suficiente sendo você.',
'Amo quando você não tenta impressionar.',
'Amo quando você é natural.',
'Amo quando você é leve.',
'Amo quando você é profunda.',
'Amo quando você mistura tudo isso.',
'Amo quando você é única.',
'Amo quando você me surpreende.',
'Amo quando você me acalma.',
'Amo quando você me faz pensar.',
'Amo quando você me faz sentir.',
'Amo quando você simplesmente existe.',
'Amo quando você chega.',
'Amo quando você fica.',
'Amo quando você permanece.',
'Amo quando você escolhe estar.',
'Amo quando você demonstra que se importa.',
'Amo quando você mostra seu lado mais verdadeiro.',
'Amo quando você deixa a guarda baixar.',
'Amo quando você confia no momento.',
'Amo quando você se permite viver.',
'Amo quando você se permite amar.',
'Amo quando você me deixa ver quem você é.',
'Amo cada versão sua.',
'Amo até as suas dúvidas.',
'Amo até os seus silêncios.',
'Amo até os seus dias difíceis.',
'Amo até quando você não está bem.',
'Amo até quando você se questiona.',
'Amo até quando você se protege.',
'Amo até quando você se fecha um pouco.',
'Amo até quando você demora a se abrir.',
'Amo até quando você não entende o que sente.',
'Amo até quando você está tentando entender.',
'Amo até quando você se perde um pouco.',
'Amo até quando você se encontra de novo.',
'Amo cada detalhe seu.',
'Amo cada forma sua.',
'Amo cada versão sua.',
'Amo o todo que é você.',
'Amo o jeito que você existe.',
'Amo o jeito que você vive.',
'Amo o jeito que você sente.',
'Amo o jeito que você ama.',
'Amo você… em todos os detalhes.'
];

export default function SurprisePhrasesGame() {
  const [revealed, setRevealed] = useState<string | null>(null);
  const [usedPhrases, setUsedPhrases] = useState<Set<string>>(new Set());
  const [revealedCount, setRevealedCount] = useState(0);

  const handleReveal = () => {
    const available = surprisePhrases.filter(
      (phrase) => !usedPhrases.has(phrase),
    );

    const source = available.length > 0 ? available : surprisePhrases;
    const randomPhrase = source[Math.floor(Math.random() * source.length)];

    if (available.length === 0) {
      setUsedPhrases(new Set([randomPhrase]));
    } else {
      setUsedPhrases((prev) => new Set([...prev, randomPhrase]));
    }

    setRevealed(randomPhrase);
    setRevealedCount((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="rounded-2xl border border-black/10 bg-gradient-to-br from-white/80 to-white/60 p-5 sm:p-7"
    >
      <h3 className="text-center font-display text-xl text-black/85 sm:text-2xl">
        Clica e descobre
      </h3>
      <p className="mt-2 text-center text-xs tracking-wide text-black/50 sm:text-sm">
        Cada clique revela uma forma diferente de te amar
      </p>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={handleReveal}
          className="rounded-full border-2 border-black/20 bg-black px-8 py-3 text-sm font-medium text-white transition duration-200 hover:bg-black/90 active:scale-95"
        >
          ✨ Revelar
        </button>
      </div>

      <AnimatePresence mode="wait">
        {revealed ? (
          <motion.div
            key={revealed}
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-xl border border-black/10 bg-white/90 p-4 text-center sm:p-5"
          >
            <p className="text-sm leading-7 text-black/75 sm:text-base sm:leading-8">
              "{revealed}"
            </p>
            <p className="mt-3 text-xs text-black/50">
              {revealedCount} reveladas
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
