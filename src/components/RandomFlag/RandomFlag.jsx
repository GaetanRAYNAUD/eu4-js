import React from 'react';
import { Tags } from 'utils/constants';
import styled from 'styled-components';

const RandomFlagStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default function RandomFlag() {
  return (
    <RandomFlagStyled alt = { 'Flag' } src = { `/images/flags/${ Tags[ Math.floor(Math.random() * Tags.length) ] }.png` } />
  )
};
