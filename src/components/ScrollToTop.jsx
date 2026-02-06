import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// We'll pass lenis instance via props or context
const ScrollToTop = ({ lenis }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      // Smooth scroll to top using Lenis
      lenis.scrollTo(0, { immediate: true });
    } else {
      // fallback if lenis not available
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
