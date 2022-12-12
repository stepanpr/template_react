import React from "react";
import classnames from "classnames";

import './general.css';


interface GeneralProps {
	mediaQueries: any;
}

export const General: React.FC<GeneralProps> = (props) => {

	const containerClassNames = classnames({
		'container-x': props.mediaQueries.isDesktopOrLaptop,
		'container-m': props.mediaQueries.isTabletOrMobile,
		'container-s': props.mediaQueries.isMobile,
	});

	const generalContainerClassNames = classnames({
		'general-container-x': props.mediaQueries.isDesktopOrLaptop,
		'general-container-m': props.mediaQueries.isTabletOrMobile,
		'general-container-s': props.mediaQueries.isMobile,
	});

	return (

		<div className={containerClassNames}>
			<div className={generalContainerClassNames}>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia, odio ac feugiat molestie, purus odio euismod ipsum, vitae suscipit turpis nulla sed mi. Integer condimentum augue quis libero euismod, eget aliquam nisl varius. Integer aliquam, felis in consectetur volutpat, metus tortor sagittis leo, ut hendrerit dui felis et justo. Etiam bibendum non sapien a porta. Vestibulum faucibus tempor nunc cursus cursus. Vivamus iaculis tortor quis quam pulvinar, ut finibus mauris tempor. Nullam non maximus est, id tempor leo.

		Mauris congue est non aliquet facilisis. Cras eu viverra nisi. Curabitur sit amet tincidunt ante, in iaculis sapien. Curabitur at dictum diam, in aliquet augue. Mauris a mauris ante. Phasellus vehicula mauris at dapibus tincidunt. Sed in nisl id nisi suscipit vehicula elementum at felis. Suspendisse porttitor velit sapien, ut sollicitudin libero elementum ut.

		Quisque feugiat, mauris et scelerisque volutpat, odio lorem tempus purus, quis porttitor libero eros a dui. Maecenas faucibus commodo leo nec ultrices. Aliquam sagittis nec eros ut dapibus. Pellentesque blandit, ante sit amet aliquet auctor, odio nisl rutrum lorem, ut placerat neque justo in ante. Suspendisse nisi eros, mattis ac sollicitudin quis, fringilla et lorem. Suspendisse massa arcu, sollicitudin ac lectus sagittis, maximus ultrices metus. Donec velit risus, eleifend a metus vitae, tristique rhoncus felis.

		Fusce efficitur libero malesuada purus tincidunt sollicitudin. Integer gravida malesuada tincidunt. Duis ac turpis dictum, venenatis tellus ac, consectetur eros. Phasellus ante leo, mattis sed est id, ornare porttitor urna. Quisque feugiat vulputate mi, in tempor mi placerat egestas. Quisque eget justo sollicitudin, bibendum tellus eget, pellentesque metus. Nunc non erat magna. Morbi auctor porttitor odio nec tincidunt. Ut vehicula nibh sit amet molestie bibendum. Praesent id velit libero. Nulla nec libero nec mauris facilisis euismod. Suspendisse nec euismod libero. Nullam risus mi, imperdiet id consequat vitae, viverra eu turpis. Nam eget elit rhoncus, convallis magna eleifend, efficitur erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

		In sollicitudin condimentum est, ut pellentesque lorem aliquam et. Nulla libero sem, molestie ac elementum eget, vulputate sed lacus. Sed aliquam euismod purus ac interdum. Nullam mattis ac eros eu commodo. Sed rutrum sodales maximus. Quisque tincidunt vehicula turpis ut sollicitudin. Donec ex dui, mollis eu finibus nec, rutrum nec nibh. Proin dictum sodales egestas. Cras vitae tincidunt nunc, a vehicula libero. Cras lacinia purus felis, id tincidunt velit tincidunt ac. Vivamus ultrices nisl nec purus elementum porta. Nullam vitae purus risus. Nam vitae felis semper sem elementum pharetra ut dignissim diam. Maecenas sollicitudin commodo lacus, sed scelerisque mauris efficitur sed. Ut sed est consectetur, feugiat eros sed, mollis nibh.</p> 


			</div>
		</div>
	);
}