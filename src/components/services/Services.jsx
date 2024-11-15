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
            My <motion.b whileHover={{ color: "orange" }}>Expertise</motion.b>
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="bx"
          whileHover={{ background: " lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="bx"
          whileHover={{ background: " lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="bx"
          whileHover={{ background: " lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="bx"
          whileHover={{ background: " lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
