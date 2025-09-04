import React, { useState } from "react";
import {HeaderContainer, Nav, LogoImage, MobileLogo, DesktopLogo, NavLinks, NavLink, SearchInput, SearchContainer, BurgerButton, MobileMenu, MobileTopBar, SearchIcon, MobileSearchWrapper, IconsContainer} from "./HeaderStyles";
import logoWeb from "../assets/LogoWEB.png";
import { FaSearch, FaTimes, FaBars } from "react-icons/fa";
import { FiUser, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    handleNavClick(); 
  };

  return (
    <HeaderContainer>
      <Nav>
        <MobileTopBar>
          <MobileLogo href="/">
            <LogoImage src={logoWeb} alt="Bendita Pausa Logo" />
          </MobileLogo>

          <div style={{ display: "flex", gap: "1rem" }}>
            <SearchIcon
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
            >
              <FaSearch size={20} />
            </SearchIcon>
            <BurgerButton
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </BurgerButton>
          </div>
        </MobileTopBar>

        <DesktopLogo href="/">
          <LogoImage src={logoWeb} alt="Bendita Pausa Logo" />
        </DesktopLogo>

        {/* Buscador MÓVIL */}
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

        {/* Buscador WEB */}
        <SearchContainer>
          <SearchInput
            type="search"
            placeholder="¿Qué buscas para tu próximo proyecto?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchContainer>

        <NavLinks>
          <li>
            <NavLink href="/">Productos</NavLink>
          </li>
          <li>
            <NavLink href="/about">Conócenos</NavLink>
          </li>
          <li>
            <NavLink href="/products">Talleres</NavLink>
          </li>
          <li>
            <NavLink href="#contacto" onClick={scrollToContact}>Contacto</NavLink>
          </li>
          <li>
            <IconsContainer>
              <FiShoppingCart size={24} aria-label="Carrito" />
              <FiUser size={24} aria-label="Cuenta" />
            </IconsContainer>
          </li>
        </NavLinks>

        {menuOpen && (
          <MobileMenu>
            <li>
              <NavLink href="/" onClick={handleNavClick}>
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" onClick={handleNavClick}>
                Conócenos
              </NavLink>
            </li>
            <li>
              <NavLink href="/products" onClick={handleNavClick}>
                Talleres
              </NavLink>
            </li>
            <li>
              <NavLink href="#contacto" onClick={scrollToContact}>
                Contacto
              </NavLink>
            </li>
          </MobileMenu>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export { Header };