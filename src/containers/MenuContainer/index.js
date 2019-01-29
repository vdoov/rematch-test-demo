import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from 'components/Menu';
import MenuItem from 'components/MenuItem';

class MenuContainer extends React.Component {

  render() {
    const { employees, handleAddElementAsync } = this.props;

    return (
      <Menu>
        {employees.map(({ name, username }) => (
          <MenuItem
            text={name}
            username={username}
            onElementClick={handleAddElementAsync}
            key={username}
          />
        ))}

      </Menu>
    );
  }
}

MenuContainer.propTypes = {
  handleAddElementAsync: PropTypes.func.isRequired,
  employees: PropTypes.array.isRequired,
}

const mapStateToProps = ({ flashtalking: { employees } }) => ({
  employees
});

const mapDispatchToProps = ({ users: { fetchUser }}) => ({
  handleAddElementAsync: (username) => fetchUser(username),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
