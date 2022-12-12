import React, { useState, useReducer, useEffect } from 'react';
// import { useMediaQuery } from "react-responsive"

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
// import { Content } from "../components/Content/Content"

import { ILink } from '../../interfaces/ILink';
import classnames from 'classnames';

/* Viewport hook (можно использовать вместо 'react-responsive') */
// const useViewport = () => {
//     const [width, setWidth] = React.useState(window.innerWidth);

//     React.useEffect(() => {
//         const handleWindowResize = () => setWidth(window.innerWidth);
//         window.addEventListener('resize', handleWindowResize);
//         return () => window.removeEventListener('resize', handleWindowResize);
//     }, []);

//     return { width };
// };

interface ILayoutProps {
    children?: React.ReactNode;
    mediaQueries?: any;
}

const Layout = ({ children, mediaQueries }: ILayoutProps) => {
    /** Массив ссылок меню. */
    // const menuItems: ILink[] = [
    //     { value: 'о нас', href: '#about' },
    //     { value: 'галерея', href: '#gallery' },
    //     { value: 'отзывы', href: '#reviews' },
    //     { value: 'контакты', href: '#contact' },
    // ];
    const [menuActive, setMenuActive] = useState(false);

    /** Состояние прокрутки. */
    const [scrolled, setScrolled] = useState(0);
    /** Признак сипользования скролла (становится false при клике на пункт меню);
		нужно чтобы после перехода на раздел, меню скрывалось до первого скролла;
		чтобы меню оставалось видимым всегда, требуется убрать данный стейт.	
	*/
    const [scrollZero, setScrollZero] = useState(false);

    // const { width } = useViewport();
    // console.log(width);

    /** Приведение меню в неактивное состояние клавишей ESC. */
    // useEffect(() => {
    //     const handleEscPress = (event: any) => {
    //         if (event.keyCode === 27 && menuActive) handleClickMenu();
    //     };
    //     window.addEventListener('keydown', handleEscPress);
    //     return () => {
    //         window.removeEventListener('keydown', handleEscPress);
    //     };
    // });

    /** Отслеживание прокрутки страницы. */
    useEffect(() => {
        const scroll = (e: any) => {
            if (scrollZero === false) setScrollZero(true);
            if (window.scrollY === 0 && scrolled > 0 && scrollZero) {
                setScrolled(0);
            } else if (window.scrollY > 100 && scrolled === 0 && scrollZero) {
                setScrolled(window.scrollY);
            }
        };
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    });

    //   const mediaQueries = {
    //     isDesktopOrLaptop: useMediaQuery({ minWidth: 1224 }),
    //     isTabletOrMobile: useMediaQuery({ maxWidth: 1224 }),
    //     isMobile: useMediaQuery({ maxWidth: 720 }),
    //     isBigScreen: useMediaQuery({ minWidth: 1824 }),
    //     isPortrait: useMediaQuery({ orientation: "portrait" }),
    //     isRetina: useMediaQuery({ minResolution: "2dppx" }),
    //   }

    // console.log(mediaQueries.isDesktopOrLaptop, ' : ', mediaQueries.isTabletOrMobile);

    // const handleClickMenu = () => {
    //     if (mediaQueries.isTabletOrMobile || mediaQueries.isMobile) {
    //         !menuActive
    //             ? (document.body.style.overflow = 'hidden')
    //             : (document.body.style.overflow = '');
    //         setMenuActive(!menuActive);
    //     }
    //     // setScrollZero(false); /* переклюяаем состояние использоавания скролла на false  */
    //     // console.log(props.scrolled, 'zzz')
    //     // setScrolled(0);
    //     // console.log(props.scrolled, 'xxx')
    //     console.log(menuActive, 'zzz');
    // };

    return (
        <div
            className={'main'}
            // onClick={() => (menuActive ? handleClickMenu() : 0)}
        >
            {/** Размытие фона при открытом меню. */}
            <div
                className={
                    menuActive && !mediaQueries.isDesktopOrLaptop ? 'blur' : ''
                }
            />
            {/* <div className={'headerAndContent'}> */}
            <Header
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                mediaQueries={mediaQueries}
                // menuItems={menuItems}
                scrolled={scrolled}
                setScrolled={setScrolled}
                // handleClickMenu={handleClickMenu}
            />
            {/** Контент */}
            {children}
            {/* <Content mediaQueries={mediaQueries} menuActive={menuActive} /> */}
            <Footer mediaQueries={mediaQueries} />
        </div>
    );
};

export default Layout;
