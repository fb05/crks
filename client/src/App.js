import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SendForm from "./components/SendForm";
import About from "./components/About";
import Emergency from "./components/Emergency";
import Gdpr from "./components/Gdpr";
import Footer from './components/Footer';
import Ejendom from "./components/Ejendom";
import Entreprise from "./components/Entreprise";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ejendom" component={Ejendom} />
        <Route path="/about" component={About} />
        <Route path="/entreprise" component={Entreprise} />
        <Route path="/emergency" component={Emergency} />
        <Route path="/gdpr" component={Gdpr} />
        <Route path="/report" component={SendForm} />
        <Route component={Home}/>

        
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
