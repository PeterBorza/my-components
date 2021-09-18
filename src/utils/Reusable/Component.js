import { container } from './Component.module.scss';

const Component = ({ title = 'Starting a component from here' }) => {
	return (
		<div className={container} title={title}>
			{title}
		</div>
	);
};

export default Component;
