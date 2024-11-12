import "./parallax.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false, // Optional: set to false if ref hydration is still an issue
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  return (
    <div
      ref={ref} // Attach ref here for useScroll to work
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(to bottom, #111133, #0c0c1d)"
            : "linear-gradient(to bottom, #0c0c1d, #111133)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I did?"}
      </motion.h1>
      <motion.div
        className="mountains"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="stars"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></motion.div>
    </div>
  );
};
