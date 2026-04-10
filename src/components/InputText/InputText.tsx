import React from "react";
import "./InputText.scss";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	placeholder?: string;
	borderStyle?: "dark" | "light";
}

const InputText: React.FC<InputTextProps> = ({ title, placeholder = "test", borderStyle = "dark" }) => {
	return (
		<div className="input-text-container">
			{title && <span className="input-text-title">{title}</span>}
			<input className={`input-text ${borderStyle}`} placeholder={placeholder}></input>
		</div>
	);
};

export default InputText;
