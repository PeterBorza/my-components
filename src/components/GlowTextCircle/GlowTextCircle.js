import {
	container,
	inner_box,
	text_span,
	animate_span,
} from './GlowTextCircle.module.scss';

const GlowTextCircle = ({
	animateText = 'put your text here',
	animateTime = 300,
}) => {
	const spanLetters = (item, i) => (
		<span
			key={`letter-${i}`}
			className={animate_span}
			style={{
				animationDelay: `${Math.floor(Math.random() * animateTime)}ms`,
			}}
		>
			{item}
		</span>
	);

	const letters = animateText.split('');
	const lightAnimation = letters.map(spanLetters);

	return (
		<div className={container}>
			<div className={inner_box}>
				<span className={text_span}>{lightAnimation}</span>
			</div>
		</div>
	);
};

export default GlowTextCircle;
