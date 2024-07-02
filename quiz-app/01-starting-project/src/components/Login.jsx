import { useRef, useState } from "react";

export default function Login() {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log(formState);
    console.log(emailRef.current.value, passwordRef.current.value);
  }

  

  const saveFormState = (identifier, value) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [identifier]: value
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} onChange={(event) => { saveFormState('email', event.target.value) }} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef} onChange={(event) => { saveFormState('password', event.target.value) }} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
