import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonStyle?: "primary" | "secondary";
	colourPrimary?: "white" | "green";
	isDisabled?: boolean;
	text: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonStyle = "primary", colourPrimary = "green", isDisabled = false, text, onClick }) => {
	return (
		<button
			className={`Button ${buttonStyle} ${isDisabled ? "disabled" : ""} ${buttonStyle == "primary" ? colourPrimary : ""}`}
			onClick={onClick}
			disabled={isDisabled}
		>
			<span>{text}</span>
		</button>
	);
};

export default Button;
