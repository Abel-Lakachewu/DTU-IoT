import React from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../shared/components/FormElements/Input';

import Button from '../shared/components/FormElements/Button';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_REQUIRE
} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';
import './PlaceForm.css';

function InternAccForm() {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      gpa: {
        value: '',
        isValid: false
      },
      email: {
        value: 'email',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const placeSubmitHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', formState.inputs.title.value);
      formData.append('gpa', formState.inputs.gpa.value);
      formData.append('email', formState.inputs.email.value);
      await sendRequest('http://localhost:5000/api/internacc', 'POST', formData);
      history.push('/internacc');
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Full Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your full name."
          onInput={inputHandler}
        />
        <Input
          id="gpa"
          element="input"
          type="text"
          label="GPA"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your GPA "
          onInput={inputHandler}
        />
        <Input
          id="email"
          element="input"
          type="text"
          label="Email"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your email"
          onInput={inputHandler}
        />
        
        <Button type="submit" disabled={!formState.isValid}>
          Add to accepted interns
        </Button>
      </form>
    </React.Fragment>
  );
};

export default InternAccForm;







  
    
  