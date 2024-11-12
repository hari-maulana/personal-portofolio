import "./services.scss";
import { motion } from "framer-motion";
export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Bussiness.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="bx">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </div>
        <div className="bx">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </div>
        <div className="bx">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </div>
        <div className="bx">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores
            quia cumque recusandae amet minima aliquam eaque harum commodi,
            distinctio porro magni fugiat, explicabo unde autem eligendi non
            similique id.
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};
