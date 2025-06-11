import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";
import AtomsCards from "./components/AtomCards";
import TemplatesCards from "./components/TemplatesCards";

function App() {
  return (
    <>
      <Header />
      <Section name={"Atoms"} />
      <AtomsCards />
      <Section name={"Templates"} />
      <TemplatesCards/>
    </>
  );
}

export default App;
