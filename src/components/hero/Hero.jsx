import "./hero.scss";
import { motion } from "framer-motion";
export const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-221%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARI MAULANA</motion.h2>
          <motion.h1 variants={textVariants}>
            Fullstack Developer, Frontend Geek
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Portfolio" variants={textVariants}>
              See the Latest Work
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <div className="imageContainer">
          <img src="/hero.png" alt="" />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        animate="animate"
        initial="initial"
      >
        Fullstack Developer | Frontend Enthusiast | Designer Fullstack Developer
        | Frontend Enthusiast
      </motion.div>
    </div>
  );
};
