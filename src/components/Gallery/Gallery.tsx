import React, { useCallback, useState } from "react";
import Card from "../Card/Card";
import type { CardType } from "../Card/Card";
import NavButton, { type ButtonSide } from "../NavButton/NavButton";
import "./Gallery.scss";

interface GalleryProps {
	cards: CardType[];
}

const Gallery: React.FC<GalleryProps> = ({ cards }) => {
	const [space, setSpace] = useState(0);
	const [currentId, setCurrentId] = useState(cards?.length);

	const handleButtonClick = useCallback((side: ButtonSide) => {
		switch (side) {
			case "left":
				setSpace((prevSpace) => prevSpace - 314);
				setCurrentId((prevId) => prevId + 1);
				break;
			case "right":
				setSpace((prevSpace) => prevSpace + 314);
				setCurrentId((prevId) => prevId - 1);
				break;
		}
	}, []);

	return (
		<div className="gallery-container">
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
			<NavButton cards={cards} onButtonClick={handleButtonClick} className="gallery-buttons"></NavButton>
		</div>
	);
};

export default Gallery;
