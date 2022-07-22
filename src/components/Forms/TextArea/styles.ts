import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  margin: 1rem 0;

  min-width: 400px;
  max-width: 400px;
  height: 85px;
  max-height: 100px;

  border-radius: 5px;
`;
