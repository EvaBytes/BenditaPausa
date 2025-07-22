import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #000;
  border-bottom: 1px solid #333;
  padding: 1rem 0;
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    gap: 0;
  }
`;

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
`;

export const SearchContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const MobileTopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const SearchIcon = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
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
  }
`;

export const MobileMenu = styled.ul`
  position: absolute;
  top: 70px;
  right: 1rem;
  background: #111;
  padding: 1rem;
  border-radius: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #a65a5a;
  }
`;
