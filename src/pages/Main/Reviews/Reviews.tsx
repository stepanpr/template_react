import React from "react";
import classnames from "classnames";

import './reviews.css';


interface ReviewsProps {
	mediaQueries: any;
}

export const Rewiews: React.FC<ReviewsProps> = (props) => {

	const containerClassNames = classnames({
		'container-x': props.mediaQueries.isDesktopOrLaptop,
		'container-m': props.mediaQueries.isTabletOrMobile,
		'container-s': props.mediaQueries.isMobile,
	});

	const reviewsContainerClassNames = classnames({
		'reviews-container-x': props.mediaQueries.isDesktopOrLaptop,
		'reviews-container-m': props.mediaQueries.isTabletOrMobile,
		'reviews-container-s': props.mediaQueries.isMobile,
	});

	return (

		<div className={containerClassNames}>
			<div className={reviewsContainerClassNames}>
				<h3 id='reviews'>отзывы</h3>
reviews


			</div>
		</div>
	);
}