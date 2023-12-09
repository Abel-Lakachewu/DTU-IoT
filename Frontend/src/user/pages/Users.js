import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';


import { Grid } from 'semantic-ui-react';
import Search from '../../shared/SearchApi/Search'

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/users'
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>

<Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={12} style={{'minHeight': '100vh'}}>
        
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}

      </Grid.Column>
      <Grid.Column width={4}>
      <h3>Search unfamiliar things</h3>
       <Search/>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    </React.Fragment>
  );
};

export default Users;
