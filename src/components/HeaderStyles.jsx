import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #fff; 
  border-bottom: 1px solid #e5e5e5;
  padding: .7rem 0;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    gap: 0;
  }
`;

export const LogoImage = styled.img`
  height: 100px;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 70px; 
  }
`;

export const MobileLogo = styled.a`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopLogo = styled.a`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const SearchContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-leftt: 1rem;
    margin-right: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-family: 'JetBrains Mono', monospace;
  font-size: .8rem;
  background-color: #f9f9f9;
  color: #333;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #186471; 
  }
`;

export const MobileTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  color: #186471;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #0f4a4a;
  }
`;

export const SearchIcon = styled.button`
  background: none;
  border: none;
  color: #186471;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #0f4a4a;
  }
`;

export const MobileSearchWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    gap: 1.5rem;
    margin-left: 2rem;
  }
`;

export const MobileMenu = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  list-style: none;
  padding: 1rem 0;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }

  li {
    font-family: 'JetBrains Mono', monospace;
    padding: 1rem 1.4rem;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-align: left;
    cursor: pointer;
    color: #186471;
    transition: background-color 0.3s;

    &:hover,
    &:focus {
      background-color: #f5f5f5;
      outline: none;
    }
  }
`;

export const NavLink = styled.a`
  font-weight: 500;
  color: #186471;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #0f4a4a; 
    font-weight: 700;

  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #186471;
  margin-left: 1.2rem;

  svg {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #0f4a4a;
    }
  }
`;
