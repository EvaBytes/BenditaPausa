import styled from "styled-components";
import homeBG from "../assets/HomeBG.jpg";

export const HeroSection = styled.section`
  background-image: url(${homeBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 2rem;     
  color: black;
  text-align: left;
  font-size: 1rem;

  @media (min-width: 768px) {
    background-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
    font-size: 1.8rem;
}


  button {
    margin-top: 1.5rem;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
  }

  @media (min-width: 768px) {
    font-size:2.5rem; 
    padding: 4rem 5rem;  
    
    button {
      margin-top: 2rem;
      padding: 0.75rem 1.5rem;
      font-size: 1.1rem;
    }
  }
`;
