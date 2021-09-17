import { box, box_h1 } from './GradientText.module.scss';

const GradientText = ({ animatedText = 'colorful' }) => {
	return (
		<div className={box}>
			<h1 className={box_h1}>{animatedText}</h1>
		</div>
	);
};

export default GradientText;
