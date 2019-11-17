import { colors } from 'assets/styles';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex: 1;
  min-height: 100vh;
  background-color: ${ colors.background };
  color: white;
`;

const DefaultLayout = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default DefaultLayout
