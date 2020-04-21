import React from 'react';

import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

import './signin-signup.styles.scss';

const SignInSignUpPage = () => (
    <div className='signin-signup'>
      <Signin />
      <Signup />
    </div>
  );


export default SignInSignUpPage;