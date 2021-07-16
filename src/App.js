import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const renderRoutes = arr => arr.map(renderRoute);

const renderRoute = item => {
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
    const { generalData } = useContext(MyContext);
    return (
        <Router>
            <div className="App">
                <Nav />
            </div>
            <Switch>{renderRoutes(generalData.routeMap)}</Switch>
        </Router>
    );
};

export default App;
