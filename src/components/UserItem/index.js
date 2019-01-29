import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const UserCardStyled = styled(Card)`
  display: flex;
  height: 100%;
  width: 100%;
`;

const UserDetailsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const UserDetails = styled(CardContent)`
`;

const UserCardAvatar = styled(CardMedia)`
  width: 50%;
`;

const UserControls = styled.div`
  display: 'flex',
  alignItems: 'flex-start',
`;

const UserItem = ({ name, id, location, avatar , onDelete }) => (
  <UserCardStyled>
    <UserDetailsWrapper>
      <UserDetails>
        <Typography component="h5" variant="h5">
          @{name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {location ? location : 'Somewhere'}
        </Typography>
      </UserDetails>
      <UserControls>
        <IconButton aria-label="Delete" onClick={() => { onDelete(id); }}>
          <DeleteIcon />
        </IconButton>
      </UserControls>
    </UserDetailsWrapper>
    <UserCardAvatar image={avatar}>
    </UserCardAvatar>
  </UserCardStyled>
);

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default UserItem;
