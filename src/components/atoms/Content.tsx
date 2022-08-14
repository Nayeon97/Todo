import React from 'react';
import styled from 'styled-components';

const Content = ({ text }: { text: string }) => {
  return <ContentWrapper>{text}</ContentWrapper>;
};

export default Content;

const ContentWrapper = styled.div`
  height: 300px;
  width: 300px;
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #f8f9fa;
  margin-bottom: 10px;
`;
