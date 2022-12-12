import React from "react";
import classnames from 'classnames';
import { useForm } from "react-hook-form";

import './styles.css'


interface FooterProps {
	mediaQueries: any;
}


export const Footer: React.FunctionComponent<FooterProps> = (props) => {


	const footerClassNames = classnames({
		'footer': true,
	});
	const containerClassNames = classnames({
		'container-x': props.mediaQueries.isDesktopOrLaptop,
		'container-m': props.mediaQueries.isTabletOrMobile,
		'container-s': props.mediaQueries.isMobile,
	});
	
	const footerContainerClassNames = classnames({
		'footer-container': true
	});


	return (
			<div className={footerClassNames}>
				<div className={containerClassNames}>
					<div className={footerContainerClassNames}>
						<div className="footer-container__social-box">
							<p>social box</p> 
						</div>
						<div className="footer-container__box2">
							<p>box2</p> 
						</div>
					</div>
					
					<div className="copyright">
					<p>react.ru</p>
					<p>&copy; React Site</p>
					</div>
				</div>
			</div>
	);
}