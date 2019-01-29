import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainScreenWrapper = styled.div`
  width: calc(50%);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Screen = ( { children }) => (
  <MainScreenWrapper>
    { children }
  </MainScreenWrapper>
);

Screen.propTypes = {
  children: PropTypes.node,
}

export default Screen;
