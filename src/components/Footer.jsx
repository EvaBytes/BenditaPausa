import React from "react";
import { FooterContainer, FooterContent } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        &copy; {new Date().getFullYear()} Bendita Pausa. Todos los derechos reservados.
      </FooterContent>
    </FooterContainer>
  );
};

export {Footer};
