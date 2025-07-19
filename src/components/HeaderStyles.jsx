import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #000;
  border-bottom: 1px solid #333;
  padding: 1rem 0;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  height: 2rem; 
  width: auto; 
  cursor: pointer;
`;

export const LogoImage = styled.img`
    width: 20%;
    height: auto;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #a65a5a;
  }
`;
