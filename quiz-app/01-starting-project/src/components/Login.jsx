import { useState } from "react";

export default function Login() {
  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log(formState);
  }

  const [formState, setFormState] = useState({ email: '', password: '' });

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
          <input id="email" type="email" name="email" onChange={(event) => { saveFormState('email', event.target.value) }} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => { saveFormState('password', event.target.value) }} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
