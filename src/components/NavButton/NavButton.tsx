import React from "react";
import "./NavButton.scss";
import arrow from "../../assets/icons/arrow-small.svg";

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disableDirection?: "left" | "right";
	onClickLeft?: () => void;
	onClickRight?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ disableDirection = "left", onClickLeft, onClickRight }) => {
	return (
		<div className="NavButton-Container">
			<button className={`NavButton left ${disableDirection == "left" ? "disabled" : ""}`} onClick={onClickLeft}>
				<img src={arrow} alt="Small Arrow"></img>
			</button>
			<button className={`NavButton right ${disableDirection == "right" ? "disabled" : ""}`} onClick={onClickRight}>
				<img src={arrow} alt="Small Arrow"></img>
			</button>
		</div>
	);
};

export default NavButton;
