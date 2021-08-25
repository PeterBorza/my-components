import './GlowButton.scss';

const GlowButton = ({ children, handler, title }) => {
	return (
		<button className='button_styles' onClick={handler}>
			<span>{title}</span>
			{children}
		</button>
	);
};

export default GlowButton;
