import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div classname="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Nuchana-react-portfolio" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cv" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
         
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

