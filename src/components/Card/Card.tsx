import React from "react";
import "./Card.scss";

interface CardProps {
	title: string;
	desc: string;
	imgSrc: string;
	imgPosX: number;
	imgPosY: number;
}

const Card: React.FC<CardProps> = ({ title, desc, imgSrc, imgPosX, imgPosY }) => {
	return (
		<div className="card">
			<div className="card-text-container">
				<span className="card-title">{title}</span>
				<span className="card-desc">{desc}</span>
			</div>
			<img className="card-img" alt="Card Image." src={`${imgSrc}`} style={{ left: `${imgPosX}px`, top: `${imgPosY}px` }}></img>
		</div>
	);
};

export default Card;
