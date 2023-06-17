import css from "./styles/app.module.scss"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";


const App = () => {
   return <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work />
      <Portfolio />
      <People />
   </div>
};

export default App;
