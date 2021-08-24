import { useState } from 'react';
import { SimpleDrop } from '..';

import './GlowButton.scss';
import classNames from 'classnames';

const GlowButton = ({ handler }) => {
	const [animate, setAnimate] = useState(true);
	const classes = classNames('button_styles', { btn_animation: animate });
	return (
		<div className='black_back'>
			<SimpleDrop title={' To Drop'}>
				<button
					className={classes}
					onClick={() => setAnimate(!animate)}
				>
					<span>Push Here</span>
				</button>
			</SimpleDrop>
		</div>
	);
};

export default GlowButton;
