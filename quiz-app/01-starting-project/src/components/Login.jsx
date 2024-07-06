import { useRef, useState } from 'react';
import { Input } from './Input';

export default function Login() {
  const [formState, setFormState] = useState({
    email: {
      value: '',
      hasError: false,
      isTouched: false,
    },
    password: { value: '', hasError: false, isTouched: false },
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    console.log(emailRef.current.value, passwordRef.current.value);

    // validate on submit
    setFormState((prevState) => {
      return {
        ...prevState,
        email: {
          ...prevState.email,
          isTouched: true,
          hasError: !formState.email.value.includes('@'),
        },
      };
    });

    setFormState((prevState) => {
      return {
        ...prevState,
        password: {
          ...prevState.password,
          isTouched: true,
          hasError: formState.password.value.length < 6,
        },
      };
    });
  };

  const onBlur = (identifier) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [identifier]: {
          ...prevState[identifier],
          isTouched: true,
        },
      };
    });
    // validate on submit
    setFormState((prevState) => {
      return {
        ...prevState,
        email: {
          ...prevState.email,
          hasError: !formState.email.value.includes('@'),
        },
      };
    });

    setFormState((prevState) => {
      return {
        ...prevState,
        password: {
          ...prevState.password,
          hasError: formState.password.value.length < 6,
        },
      };
    });
  };

  const saveFormState = (identifier, value) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [identifier]: {
          ...prevState[identifier],
          value: value,
          isTouched: false,
        },
      };
    });
  };

  // useInput custom hook
  // 3rd party form libraries

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <Input
            id='email'
            type='email'
            name='email'
            className='test'
            innerRef={emailRef}
            error={
              formState.email.isTouched && formState.email.hasError
                ? 'Please enter a valid email'
                : ''
            }
            onBlur={() => {
              onBlur('email');
            }}
            onChange={(event) => {
              saveFormState('email', event.target.value);
            }}
          ></Input>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <Input
            id='password'
            type='password'
            name='password'
            innerRef={passwordRef}
            error={
              formState.password.isTouched && formState.password.hasError
                ? 'Please enter a valid password'
                : ''
            }
            onBlur={() => {
              onBlur('password');
            }}
            onChange={(event) => {
              saveFormState('password', event.target.value);
            }}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
