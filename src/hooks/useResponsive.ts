import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

type Breakpoint = "mobile" | "tablet" | "desktop";

const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  const breakpoint: Breakpoint = useMemo(() => {
    if (width < 768) {
      return "mobile";
    }

    if (width < 1024) {
      return "tablet";
    }

    return "desktop";
  }, [width]);

  return {
    width,
    height,
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
  };
};

export default useResponsive;

