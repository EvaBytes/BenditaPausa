import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #f8f8f8;
  border-top: 1px solid #e5e5e5;
  padding: 1.4rem 1rem;
  margin-top: 3rem;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #186471;
  font-size: 0.9rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 150px;

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  a, p {
    display: block;
    color: #186471;
    text-decoration: none;
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  
  a {
    font-size: 1.2rem;
    color: #186471;
    
    &:hover {
      color: #0f4c5c;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #186471;
`;
