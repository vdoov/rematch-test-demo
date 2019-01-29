import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

const PaperStyled = styled(Paper)`
  position: relative;
  width: 600px;
  min-height: 600px;
`;

const LinearProgressStyled = styled(LinearProgress)`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
`;

const UsersView = ({ children, isLoading }) => (
  <PaperStyled square={false} elevation={6}>
    { isLoading ? <LinearProgressStyled /> : null }
    { children }
  </PaperStyled>
);

UsersView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

export default UsersView;
