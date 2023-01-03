import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import './styles.css';
// import Logo from './Logo';
import { ROUTES } from '../../app/app';
// import logo from './logo.svg';
// import { ReactComponent as YourSvg } from './logo.svg';

export interface ILink {
    value: string;
    href: string;
}

interface HeaderProps {
    menuActive: boolean;
    setMenuActive: any;
    mediaQueries: any;
    //   menuItems: ILink[]
    scrolled: number;
    setScrolled: any;
    // setScrollZero: any;
    handleClickMenu: any;
}

export const Header: React.FunctionComponent<HeaderProps> = ({
    menuActive,
    setMenuActive,
    mediaQueries,
    scrolled,
    setScrolled,
    handleClickMenu,
}: HeaderProps) => {
    // useEffect(() => {
    // 	const handleClick = () => props.menuActive ? props.setMenuActive(!props.menuActive) : 0;
    // 	window.addEventListener("click", handleClick);
    // 	return () => window.removeEventListener("click", handleClick);
    // });

    //   const [menuActive, setMenuActive] = useState(false);

    // const handleClickMenu = () => {
    //     if (mediaQueries.isTabletOrMobile || mediaQueries.isMobile) {
    //         !menuActive
    //             ? (document.body.style.overflow = 'hidden')
    //             : (document.body.style.overflow = '');
    //         setMenuActive(!menuActive);
    //     }
    //     // setScrollZero(false); /* переклюяаем состояние использоавания скролла на false  */
    //     // console.log(props.scrolled, 'zzz')
    //     setScrolled(0);
    //     // console.log(props.scrolled, 'xxx')
    //     console.log(menuActive, 'zzz');
    // };

    /** Приведение меню в неактивное состояние клавишей ESC. */
    useEffect(() => {
        const handleEscPress = (event: any) => {
            if (event.keyCode === 27 && menuActive) handleClickMenu();
        };
        window.addEventListener('keydown', handleEscPress);
        return () => {
            window.removeEventListener('keydown', handleEscPress);
        };
    });

    /** Массив ссылок меню. */
    const menuItems: ILink[] = [
        { value: 'о нас', href: '#about' },
        { value: 'галерея', href: '#gallery' },
        { value: 'отзывы', href: '#reviews' },
        { value: 'контакты', href: '#contact' },
    ];

    const headerClassNames = classnames({
        'header-x': mediaQueries.isDesktopOrLaptop && !scrolled,
        'header-x-scrolled': mediaQueries.isDesktopOrLaptop && scrolled,
        'header-m': mediaQueries.isTabletOrMobile && !scrolled,
        'header-m-scrolled': mediaQueries.isTabletOrMobile && scrolled,
        'header-s': mediaQueries.isMobile && !scrolled,
        'header-s-scrolled': mediaQueries.isMobile && scrolled,
    });
    // const headerScrolledClassName = classnames({
    // 	'header-x-scroled': props.scrolled
    // })

    const logoClassNames = classnames({
        'logo-x': true,
        'logo-m': mediaQueries.isTabletOrMobile,
        'logo-s': mediaQueries.isMobile,
    });

    const menuClassNames = classnames({
        'menu-x': true,
        'menu-m': mediaQueries.isTabletOrMobile,
        'menu-active': menuActive,
    });
    const bbtnClassNames = classnames({
        bbtn: true,
        'bbtn-visible': mediaQueries.isTabletOrMobile,
        'bbtn-visible-scroll': mediaQueries.isTabletOrMobile && scrolled,

        'bbtn-rotated':
            menuActive &&
            (mediaQueries.isTabletOrMobile || mediaQueries.isMobile),
        // 'bbtn-s': props.mediaQueries.isMobile,
    });
    const bbtnSpanClassNames = classnames({
        bbtn__span: true,
        'bbtn__span-invisible': menuActive,
    });

    const underlineLinkClassName = classnames({
        underlineLink: mediaQueries.isDesktopOrLaptop,
    });

    console.log(menuActive, 'd343434343dd');

    // const containerClassNames = classnames({   !вариант с элементами хедера помещёнными в контейнер
    // 	'container-x': props.mediaQueries.isDesktopOrLaptop,
    // 	'container-m': props.mediaQueries.isTabletOrMobile,
    // 	'container-s': props.mediaQueries.isMobile,
    // });
    console.log('5454545', window.location.pathname);

    return (
        <div className={headerClassNames}>
            {/* <div className={containerClassNames}> - !вариант с элементами хедера помещёнными в контейнер */}
            {/* <div className="header-container"> -!вариант с элементами хедера помещёнными в контейнер */}

            <div className={logoClassNames}>
                {/* <Logo/> */}
                <span> Site Title</span>
            </div>

            {/* <div className={bbtnClassNames} onClick={handleClickMenu}>
                <span className={bbtnSpanClassNames} />
            </div> */}

            {/** Показываем то или иное меню в соответствии с текщем роутом. */}
            {window.location.pathname === ROUTES.MAIN && (
                <>
                    <div className={bbtnClassNames} onClick={handleClickMenu}>
                        <span className={bbtnSpanClassNames} />
                    </div>

                    <div
                        className={menuClassNames}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul>
                            {menuItems.map((menuItem: ILink, i: number) => (
                                <li
                                    key={i.toString()}
                                    onMouseOver={() => {
                                        console.log('move');
                                    }}
                                >
                                    <a
                                        href={menuItem.href}
                                        onClick={handleClickMenu}
                                    >
                                        {menuItem.value}
                                    </a>
                                    <span
                                        className={underlineLinkClassName}
                                    ></span>
                                    {/* <span className={underlineLinkClassName}></span> */}
                                    {/* <span className="material-icons">{menuItem.icon}</span> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}

            {/* </div> */}
            {/* </div> */}
        </div>
    );
};
