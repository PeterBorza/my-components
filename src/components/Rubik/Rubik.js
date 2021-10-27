import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Rubik.module.scss";
import { MyContext } from "../../MyContext";
import { GlowButton } from "..";

const Rubik = () => {
	const { generalData } = useContext(MyContext);
	const { rubikData, images } = generalData;
	const wrapper = useRef(null);
	const [moveX, setMoveX] = useState("");

	useEffect(() => {
		wrapper.current.style.transform += moveX;
		setMoveX("");
	}, [moveX]);

	const handleLeftRight = () => {
		setMoveX(`rotateX(90deg)`);
	};
	const handleUpDown = () => {
		setMoveX(`rotateY(90deg)`);
	};
	const handleFront = () => {
		setMoveX(`rotateZ(90deg)`);
	};

	const sideStyles = (transform, url) => {
		return {
			transform,
			backgroundImage: `url(${url})`,
		};
	};

	const sides = rubikData
		.transforms()
		.map((side, i) => (
			<div
				key={`side${i}`}
				className={styles.rubikSide}
				style={sideStyles(side, images[i])}
			></div>
		));

	return (
		<div className={styles.rubikContainer}>
			<div className={styles.buttonsWrapper}>
				<GlowButton handler={handleUpDown} title='right' />
				<GlowButton handler={handleLeftRight} title='up' />
				<GlowButton handler={handleFront} title='front' />
			</div>
			<div ref={wrapper} className={styles.rubikWrapper}>
				{sides}
			</div>
		</div>
	);
};

export default Rubik;
