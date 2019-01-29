import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainScreenWrapper = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainScreen = ( { children }) => (
  <MainScreenWrapper>
    { children }
  </MainScreenWrapper>
);

MainScreen.propTypes = {
  children: PropTypes.node,
}

export default MainScreen;
