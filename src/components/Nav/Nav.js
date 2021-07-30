import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../MyContext";

import styles from "./Nav.module.scss";

const Nav = ({ logo }) => {
    const { generalData } = useContext(MyContext);
    const { routeMap } = generalData;

    const renderLink = item => (
        <li key={item.id}>
            <Link className={styles.nav__links} to={item.path}>
                {`${item.title}`}
            </Link>
        </li>
    );

    return (
        <nav className={styles.nav}>
            <h3>{logo}</h3>
            <ul>{routeMap.map(renderLink)}</ul>
        </nav>
    );
};

export default Nav;
