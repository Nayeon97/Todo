import React from 'react';
import styled from 'styled-components';

const Template = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Template;

const Container = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 60px;
`;
