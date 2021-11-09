import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.scss';

const SignIn = () => {
  const [personalInfos, setPersonalInfos] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    setPersonalInfos({ email: '', password: '' })
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setPersonalInfos({ [name]: value })
  };

  return(
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email" 
          value={personalInfos.email}
          handleChange={handleChange}
          label="email" 
          required 
        />
        <FormInput
          name="password" 
          type="password" 
          value={personalInfos.password}
          handleChange={handleChange}
          label="password" 
          required 
        />
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;