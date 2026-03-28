import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import FloatingBackButton from "./components/FloatingBackButton";
import BookSection from "./pages/BookSection";
import CategoryPage from "./pages/CategoryPage";
import IntroAudioScreen from "./pages/IntroAudioScreen";
import LandingScreen from "./pages/LandingScreen";
import MainMenu from "./pages/MainMenu";

function App() {
  const location = useLocation();
  const showBackButton = location.pathname !== "/";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-20 bg-[#f8f4ee]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(228,209,221,0.55),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(212,209,241,0.45),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(242,225,210,0.5),transparent_35%)]" />

      {showBackButton ? <FloatingBackButton /> : null}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/intro" element={<IntroAudioScreen />} />
            <Route path="/menu" element={<MainMenu />} />
            <Route path="/categoria/:slug" element={<CategoryPage />} />
            <Route path="/livros" element={<BookSection />} />
            <Route path="*" element={<LandingScreen />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
