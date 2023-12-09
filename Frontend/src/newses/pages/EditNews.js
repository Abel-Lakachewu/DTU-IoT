import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH
  } from '../../shared/util/validators'; 
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from "../../shared/hooks/http-hook";
import './EditNews.css'
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
// import { AuthContext } from "../../shared/context/auth-context";


const Newses = {
  id: "n1",
  title: "Cloud seminar",
  image: "../../../public/images/Computer Engineering 1 .jpg",
  description:
    "Cloud computing is one of the emerging technologies that could take over the industry in the coming years.",
};



const EditNews = () => {
   
  // const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedNews, setLoadedNews] = useState();
   const newsId = useParams().id;
   const history = useHistory();

      const [formState, inputHandler, setFormData] = useForm(
        {
          title: {
            value: '',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          }
        },
        false
      );

      useEffect(() => {
        const fetchNews = async () => {
          try {
            const responseData = await sendRequest(
              `http://localhost:5000/api/newses/${newsId}`
            );
            setLoadedNews(responseData.news);
            setFormData(
              {
                title: {
                  value: responseData.news.title,
                  isValid: true
                },
                description: {
                  value: responseData.news.description,
                  isValid: true
                }
              },
              true
            );
    
          } catch (err) {}
        };
        fetchNews();
      }, [sendRequest, newsId, setFormData]);

    
    
      const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
        try {
          await sendRequest(
            `http://localhost:5000/api/newses/${newsId}`,
            'PATCH',
            JSON.stringify({
              title: formState.inputs.title.value,
              description: formState.inputs.description.value
            }),
            {
              'Content-Type': 'application/json'
            }
          );
          history.push('/newses/' + newsId);
        } catch (err) {}
      };

      
      if (isLoading) {
        return (
          <div className="center">
            <LoadingSpinner />
          </div>
        );
      }


      if (!loadedNews && !error) {
        return (
          <div className="center">
            <Card>
              <h2>Could not find place!</h2>
            </Card>
          </div>
        );
      }


    return  (
      <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedNews && (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={loadedNews.title}
        initialValid={true}
          />
          
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={inputHandler}
            value={Newses.description}
            // valid={true}
            initialValue={loadedNews.description}
        initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE News
          </Button>
        </form>
      )}
        </React.Fragment>
      );
    };


export default EditNews;