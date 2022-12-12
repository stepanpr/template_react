import React from 'react';
import classnames from 'classnames';

import './gallery.css';

interface GalleryProps {
    mediaQueries: any;
}

export const Gallery: React.FC<GalleryProps> = (props) => {
    const containerClassNames = classnames({
        'container-x': props.mediaQueries.isDesktopOrLaptop,
        'container-m': props.mediaQueries.isTabletOrMobile,
        'container-s': props.mediaQueries.isMobile,
    });

    const galleryContainerClassNames = classnames({
        'gallery-container-x': props.mediaQueries.isDesktopOrLaptop,
        'gallery-container-m': props.mediaQueries.isTabletOrMobile,
        'gallery-container-s': props.mediaQueries.isMobile,
    });

    return (
        <div className={containerClassNames}>
            <div id="gallery" className={galleryContainerClassNames}>
                <h3>галерея</h3>
                gallery
            </div>
        </div>
    );
};
