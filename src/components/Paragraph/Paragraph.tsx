import React from "react";
import "./Paragraph.scss";

interface ParagraphProps {
	colour?: "white" | "grey" | "black";
	opacity?: number;
	children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ colour = "white", opacity = 1, children }) => {
	return (
		<p className={`paragraph ${colour}`} style={{ opacity: opacity }}>
			{children}
		</p>
	);
};

export default Paragraph;
