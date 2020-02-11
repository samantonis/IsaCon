import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.gutter};
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
