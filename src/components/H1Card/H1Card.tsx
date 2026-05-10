import React from "react";
import "./H1Card.scss";

export type H1CardType = { title: string; imgSrc: string; imgPosX: number; imgPosY: number };

interface H1CardProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	imgSrc: string;
	imgPosX: number;
	imgPosY: number;
}

const H1Card: React.FC<H1CardProps> = ({ title, imgSrc, imgPosX, imgPosY }) => {
	return (
		<div className="h1card">
			<div className="h1card-text-container">
				<span className="h1card-title">{title}</span>
			</div>
			<img className="h1card-img" alt="Card Image." src={`${imgSrc}`} style={{ left: `${imgPosX}px`, top: `${imgPosY}px` }}></img>
		</div>
	);
};

export default H1Card;
