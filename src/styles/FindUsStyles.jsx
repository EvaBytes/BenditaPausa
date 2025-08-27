import styled from "styled-components";

export const FindUsWrapper = styled.section`
  background: url('src/assets/woolstore.png') no-repeat center center;
  background-size: cover;
  padding: 2.5rem 1rem 2rem 1rem;
  border-radius: 0;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 100vw;
  text-align: left;

  @media (min-width: 900px) {
    padding: 3rem 4vw 3rem 4vw;
  }
`;

export const FindUsTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const FindUsDesc = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 1rem;
  line-height: 1.4;
  max-width: 700px;

  @media (min-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    line-height: 1.8;
    text-align: left;
    max-width: 80%;
    margin: 0 0 2rem; 
    font-weight: 400;
    }
`;

export const FindUsButton = styled.button`
  padding: 0.75rem 1.2rem;
  font-size: 1rem;
  font-family: 'JetBrains Mono', monospace;
  border-radius: 10px;
  border: none;
  background-color: #1c6673;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 150px;
  margin-top: 1rem;

  &:hover {
    background-color: #17515b;
  }
`;

