import React from "react";
import "./ParagraphKeypoint.scss";

interface ParagraphKeypointProps {
	title: string;
	desc: string;
	children: React.ReactNode;
}

const ParagraphKeypoint: React.FC<ParagraphKeypointProps> = ({ title, desc, children }) => {
	return (
		<div className={`paragraph-keypoint`}>
			<div className="keypoint-icon">{children}</div>
			<span className="keypoint-title">{title}</span>
			<span className="keypoint-desc">{desc}</span>
		</div>
	);
};

export default ParagraphKeypoint;
