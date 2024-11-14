import "./portofolio.scss";
import { useRef } from "react";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React App",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*JERiGRTbTYAvX9_UCcXOAA.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio blanditiis sunt eius esse? Debitis ea quod consequuntur pariatur? Voluptatum quibusdam dolorem provident nihil velit consequatur obcaecati dignissimos sunt esse.",
  },
  {
    id: 2,
    title: "React App",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*JERiGRTbTYAvX9_UCcXOAA.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio blanditiis sunt eius esse? Debitis ea quod consequuntur pariatur? Voluptatum quibusdam dolorem provident nihil velit consequatur obcaecati dignissimos sunt esse.",
  },
  {
    id: 3,
    title: "React App",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*JERiGRTbTYAvX9_UCcXOAA.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio blanditiis sunt eius esse? Debitis ea quod consequuntur pariatur? Voluptatum quibusdam dolorem provident nihil velit consequatur obcaecati dignissimos sunt esse.",
  },
  {
    id: 4,
    title: "React App",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*JERiGRTbTYAvX9_UCcXOAA.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio blanditiis sunt eius esse? Debitis ea quod consequuntur pariatur? Voluptatum quibusdam dolorem provident nihil velit consequatur obcaecati dignissimos sunt esse.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section style={{ height: "100vh" }}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portofolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portofolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
