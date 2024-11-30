import "./app.scss";
import { Contact } from "./components/contact/Contact";
import { Cursor } from "./components/cursor/Cursor";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Portofolio } from "./components/portofolio/Portofolio";
import { Services } from "./components/services/Services";

const App = () => {
  return (
    <div style={{}}>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section style={{ height: "100vh" }} id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section style={{ height: "100vh" }} id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portofolio />
      <section
        style={{ height: "100vh", backgroundColor: "transparent" }}
        id="Contact"
      >
        <Contact />
      </section>
    </div>
  );
};

export default App;
