import React from 'react';
import styled from 'styled-components';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <CommonContainer>{children}</CommonContainer>;
};

export default Container;

const CommonContainer = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 60px;
`;
