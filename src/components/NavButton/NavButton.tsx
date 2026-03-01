import React, { useEffect, useState } from "react";
import "./NavButton.scss";
import Arrow from "../../assets/icons/arrow-small.svg?react";

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClickLeft?: () => void;
	onClickRight?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ onClickLeft, onClickRight }) => {
	const [disableDirection, setDisableDirection] = useState("");

	const [counter, setCounter] = useState(1);

	const checkCounter = () => {
		switch (counter) {
			case 1:
				setDisableDirection("left");
				break;
			case 5:
				setDisableDirection("right");
				break;
			default:
				setDisableDirection("");
				break;
		}
	};

	useEffect(() => {
		checkCounter();
	});

	const handleClickLeft = () => {
		setCounter(counter - 1);
		checkCounter();
	};

	const handleClickRight = () => {
		setCounter(counter + 1);
		checkCounter();
	};

	return (
		<div className="NavButtonContainer">
			<button className={`NavButton left ${disableDirection == "left" ? "disabled" : ""}`} onClick={handleClickLeft} title="Left">
				<Arrow />
			</button>
			<button className={`NavButton right ${disableDirection == "right" ? "disabled" : ""}`} onClick={handleClickRight} title="Right">
				<Arrow />
			</button>
		</div>
	);
};

export default NavButton;
