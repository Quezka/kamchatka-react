import React from "react";
import "./NavLink.scss";
import BigArrow from "../../assets/icons/arrow-big.svg?react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	colourScheme?: "black" | "white";
	text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ colourScheme = "white", text, href }) => {
	return (
		<div className="NavLinkContainer">
			<a className={`NavLink ${colourScheme}`} href={href}>
				{text}
			</a>
			<div className={`NavLinkIcon ${colourScheme}`}>
				<BigArrow />
			</div>
		</div>
	);
};

export default NavLink;
