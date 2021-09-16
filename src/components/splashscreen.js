import { motion } from "framer-motion";
import "./styles/splashScreen.css";

const transition = {
  duration: 3,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const SplashScreen = () => {
  return (
    <motion.p
      className="splashScreenLogo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      mma
    </motion.p>
  );
};

export default SplashScreen;
