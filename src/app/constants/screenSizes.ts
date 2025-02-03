import { useMediaQuery } from "react-responsive";

const screenSizes: IScreenSizes = {
  isSmall: useMediaQuery({ maxWidth: 440 }),
  isMobile: useMediaQuery({ maxWidth: 768 }),
  isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1024 }),
};

export default screenSizes;
