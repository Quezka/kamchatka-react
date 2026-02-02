import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonStyle?: "primary" | "secondary";
	isDisabled?: boolean;
	text: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonStyle = "primary", isDisabled = false, text, onClick }) => {
	return (
		<button className={`Button ${buttonStyle} ${isDisabled}`} onClick={onClick} disabled={isDisabled}>
			<span>{text}</span>
		</button>
	);
};

export default Button;
