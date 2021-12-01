import "./HoverImage.scss";
import classNames from "classnames";
import peter from "../../images/peter400.jpg";

const HoverImage = ({ sourceImage, size }) => {
	const imageStyle = classNames("outer-container", `image-size-${size}`);
	return (
		<div className={imageStyle}>
			<img
				src={sourceImage ? sourceImage : peter}
				alt='some visual mugshot'
			/>
		</div>
	);
};

export default HoverImage;
