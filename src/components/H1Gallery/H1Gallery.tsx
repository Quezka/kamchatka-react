import React, { useCallback, useEffect, useState } from "react";
import H1Card from "../H1Card/H1Card";
import type { H1CardType } from "../H1Card/H1Card";
import NavButton, { type ButtonSide } from "../NavButton/NavButton";
import "./H1Gallery.scss";

interface H1GalleryProps {
	cards: H1CardType[];
}

const H1Gallery: React.FC<H1GalleryProps> = ({ cards }) => {
	const [space, setSpace] = useState(0);
	const [currentId, setCurrentId] = useState(1);

	useEffect(() => {
		console.log(currentId);
	}, [currentId]);

	const handleButtonClick = useCallback((side: ButtonSide) => {
		switch (side) {
			case "left":
				setSpace((prevSpace) => prevSpace + 244);
				setCurrentId((prevId) => prevId - 1);
				break;
			case "right":
				setSpace((prevSpace) => prevSpace - 244);
				setCurrentId((prevId) => prevId + 1);
				break;
		}
	}, []);

	return (
		<div className="h1gallery-container">
			<div className="h1gallery" style={{ left: `${space}px` }}>
				{cards.map((card, index) => (
					<div
						id={`${index.toString()}h1cardGalleryId`}
						key={`${index.toString()}h1cardGalleryKey`}
						className={`h1gallery-card ${currentId === index + 1 ? "h1active-card" : ""}`}
					>
						<H1Card title={card.title} imgSrc={card.imgSrc} imgPosX={card.imgPosX} imgPosY={card.imgPosY}></H1Card>
					</div>
				))}
			</div>
			<NavButton cards={cards} onButtonClick={handleButtonClick}></NavButton>
		</div>
	);
};

export default H1Gallery;
