import { useState } from 'react';
import classNames from 'classnames';

import styles from './FlipBox.module.scss';

const { flip_box, inner, front, back, __turn } = styles;

const FlipBox = () => {
	const [flip, setFlip] = useState(false);
	const classes = classNames(inner, { [__turn]: flip });
	return (
		<div className={flip_box} onClick={() => setFlip(!flip)}>
			<div className={classes}>
				<div className={front}></div>
				<div className={back}></div>
			</div>
		</div>
	);
};

export default FlipBox;
