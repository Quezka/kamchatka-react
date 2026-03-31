import React from "react";
import "./WhiteCard.scss";

interface WhiteCardProps {
	title: string;
	desc: string;
	imgSrc: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ title, desc, imgSrc }) => {
	return (
		<div className="whitecard">
			<div className="whitecard-img">
				<img alt="Фото Карточки" className="img" src={imgSrc}></img>
			</div>
			<div className="whitecard-content">
				<span className="title">{title}</span>
				<span className="desc">{desc}</span>
			</div>
		</div>
	);
};

export default WhiteCard;
