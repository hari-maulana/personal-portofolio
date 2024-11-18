import "./navbar.scss";
import { motion } from "framer-motion";
import { Sidebar } from "./SIdebar/Sidebar";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          style={{ fontFamily: "monospace", fontSize: "20px" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span style={{ color: "#66fcf1" }}>name</span> hari_maulana__.
        </motion.span>
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/harimaulana11"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/hari-maulana"
          >
            <img src="/github.png" alt="" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/hari-maulana"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a className="cv" href="">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
