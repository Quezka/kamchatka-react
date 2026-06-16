import React from "react";
import "./SocialCard.scss";

interface SocialCardProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	handle: string;
	imgSrc: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ name, handle, imgSrc }) => {
	return (
		<div className="social-card">
			<img className="socialcard-img" alt="Card Image." src={`${imgSrc}`}></img>
			<div className="socialcard-text-container">
				<span className="socialcard-name">{name}, </span>
				<a className="socialcard-handle" href={`https://instagram.com/${handle}`} target="_blank" rel="noopener noreferrer">
					{handle}
				</a>
			</div>
		</div>
	);
};

export default SocialCard;
