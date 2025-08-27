import styled from "styled-components";

export const NewsletterSectionWrapper = styled.section`
  background: url('src/assets/woolnewsletter.png') no-repeat center center;
  background-size: cover;
  padding: 2.5rem 1rem 2rem 1rem;
  border-radius: 0;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 100vw;

  @media (min-width: 900px) {
    padding: 3rem 4vw 3rem 4vw;
  }
`;

export const NewsletterTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  font-weight: 700;
  margin-bottom: 1.3rem;
  margin-top: 0;
  color: #111;

  @media (min-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const NewsletterDesc = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 2.3rem;
  margin-top: 0;
  line-height: 1.4;

  @media (min-width: 600px) {
    font-size: 1.25rem;
    width: 100%;
    max-width: 700px;
  }
`;

export const NewsletterFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    max-width: 500px;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: 'JetBrains Mono', monospace;
  border-radius: 10px;
  border: 1px solid #ccc;
  flex: 1;
  background: #fff;
  min-width: 0;

  @media (min-width: 600px) {
    max-width: 320px;
    font-size: 1.05rem;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.2rem;
  font-size: 1rem;
  font-family: 'JetBrains Mono', monospace;
  border-radius: 10px;
  border: none;
  background-color: #1c6673;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 110px;

  &:hover {
    background-color: #17515b;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 0.88rem;
  color: #222;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  margin-top: 0.5rem;
  line-height: 1.35;
  max-width: 600px;

  b {
    font-weight: 700;
  }
`;

export const CheckboxInput = styled.input`
  margin-top: 4px;
  accent-color: #333;
`;

export const PrivacyLink = styled.a`
  color: #0066cc;
  text-decoration: underline;
  margin-left: 4px;
  font-weight: 500;
`;
