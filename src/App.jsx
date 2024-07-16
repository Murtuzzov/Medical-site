import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Specialized from "./components/Specialized section/Specialized";
import Meeting from "./components/Meeting section/Meeting";
import Stat from "./components/Stat/Stat";
import SectionContent from "./components/CardSection/SectionContent/SectionContent";

function App() {
  return (
    <>
      <Header />
      <Specialized />
      <Meeting />
      <Stat />
      <SectionContent />
    </>
  );
}

export default App;
