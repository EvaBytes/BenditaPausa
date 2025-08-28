import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: .7rem .8rem;
  border-radius: 10%;
  background-color: #186471;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 1000;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: ${(props) => (props.visible ? "translateY(0)" : "translateY(20px)")};

  &:hover {
    background-color: #0f4c5c;
  }
`;
