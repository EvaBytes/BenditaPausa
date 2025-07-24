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
    z-index: 2;
  }
`;


export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
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


