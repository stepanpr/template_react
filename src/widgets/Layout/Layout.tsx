import React, { useState, useReducer, useEffect } from 'react';
// import { useMediaQuery } from "react-responsive"
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
// import { Content } from "../components/Content/Content"
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

	/** TODO: при overflow = 'hidden', контент съезжает. */
	const handleClickMenu = () => {
        if (mediaQueries.isTabletOrMobile || mediaQueries.isMobile) {
            !menuActive
                ? (document.body.style.overflow = 'hidden')
                : (document.body.style.overflow = '');
            setMenuActive(!menuActive);
        }
        // setScrollZero(false); /* переклюяаем состояние использоавания скролла на false  */
        // console.log(props.scrolled, 'zzz')
        setScrolled(0);
        // console.log(props.scrolled, 'xxx')
        console.log(menuActive, 'zzz');
    };

    return (
        <div
            className={'main'}
            onClick={() => (menuActive ? handleClickMenu() : 0)}
        >
            {/** Размытие фона при открытом меню. */}
            <div
                className={
                    menuActive && !mediaQueries.isDesktopOrLaptop ? 'blur' : ''
                }
            />
            <Header
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                mediaQueries={mediaQueries}
                scrolled={scrolled}
                setScrolled={setScrolled}
				handleClickMenu={handleClickMenu}
            />
            {/** Контент */}
            {children}
            {/* <Content mediaQueries={mediaQueries} menuActive={menuActive} /> */}
            <Footer mediaQueries={mediaQueries} />
        </div>
    );
};

export default Layout;
