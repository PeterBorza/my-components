import React, { useState } from "react";
import classNames from "classnames";
import styles from "./InputCard.module.scss";

const InputCard = ({
	onClick,
	isDark = false,
	placeholder,
	size = "medium",
}) => {
	const [input, setInput] = useState("");
	const [text, setText] = useState(placeholder);
	const toggleDark = classNames(
		styles["input-wrapper"],
		[styles[`input-wrapper__${size}`]],
		{
			[styles["dark-mode"]]: isDark,
		}
	);

	const handleClick = () => {
		onClick(input);
		setInput("");
	};

	return (
		<>
			<div className={toggleDark}>
				<input
					className={styles["input-style"]}
					type='text'
					value={input}
					placeholder={text}
					onChange={e => setInput(e.target.value)}
					onClick={() => setText("")}
				/>
				<button
					type='button'
					className={styles["button-style"]}
					onClick={handleClick}
				>
					<i className='far fa-arrow-alt-circle-right'></i>
				</button>
			</div>
		</>
	);
};

export default InputCard;
