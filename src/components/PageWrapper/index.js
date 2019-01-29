import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageWrapperStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const PageWrapper = ({ children }) => (
    <PageWrapperStyled>
      { children }
    </PageWrapperStyled>
);

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
