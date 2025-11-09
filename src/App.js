import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <section id="home">
        <Intro />
      </section>

      <section id="about">
        <Skills />
      </section>
      
      <section id="portfolio">
        <Works />
      </section>

      <section id="contact">
        <Contact />
      </section>
        <Footer />
      
    </div>
  );
}

export default App;
 