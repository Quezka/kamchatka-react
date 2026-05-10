import React, { useCallback, useEffect, useState } from "react";
import Card from "../Card/Card";
import type { CardType } from "../Card/Card";
import NavButton, { type ButtonSide } from "../NavButton/NavButton";
import "./FooterGallery.scss";

interface FooterGalleryProps {
	cards: CardType[];
	galleryLength?: number;
	position?: "left" | "right";
}

const FooterGallery: React.FC<FooterGalleryProps> = ({ cards, galleryLength = 832, position = "left" }) => {
	const [space, setSpace] = useState(0);
	const [currentId, setCurrentId] = useState(position === "left" ? cards?.length : 1);

	useEffect(() => {
		console.log(currentId);
	}, [currentId]);

	const handleButtonClick = useCallback((side: ButtonSide) => {
		switch (side) {
			case "left":
				if (position == "left") {
					setSpace((prevSpace) => prevSpace - 314);
					setCurrentId((prevId) => prevId + 1);
				} else {
					setSpace((prevSpace) => prevSpace + 314);
					setCurrentId((prevId) => prevId - 1);
				}
				break;
			case "right":
				if (position == "left") {
					setSpace((prevSpace) => prevSpace + 314);
					setCurrentId((prevId) => prevId - 1);
				} else {
					setSpace((prevSpace) => prevSpace - 314);
					setCurrentId((prevId) => prevId + 1);
				}
				break;
		}
	}, []);

	return (
		<div className={`gallery-container ${position === "right" ? "right" : ""}`} style={{ width: `${galleryLength}px` }}>
			<div className="gallery" style={{ left: `${space}px` }}>
				{cards.map((card, index) => (
					<div
						id={`${index.toString()}cardGalleryId`}
						key={`${index.toString()}cardGalleryKey`}
						className={`gallery-card ${currentId === index + 1 ? "active-card" : ""}`}
					>
						<Card title={card.title} desc={card.desc} imgSrc={card.imgSrc} imgPosX={card.imgPosX} imgPosY={card.imgPosY}></Card>
					</div>
				))}
			</div>
			<NavButton cards={cards} onButtonClick={handleButtonClick}></NavButton>
		</div>
	);
};

export default FooterGallery;
