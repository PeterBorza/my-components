import styles from "./FruitCard.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { MyContext } from "../../MyContext";
import { useContext } from "react";
import apple from "../../images/apple.jpg";
import orange from "../../images/orange.jpg";
import lemon from "../../images/lemon.jpg";
import apricot from "../../images/apricots.jpg";
import pear from "../../images/pear.jpg";
import mango from "../../images/mango.jpg";
import bananas from "../../images/bananas.jpg";
import grapes from "../../images/grapes.jpg";

const fruits = [apple, orange, lemon, apricot, pear, mango, bananas, grapes];

const FruitCard = () => {
  const { data } = useContext(MyContext);
  const { fruitStyle, fruitBox } = styles;

  const renderFruit = (item, i) => (
    <div key={item.id} className={fruitBox}>
      <img src={fruits[i]} alt={item.id} />
      <Link to={`/fruits/${i}`}>{item.title}</Link>
    </div>
  );
  const renderFruits = data.map(renderFruit);
  // classNames(fruitStyle);
  return <div className={fruitStyle}>{renderFruits}</div>;
};

export default FruitCard;
