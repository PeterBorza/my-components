// import React, { useState } from "react";
import "./App.scss";
import { MyContext } from "./MyContext";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import FruitCard from "./components/FruitCard/FruitCard";
import Fruit from "./components/Fruit/Fruit";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "apple",
    // source: apple,
  },
  {
    id: 2,
    title: "orange",
    // source: orange,
  },
  {
    id: 3,
    title: "lemon",
    // source: lemon,
  },
  {
    id: 4,
    title: "apricot",
    // source: apricot,
  },
  {
    id: 5,
    title: "pear",
    // source: pear,
  },
  {
    id: 6,
    title: "mango",
    // source: mango,
  },
  {
    id: 7,
    title: "bananas",
    // source: bananas,
  },
  {
    id: 8,
    title: "grapes",
    // source: grapes,
  },
];

const routeMap = [
  {
    path: "/",
    component: HomePage,
    title: "Home",
    exact: true,
    id: "1",
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
    exact: false,
    id: "2",
  },
  {
    path: "/businesscard",
    component: BusinessCard,
    title: "Business-Card",
    exact: false,
    id: "3",
  },
  {
    path: "/fruits",
    component: FruitCard,
    title: "Fruits",
    exact: true,
    id: "4",
  },
  {
    path: "/shop",
    component: Shop,
    title: "Shop",
    exact: false,
    id: "5",
  },
  {
    path: "/fruits/:id",
    component: Fruit,
    title: "",
    exact: false,
    id: "6",
  },
];

const persons = [
  {
    name: "Baloon5",
    age: "20",
    occupation: "musician/band",
    id: 1,
  },
  {
    name: "Deftones",
    age: "30",
    occupation: "musician/band",
    id: 2,
  },
  {
    name: "Peter",
    age: "42",
    occupation: "software developer intern",
    id: 3,
  },
  {
    name: "Woody Harrelson",
    age: "65",
    occupation: "actor",
    id: 4,
  },
];
const renderRoutes = (arr) => arr.map(renderRoute);

const renderRoute = (item) => {
  return (
    <Route
      key={item.id}
      path={item.path}
      exact={item.exact}
      component={item.component}
    />
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <MyContext.Provider
      value={{ counter, setCounter, data, persons, routeMap }}
    >
      <Router>
        <div className="App">
          <Nav />
          <Switch>{renderRoutes(routeMap)}</Switch>
        </div>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
