import React, { useEffect, useState, useContext } from "react";

import NewsList from "../components/NewsList";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from '../../shared/hooks/http-hook';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from "../../shared/context/auth-context";

import 'semantic-ui-css/semantic.min.css';

import { Grid } from 'semantic-ui-react';
import TechNewsList from "../../shared/technews/TechNewsList";


const Newses = () => {
  const auth = useContext(AuthContext);

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedNewses, setLoadedNewses] = useState();

    useEffect(() => {
        const fetchNewses = async () => {
          try {
            const responseData = await sendRequest(
              'http://localhost:5000/api/newses'
            );
    
            setLoadedNewses(responseData.newses);
          } catch (err) {}
        };
        fetchNewses();
      }, [sendRequest]);

    
    return (
        <React.Fragment>
{(auth.userId === '63bd8ebff0670624483b3e2a') && <Button to="/newses/new">
            ADD A NEW NOTICE
          </Button>}
<Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={12} style={{'minHeight': '100vh'}}>


          <ErrorModal error={error} onClear={clearError} />
          {isLoading && (
            <div className="center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && loadedNewses && <NewsList items={loadedNewses} />}

          </Grid.Column>
      <Grid.Column width={4}>
      <h3>Top 5 Tech News of the day</h3>
        <TechNewsList />
      </Grid.Column>
    </Grid.Row>
  </Grid>

        </React.Fragment>
      );
}

export default Newses;