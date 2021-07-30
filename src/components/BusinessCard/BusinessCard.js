// import { useState } from "react";

import styles from "./BusinessCard.module.scss";
import classNames from "classnames";
import { MyContext } from "../../MyContext";
import baloons from "../../images/baloons.JPG";
import deftones from "../../images/deftones.JPG";
import Peter from "../../images/Peter.JPG";
import wood from "../../images/wood.JPG";
import { useContext } from "react";

const images = [baloons, deftones, Peter, wood];

const BusinessCard = () => {
    const { generalData } = useContext(MyContext);
    const { businessCard, container } = styles;
    classNames(businessCard, container);

    return (
        <div className={container}>
            {generalData.persons.map(({ name, age, occupation, id }, i) => (
                <div key={id} className={businessCard}>
                    <img src={images[i]} alt="baloons" />
                    <h2>
                        <span>{name}</span>
                    </h2>
                    <p>
                        Age: <span>{age}</span>
                    </p>
                    <p>
                        Occupation: <span>{occupation}</span>
                    </p>
                    <p>
                        Id: <span>{id}</span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BusinessCard;