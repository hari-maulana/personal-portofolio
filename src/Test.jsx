import { motion } from "framer-motion";

export const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0.4, scale: 0.5 }}
        transition={{ duration: 1, delay: 0 }}
        // animate={{ opacity: 1, scale: 1, x: 200, rotate: 360 }}
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 3 }}
        drag
      ></motion.div>
    </div>
  );
};
