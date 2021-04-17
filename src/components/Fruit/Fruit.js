import { useParams, Link } from "react-router-dom";
import { MyContext } from "../../MyContext";
import styles from "./Fruit.module.scss";
import apple from "../../images/apple.jpg";
import orange from "../../images/orange.jpg";
import lemon from "../../images/lemon.jpg";
import apricot from "../../images/apricots.jpg";
import pear from "../../images/pear.jpg";
import mango from "../../images/mango.jpg";
import bananas from "../../images/bananas.jpg";
import grapes from "../../images/grapes.jpg";
import { useContext } from "react";

const fruits = [apple, orange, lemon, apricot, pear, mango, bananas, grapes];

const Fruit = () => {
  const { data } = useContext(MyContext);
  const { id } = useParams();
  return (
    <div className={styles.fruitBox}>
      <img src={fruits[id]} alt="" />
      <p>{data[id].title}</p>
      <Link to="/fruits">Go back...</Link>
    </div>
  );
};

export default Fruit;
