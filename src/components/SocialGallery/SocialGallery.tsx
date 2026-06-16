import React, { useCallback, useEffect, useState } from "react";
import NavButton, { type ButtonSide } from "../NavButton/NavButton";
import "./SocialGallery.scss";
import SocialCard from "../SocialCard/SocialCard";

interface SocialGalleryProps {
	cards: any[];
}

const SocialGallery: React.FC<SocialGalleryProps> = ({ cards }) => {
	const [space, setSpace] = useState(0);
	const [currentId, setCurrentId] = useState(1);

	useEffect(() => {
		console.log(currentId);
	}, [currentId]);

	const handleButtonClick = useCallback((side: ButtonSide) => {
		switch (side) {
			case "left":
				console.log(`currentId: ${currentId}`);
				if (currentId + 3 < cards.length) {
					setSpace((prevSpace) => prevSpace + 448);
					setCurrentId((prevId) => prevId - 1);
				}
				break;
			case "right":
				console.log(`currentId: ${currentId}`);
				if (currentId + 3 < cards.length) {
					setSpace((prevSpace) => prevSpace - 448);
					setCurrentId((prevId) => prevId + 1);
				}
				break;
		}
	}, []);

	return (
		<div className="socialgallery-container">
			<div className="socialgallery" style={{ left: `${space}px` }}>
				{cards.map((card, index) => (
					<div id={`${index.toString()}socialcardGalleryId`} key={`${index.toString()}socialcardGalleryKey`} className="socialgallery-card">
						<SocialCard name={card.title} handle={card.handle} imgSrc={card.imgSrc}></SocialCard>
					</div>
				))}
			</div>
			<NavButton cards={cards} onButtonClick={handleButtonClick}></NavButton>
		</div>
	);
};

export default SocialGallery;
