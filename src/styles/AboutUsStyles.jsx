import styled from "styled-components";

export const AboutUsSection = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const BoxesContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Box = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  width: 160px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  text-align: left;

  img {
    width: 100%;
    border-radius: 8px;
  }

  p {
    margin-top: 0.75rem;
    font-weight: 600;
  }
`;
