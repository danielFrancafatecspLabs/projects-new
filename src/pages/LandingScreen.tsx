import { motion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const isValidSpecialDate = (value: string) => {
  const cleaned = value.trim();

  if (!cleaned) return false;

  const normalized = cleaned.replace(/\s+/g, "");

  const allowedPatterns = [
    /^0404$/, // 0404
    /^04[./-]04$/, // 04/04 | 04-04 | 04.04
    /^4[./-]4$/, // 4/4 | 4-4 | 4.4
    /^0404\d{2}$/, // 0404AA
    /^0404\d{4}$/, // 0404AAAA
    /^04[./-]04[./-]\d{2}$/, // 04/04/AA
    /^04[./-]04[./-]\d{4}$/, // 04/04/AAAA
    /^4[./-]4[./-]\d{2}$/, // 4/4/AA
    /^4[./-]4[./-]\d{4}$/, // 4/4/AAAA
  ];

  return allowedPatterns.some((pattern) => pattern.test(normalized));
};

export default function LandingScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAccessRequest = () => {
    setShowPassword(true);
    setError("");
  };

  const handleSubmitPassword = (event: FormEvent) => {
    event.preventDefault();

    const value = password.trim();

    if (!isValidSpecialDate(value)) {
      setError("Senha incorreta. Tenta lembrar com carinho 💗");
      return;
    }

    setShowPassword(false);
    setPassword("");
    setError("");
    navigate("/intro");
  };

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-8 sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="aurora absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#f2d9e6] blur-3xl" />
        <div className="aurora delay-700 absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-[#dcd7f7] blur-3xl" />
        <div className="aurora delay-300 absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-[#f3e8dd] blur-3xl" />
      </div>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-3xl rounded-[2rem] border border-black/10 bg-white/45 px-6 py-10 text-center shadow-[0_25px_80px_-35px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-12 sm:py-12"
      >
        <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-black/45">
          um lugar só seu
        </p>

        <h1 className="mx-auto max-w-2xl font-display text-[2.2rem] leading-[1.12] text-black/85 sm:text-[3.9rem] sm:leading-[1.08]">
        Pra você
          <span className="block">Com muito carinho!</span>
        </h1>

        <button
          type="button"
          onClick={handleAccessRequest}
          className="mt-8 rounded-full border border-black/20 bg-black px-10 py-3 text-sm font-medium tracking-wide text-white transition duration-200 hover:-translate-y-0.5 hover:bg-black/90 active:translate-y-0"
        >
          Entrar
        </button>

        <div className="mx-auto mt-8 h-px w-28 bg-black/15" />

        <div className="mt-6 space-y-1.5 text-center text-sm leading-relaxed text-black/60 sm:text-base">
          <p className="font-medium text-black/70">Para Inae Ferreira</p>
          <p className="pt-1 italic text-black/75">
            Com Carinho Dani!
          </p>
        </div>
      </motion.section>

      {showPassword ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 px-5">
          <motion.form
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmitPassword}
            className="w-full max-w-sm rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_20px_55px_-25px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <h2 className="font-display text-2xl text-black/85">
              Antes de entrar
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-black/60">
              Digite a senha para continuar.
            </p>
            <p className="mt-1 text-xs tracking-wide text-black/50">
              Dica: A data mais especial do ano
            </p>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoFocus
              placeholder="Digite a senha"
              className="mt-5 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black/80 outline-none ring-0 transition focus:border-black/30"
            />

            {error ? (
              <p className="mt-2 text-xs text-rose-600">{error}</p>
            ) : null}

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowPassword(false);
                  setPassword("");
                  setError("");
                }}
                className="rounded-full px-4 py-2 text-xs font-medium text-black/60 transition hover:bg-black/5"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-full border border-black/20 bg-black px-5 py-2 text-xs font-medium text-white transition hover:bg-black/90"
              >
                Entrar
              </button>
            </div>
          </motion.form>
        </div>
      ) : null}
    </main>
  );
}
