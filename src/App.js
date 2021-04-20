// import React, { useState } from "react";
import "./App.scss";
import { v1 as uuid } from "uuid";
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
        id: uuid(),
        title: "apple",
        // source: apple,
    },
    {
        id: uuid(),
        title: "orange",
        // source: orange,
    },
    {
        id: uuid(),
        title: "lemon",
        // source: lemon,
    },
    {
        id: uuid(),
        title: "apricot",
        // source: apricot,
    },
    {
        id: uuid(),
        title: "pear",
        // source: pear,
    },
    {
        id: uuid(),
        title: "mango",
        // source: mango,
    },
    {
        id: uuid(),
        title: "bananas",
        // source: bananas,
    },
    {
        id: uuid(),
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
        id: uuid(),
    },
    {
        path: "/login",
        component: Login,
        title: "Login",
        exact: false,
        id: uuid(),
    },
    {
        path: "/businesscard",
        component: BusinessCard,
        title: "Business-Card",
        exact: false,
        id: uuid(),
    },
    {
        path: "/fruits",
        component: FruitCard,
        title: "Fruits",
        exact: true,
        id: uuid(),
    },
    {
        path: "/shop",
        component: Shop,
        title: "Quiz",
        exact: false,
        id: uuid(),
    },
    {
        path: "/fruits/:id",
        component: Fruit,
        title: "",
        exact: false,
        id: uuid(),
    },
];

const persons = [
    {
        name: "Baloon5",
        age: "20",
        occupation: "musician/band",
        id: uuid(),
    },
    {
        name: "Deftones",
        age: "30",
        occupation: "musician/band",
        id: uuid(),
    },
    {
        name: "Peter",
        age: "42",
        occupation: "software developer intern",
        id: uuid(),
    },
    {
        name: "Woody Harrelson",
        age: "65",
        occupation: "actor",
        id: uuid(),
    },
];
const renderRoutes = arr => arr.map(renderRoute);

const renderRoute = item => {
    return <Route key={item.id} path={item.path} exact={item.exact} component={item.component} />;
};

const App = () => {
    const [counter, setCounter] = useState(0);
    return (
        <MyContext.Provider value={{ counter, setCounter, data, persons, routeMap }}>
            <Router>
                <div className="App">
                    <Nav />
                </div>
                <Switch>{renderRoutes(routeMap)}</Switch>
            </Router>
        </MyContext.Provider>
    );
};

export default App;
