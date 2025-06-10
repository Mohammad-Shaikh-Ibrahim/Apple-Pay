import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <Section name={"Atoms"} />
      <Cards />
      <Section name={"Templates"} />
    </>
  );
}

export default App;
