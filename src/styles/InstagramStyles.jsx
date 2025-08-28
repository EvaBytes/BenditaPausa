import styled from "styled-components";

export const InstagramBlock = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  background: #fff; 
  display: flex;
  justify-content: center;
`;

export const InstagramContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const InstagramTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: 2rem;
  font-weight: 600;
  color: #000000; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;

  svg {
    color: #186471; 
    font-size: 2.2rem;
  }
`;

export const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
  padding: 0.9rem 1.8rem;
  background-color: #1c6673; 
  color: #ffffff;
  font-size: 1.1rem;
  font-family: 'JetBrains Mono', monospace;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #17515b;
    color: #ffffff;
    transform: scale(1.05);
  }

  svg {
    font-size: 1.4rem;
  }
`;
