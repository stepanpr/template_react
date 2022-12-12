import { useMediaQuery } from "react-responsive"

export const useMediaQueries = () => {
  const mediaQueries = {
    isDesktopOrLaptop: useMediaQuery({ minWidth: 1224 }),
    isTabletOrMobile: useMediaQuery({ maxWidth: 1224 }),
    isMobile: useMediaQuery({ maxWidth: 720 }),
    isBigScreen: useMediaQuery({ minWidth: 1824 }),
    isPortrait: useMediaQuery({ orientation: "portrait" }),
    isRetina: useMediaQuery({ minResolution: "2dppx" }),
  }

  return mediaQueries
}
