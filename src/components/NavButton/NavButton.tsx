import React, { useEffect, useState } from "react";
import "./NavButton.scss";
import Arrow from "../../assets/icons/arrow-small.svg?react";
import type { CardType } from "../Card/Card";

export type ButtonSide = "left" | "right";

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	cards: CardType[];
	onButtonClick: (side: ButtonSide) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ cards, onButtonClick }) => {
	const [disableDirection, setDisableDirection] = useState("");

	const [counter, setCounter] = useState(1);

	const checkCounter = () => {
		switch (counter) {
			case 1:
				setDisableDirection("left");
				break;
			case cards?.length:
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
		onButtonClick("left");
	};

	const handleClickRight = () => {
		setCounter(counter + 1);
		checkCounter();
		onButtonClick("right");
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
