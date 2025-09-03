import styled from 'styled-components';

export const PrivacyPolicyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem 1rem 1rem;
  font-family: 'JetBrains Mono', monospace;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const PolicyTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 3px solid #186471;
  padding-bottom: .5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const LastUpdated = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
  margin-bottom: 3rem;
  font-size: 0.9rem;
`;

export const PolicySection = styled.section`
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #ecf0f1;
  }
`;

export const PolicyContent = styled.div`
  font-size: 1rem;
  color: #555;

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    text-align: justify;

    strong {
      color: #2c3e50;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    ul {
      padding-left: 1rem;
    }
    
    p, li {
      text-align: left;
    }
  }
`;