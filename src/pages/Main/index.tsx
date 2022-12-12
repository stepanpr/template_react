import React from 'react';
import classnames from 'classnames';
import './index.css';

import { General } from './General/General';
import { About } from './About/About';
import { Gallery } from './Gallery/Gallery';
import { Rewiews } from './Reviews/Reviews';
import { Contact } from './Contact/Contact';

interface ContentProps {
    mediaQueries?: any;
    // menuActive?: boolean;
}

enum ESections {
    GENERAL = 'GENERAL',
    ABOUT = 'ABOUT',
    GALLERY = 'GALLERY',
    REWIEWS = 'REWIEWS',
    CONTACT = 'CONTACT',
}

// const SECTIONS_MAP = [
// 	[ESections.GENERAL, ()]
// ]

const Content: React.FunctionComponent<ContentProps> = (props) => {
    const contentClassNames = classnames({
        content: true,
        // 'content-no-scroll': props.menuActive,
    });
    // const containerClassNames = classnames({
    // 	'container-x': props.mediaQueries.isDesktopOrLaptop,
    // 	'container-m': props.mediaQueries.isTabletOrMobile,
    // 	'container-s': props.mediaQueries.isMobile,
    // });

    return (
        <div className={contentClassNames}>
            <General mediaQueries={props.mediaQueries}></General>
            <About mediaQueries={props.mediaQueries}></About>
            <Gallery mediaQueries={props.mediaQueries}></Gallery>
            <Rewiews mediaQueries={props.mediaQueries}></Rewiews>
            <Contact mediaQueries={props.mediaQueries}></Contact>
        </div>
    );
};


export default Content