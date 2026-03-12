import React from "react";
import "./H2.scss";

interface H2Props {
	colour?: "white" | "black";
	day: number;
	children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ colour = "white", day, children }) => {
	return (
		<h2 className="h2">
			<span className="h2-day">День {day}. </span>
			<span className={`h2-text ${colour}`}>{children}</span>
		</h2>
	);
};

export default H2;
