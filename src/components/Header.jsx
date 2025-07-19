import React from "react";
import { HeaderContainer, Nav, LogoImage, NavLinks, NavLink } from "./HeaderStyles";
import logoImg from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav className="container">
        <a href="/">
          <LogoImage src={logoImg} alt="Bendita Pausa Logo" />
        </a>
        <NavLinks>
          <li><NavLink href="/">Inicio</NavLink></li>
          <li><NavLink href="/about">Nosotros</NavLink></li>
          <li><NavLink href="/products">Productos</NavLink></li>
          <li><NavLink href="/contact">Contacto</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export { Header };
