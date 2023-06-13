import css from "./styles/app.module.scss"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";



const App = () => {
   return <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
   </div>
};

export default App;
