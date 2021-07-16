import styles from "./FruitCard.module.scss";
import { Link } from "react-router-dom";
import { MyContext } from "../../MyContext";
import { useContext } from "react";

const FruitCard = () => {
    const { generalData } = useContext(MyContext);
    const { fruitStyle, fruitBox } = styles;

    const renderFruit = (item, i) => (
        <div key={item.id} className={fruitBox}>
            <img src={item.source} alt={item.id} />
            <Link to={`/fruits/${i}`}>{item.title}</Link>
        </div>
    );
    const renderFruits = generalData.data.map(renderFruit);
    return <div className={fruitStyle}>{renderFruits}</div>;
};

export default FruitCard;
