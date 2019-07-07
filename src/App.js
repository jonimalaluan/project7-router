import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Default from "./pages/Default";
import Recipe from "./pages/Recipe";
import SingleRecipe from "./pages/SingleRecipe";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <main />
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/recipe" exact component={Recipe} />
          <Route path="/recipe/:id" component={SingleRecipe} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route component={Default} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
