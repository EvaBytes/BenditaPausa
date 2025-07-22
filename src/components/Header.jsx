import React, { useState } from "react";
import {HeaderContainer, Nav, LogoImage, MobileLogo, DesktopLogo, NavLinks, NavLink, SearchInput, SearchContainer, BurgerButton, MobileMenu,MobileTopBar, SearchIcon, MobileSearchWrapper} from "./HeaderStyles";
import logoImg from "../assets/logo.png";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";


const Header = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>

        <MobileTopBar>
          <MobileLogo href="/">
            <LogoImage src={logoImg} alt="Bendita Pausa Logo" />
          </MobileLogo>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <SearchIcon onClick={() => setSearchOpen(!searchOpen)} aria-label="Buscar">
              <FaSearch size={20} />
            </SearchIcon>
            <BurgerButton onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </BurgerButton>
          </div>
        </MobileTopBar>

        <DesktopLogo href="/">
          <LogoImage src={logoImg} alt="Bendita Pausa Logo" />
        </DesktopLogo>

        {searchOpen && (
          <MobileSearchWrapper>
            <SearchInput
              type="search"
              placeholder="¿Qué buscas para tu próximo proyecto?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </MobileSearchWrapper>
        )}

        <SearchContainer>
          <SearchInput
            type="search"
            placeholder="¿Qué buscas para tu próximo proyecto?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchContainer>

        <NavLinks>
          <li><NavLink href="/">Inicio</NavLink></li>
          <li><NavLink href="/about">Nosotros</NavLink></li>
          <li><NavLink href="/products">Productos</NavLink></li>
          <li><NavLink href="/contact">Contacto</NavLink></li>
        </NavLinks>

        {menuOpen && (
          <MobileMenu>
            <li><NavLink href="/" onClick={handleNavClick}>Inicio</NavLink></li>
            <li><NavLink href="/about" onClick={handleNavClick}>Nosotros</NavLink></li>
            <li><NavLink href="/products" onClick={handleNavClick}>Productos</NavLink></li>
            <li><NavLink href="/contact" onClick={handleNavClick}>Contacto</NavLink></li>
          </MobileMenu>
        )}

      </Nav>
    </HeaderContainer>
  );
};

export { Header };