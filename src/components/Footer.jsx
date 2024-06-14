import { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import FooterContent from "../sections/FooterContent";

const MotionBox = motion(Box);
const Footer = () => {
  const controls = useAnimation();
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <footer ref={footerRef}>
      <MotionBox
        bg="#0d0d0d"
        color="#ffffff"
        py={10}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        h="auto"
      >
        <FooterContent />
      </MotionBox>
    </footer>
  );
};

export default Footer;
