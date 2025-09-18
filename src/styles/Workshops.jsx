import styled from "styled-components";

export const WorkshopsWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .workshop-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .workshop {
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 1.5rem;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  .workshop h3 {
    margin-top: 0;
  }
`;
