import React from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../shared/components/FormElements/Input';

import Button from '../shared/components/FormElements/Button';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../shared/components/FormElements/ImageUpload';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';
import './PlaceForm.css';



const Intern = () => {
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
      },
      team: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      },
      image: {
        value: null,
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
      formData.append('team', formState.inputs.team.value);
      formData.append('address', formState.inputs.address.value);
      formData.append('image', formState.inputs.image.value);
      await sendRequest('http://localhost:5000/api/intern', 'POST', formData);
      history.push('/success');
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
        <h4>(please be sure your email is correct)</h4>
        <Input
          id="address"
          element="input"
          label="Department"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter your department"
          onInput={inputHandler}
        />
        <Input
          id="team"
          element="input"
          type="text"
          label="University"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter your university"
          onInput={inputHandler}
        />
        
        <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Please enter your application letter."
        />
        <Button type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Intern;

