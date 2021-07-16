import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../MyContext";
const Nav = () => {
    const { generalData } = useContext(MyContext);
    const { routeMap } = generalData;

    const renderLink = item => (
        <li key={item.id}>
            <Link className="nav-links" to={item.path}>
                {`${item.title}`}
            </Link>
        </li>
    );

    return (
        <nav>
            <h3>logo</h3>
            <ul>{routeMap.map(renderLink)}</ul>
        </nav>
    );
};

export default Nav;
