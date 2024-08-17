import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import logoDark from '../../../assets/images/og-logo.png';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import { CopyToClipboard } from 'react-copy-to-clipboard';

// import FirebaseLogin from './FirebaseLogin';
import JWTLogin from './JWTLogin';
//import Auth0Login from './Auth0Login';

const Signin1 = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <Card className="borderless">
            <Card.Body >
              <img src={logoDark} alt="" className="img-fluid mb-4 login-logo" />
              <JWTLogin />
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin1;
