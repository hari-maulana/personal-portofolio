import "./services.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
export const Services = () => {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
      ref={ref}
      // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        {/* <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr /> */}
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          {/* <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1> */}
        </div>
        <div className="title">
          <h1>
            My <motion.b whileHover={{ opacity: 0.5 }}>Expertise</motion.b>
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="bx"
          whileHover={{ background: " lightgray", color: "black" }}
        >
          <h2>Frontend Dev, React, Next.js</h2>
          <p>
            Proficient in building responsive and user-friendly web interfaces,
            using React and Next.js.
          </p>
        </motion.div>
        <motion.div
          className="bx"
          whileHover={{ background: " lightgray", color: "black" }}
        >
          <h2>Backend Dev, Node.js, Express, PostgreSQL</h2>
          <p>
            Can also build RESTful APIs using Node.js, Express, and PostgreSQL.
          </p>
        </motion.div>
        <motion.div
          className="bx"
          whileHover={{ background: " lightgray", color: "black" }}
        >
          <h2>React Native Developer, Android & iOS</h2>
          <p>
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the React Native framework.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
