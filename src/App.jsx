import "./app.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Test } from "./Test";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portofolio</section>
      <section>Portofolio</section>
      <section>Portofolio</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
