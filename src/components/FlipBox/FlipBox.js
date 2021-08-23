import styles from './FlipBox.module.scss';

const { flip_box, __inner, __front, __back } = styles;

const FlipBox = () => {
	return (
		<div className={flip_box}>
			<div className={__inner}>
				<div className={__front}></div>
				<div className={__back}></div>
			</div>
		</div>
	);
};

export default FlipBox;
