import React, { useState } from "react";
import "./InputPeopleQty.scss";
import PlusIcon from "../../assets/icons/plus.svg?react";
import MinusIcon from "../../assets/icons/minus.svg?react";

const InputPeopleQty: React.FC = () => {
	const [value, setValue] = useState(1);

	return (
		<div className="input-peopleqty-container">
			<span className="input-peopleqty-title">Количество человек</span>
			<span className="input-peopleqty">{value}</span>
			<div className="input-peopleqty-icons">
				<button
					className="icon"
					onClick={() => {
						if (value != 1) {
							setValue(value - 1);
						}
					}}
				>
					<MinusIcon />
				</button>
				<button
					className="icon"
					onClick={() => {
						setValue(value + 1);
					}}
				>
					<PlusIcon />
				</button>
			</div>
		</div>
	);
};

export default InputPeopleQty;
