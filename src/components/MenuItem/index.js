import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertPhoto from '@material-ui/icons/InsertPhoto';

const MenuItem = ({ text, username, onElementClick }) => (
  <ListItem button onClick={() => { onElementClick(username); }}>
    <ListItemIcon><InsertPhoto /></ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onElementClick: PropTypes.func.isRequired,
}

export default MenuItem;
