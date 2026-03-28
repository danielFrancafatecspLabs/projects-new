import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingBackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="fixed left-4 top-4 z-40 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-2 text-xs font-medium text-black/70 shadow-sm backdrop-blur transition hover:bg-white"
    >
      <ArrowLeft size={14} />
      Voltar
    </button>
  );
}
