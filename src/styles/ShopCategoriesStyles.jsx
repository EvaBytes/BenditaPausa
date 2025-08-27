import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  padding: 6rem 0rem 6rem 2rem;
  overflow: hidden;
  background-color: #f9f9f9;

  h2 {
    text-align: left;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 0 2rem;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 900px) {
    padding: 0 6rem;
  }
`;

export const CategoryCard = styled.a`
  flex: 0 0 auto;
  text-decoration: none;
  scroll-snap-align: start;
  position: relative;
  overflow: visible;

  @media (min-width: 900px) {
    width: calc((100vw - 6rem * 2 - 2rem) / 3);
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 899px) {
    width: 50%;
    aspect-ratio: auto;
  }

  .card-inner {
    position: relative;
    border-radius: 1rem;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  img {
    width: 100%;
    height: 75%;
    object-fit: cover;

    @media (min-width: 900px) {
      height: 100%;
    }
  }

  /* Overlay semitransparente con blur y mensaje */
  .overlay-message {
    position: absolute;
    inset: 0; /* ocupa todo el contenedor */
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4); /* capa semitransparente */
    backdrop-filter: blur(6px); /* efecto nublado */
    color: #333;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
    z-index: 2;
  }

  h3 {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.75rem 0;
    background: rgba(255, 255, 255, 0.8);
    color: #333;
    text-align: center;
    font-size: 1rem;
    margin: 0;
    z-index: 3;
  }
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  color: #17515b;
  border: none;
  border-radius: 10%;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  z-index: 3;
  cursor: pointer;
  padding: 0.4rem;

  &.left {
    left: 0.5rem;
  }

  &.right {
    right: 0.5rem;
  }
`;
