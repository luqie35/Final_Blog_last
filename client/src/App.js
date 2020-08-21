import React from "react";
import "./App.css";
import Products from "./components/pages/products/Products";
import Navbar from "./components/layout/Navbar";
import home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aj4 from "./components/pages/products/Aj4";
import Bape from "./components/pages/products/Bape";
import Jacket from "./components/pages/products/Jacket";
import Sensation from "./components/pages/products/Sensation";
import Darwin from "./components/pages/products/Darwin";
import Aj1 from "./components/pages/products/Aj1";
import Form from "./components/pages/Form";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className='App'>
            <div className='app-container'>
              <Navbar />
              <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/aj1' component={Aj1} />
                <Route exact path='/aj4' component={Aj4} />
                <Route exact path='/bape' component={Bape} />
                <Route exact path='/darwin' component={Darwin} />
                <Route exact path='/jacket' component={Jacket} />
                <Route exact path='/sensation' component={Sensation} />
                <Route exact path='/form' component={Form} />
                <Route exact path='/about' component={About} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </div>
          </div>
          <Footer />
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
