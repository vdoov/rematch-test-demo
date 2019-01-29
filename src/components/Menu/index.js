import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const PaperStyled = styled(Paper)`
  width: 300px;
  height: 100%;
`;

const Menu = ({ children }) => (
  <Drawer
    variant="persistent"
    anchor="left"
    open={true}
  >
    <PaperStyled>
      <List>
        { children }
      </List>
    </PaperStyled>
  </Drawer>

);

Menu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Menu;
