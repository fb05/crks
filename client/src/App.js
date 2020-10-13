import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
