import { useContext } from "react";

import { Link } from "react-router-dom";

// import Loader from "../../images/Loader.png";

import "./HomePage.scss";

import SimpleDrop from "../SimpleDrop";

import { MyContext } from "../../MyContext";

const HomePage = () => {
	const { generalData } = useContext(MyContext);

	return (
		<div className='home-page'>
			<SimpleDrop title='Menu' contentStyle='drop-content'>
				<ul>
					{generalData.routeMap.map(item => (
						<li key={item.title}>
							<Link to={item.path}>{item.title}</Link>
						</li>
					))}
				</ul>
			</SimpleDrop>
			{/* <img src={Loader} alt='code' /> */}
		</div>
	);
};

export default HomePage;
