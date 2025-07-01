import { useEffect, useState } from "react";
// import { Settings } from "lucide-react";
import styles from "./under-construction.module.css";
import { SettingsIcon } from "src/assets/icons";

export default function UnderConstruction() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 text-white text-center p-4 ${styles.animatedBg}`}
    >
      <div className="animate-spin mb-8">
        {/* <Settings size={64} /> */}
        <SettingsIcon />
      </div>
      <h1
        // className={`text-4xl md:text-5xl font-bold mb-6 typewriter`}
        className={`text-4xl md:text-5xl font-bold mb-6 ${styles.typewriter}`}
      >
        Under Construction
      </h1>
      <p
        // className={`text-lg md:text-xl max-w-2xl mb-8 opacity-0 animateFadeIn`}
        className={`text-lg md:text-xl max-w-2xl mb-8 opacity-0 ${styles.animateFadeIn}`}
      >
        We're working hard to bring you a new experience. Please check back
        soon!
      </p>
      <div className="w-4/5 max-w-md h-4 bg-white bg-opacity-30 rounded-full overflow-hidden">
        {/* <div className={`h-full bg-green-500 animateProgress`}></div> */}
        <div className={`h-full bg-green-500 ${styles.animateProgress}`}></div>
      </div>
    </div>
  );
}
