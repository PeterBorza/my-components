import { Grid } from "../../platforms";
import styles from "./ArrayState.module.scss";
import { InputCard } from "../../utils";

const ArrayState = () => {
	return (
		<div className={styles.state}>
			<Grid>
				<div className={styles["grid-card"]}>
					<InputCard
						onClick={term => console.log(term)}
						placeholder='statement'
					></InputCard>
				</div>
			</Grid>
		</div>
	);
};

export default ArrayState;
