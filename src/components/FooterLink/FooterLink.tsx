import React from "react";
import "./FooterLink.scss";

interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	text: string;
	link: string;
	children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, link, children }) => {
	return (
		<div className="footerLink">
			<div className="link-icon">{children}</div>
			<a className="link-a" href={link}>
				{text}
			</a>
		</div>
	);
};

export default FooterLink;
