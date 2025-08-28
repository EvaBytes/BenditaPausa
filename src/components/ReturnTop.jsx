import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ReturnTopStyles";

const ReturnTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); 
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={scrollToTop} visible={visible} aria-label="Volver arriba">
      <FaArrowUp />
    </Button>
  );
};

export {ReturnTop};
