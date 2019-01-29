import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UsersView from 'components/UsersView';
import UserItem from 'components/UserItem';
import GridLayout from 'react-grid-layout';

class ElementsViewContainer extends React.Component {

  render() {
    const { users, handleDelete, isLoading } = this.props;

    return (
      <UsersView isLoading={isLoading} >
        <GridLayout className="layout" cols={12} rowHeight={140} width={600} verticalCompact={false}>
          {users.map((user) => (
            <div data-grid={user.grid} key={user.id}>
              <UserItem
                id={user.id}
                name={user.name}
                avatar={user.avatar}
                location={user.location}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </GridLayout>
      </UsersView>
    );
  }
}

ElementsViewContainer.propTypes = {
  users: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  users: state.users,
  isLoading: state.loading.isLoading,
});

const mapDispatchToProps = ({ users: { deleteUser }}) => ({
  handleDelete: (id) => ( deleteUser(id) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementsViewContainer);
