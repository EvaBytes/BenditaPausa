import styled from "styled-components";

export const Form = styled.form`
  font-family: 'JetBrains Mono', monospace;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: 'JetBrains Mono', monospace;
  border-radius: 6px;
  border: 1px solid #ccc;
  flex: 1;

  @media (min-width: 600px) {
    max-width: 300px;
  }
`;
export const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  color: #555;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const CheckboxInput = styled.input`
  margin-top: 4px;
`;

export const PrivacyLink = styled.a`
  color: #0066cc;
  text-decoration: underline;
  margin-left: 4px;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: 'JetBrains Mono', monospace;
  border-radius: 6px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #555;
  }
`;
