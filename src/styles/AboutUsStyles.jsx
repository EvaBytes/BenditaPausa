import styled from "styled-components";

export const AboutUsSection = styled.section`
  padding: 3rem 1rem 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  h3 {
  margin-bottom: 1rem;
  line-height: 1.8;
  text-align: left;
  max-width: 100%;
  margin: 0 0 2rem; 
  font-weight: 400;
  }
`;

export const BoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Box = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  p {
    margin: 0;
    padding: .8rem;
    background: rgba(255, 255, 255, 0.9);
    text-align: center;
    font-weight: 700;
    font-size: 1.1rem;
    position: relative;
    z-index: 2;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(200, 192, 203, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;
