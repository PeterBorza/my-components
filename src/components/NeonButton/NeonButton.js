import styles from './NeonButton.module.scss';

const NeonButton = ({
	title,
	onClickHandle,
	rightHandClickHandle,
	tabIndex,
}) => {
	return (
		<button
			className={styles.neon_button}
			onClick={onClickHandle}
			onContextMenu={rightHandClickHandle}
			tabIndex={tabIndex}
		>
			{title}
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default NeonButton;
