import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { MyContext } from "./MyContext";
import { useContext } from "react";

const App = () => {
    const { generalData } = useContext(MyContext);

    return (
        <Router>
            <div className="App">
                <Nav logo="logo" />
            </div>
            <Switch>
                {generalData.routeMap.map(item => (
                    <Route
                        key={item.id}
                        path={item.path}
                        exact={item.exact}
                        component={item.component}
                    />
                ))}
            </Switch>
        </Router>
    );
};

export default App;
