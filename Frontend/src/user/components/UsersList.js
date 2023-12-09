import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
// import Button from '../../shared/components/FormElements/Button';
import './UsersList.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
    {/* <Button to="/places/new">
            Show All Projects
          </Button> */}
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          info={user.info}
          placeCount={user.places.length}
        />
      ))}
    </ul>
    </React.Fragment>
  );
};

export default UsersList;
