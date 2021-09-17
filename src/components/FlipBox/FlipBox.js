import { useState } from 'react';
import classNames from 'classnames';

import styles from './FlipBox.module.scss';
import GlowTextCircle from '../GlowTextCircle/GlowTextCircle';

const { flip_box, inner, front, back, turn } = styles;

const FlipBox = ({ children = 'click to turn' }) => {
	const [flip, setFlip] = useState(false);
	const classes = classNames(inner, { [turn]: flip });
	return (
		<div className={flip_box} onClick={() => setFlip(!flip)}>
			<div className={classes}>
				<div className={front}>{children}</div>
				<div className={back}>
					<GlowTextCircle
						animateText={'Metallica'}
						animateTime={250}
					/>
				</div>
			</div>
		</div>
	);
};

export default FlipBox;
