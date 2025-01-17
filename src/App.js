import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import { FirebaseProvider } from './contexts/FirebaseContext';
import { JWTProvider } from "./contexts/JWTContext";
//import { Auth0Provider } from "./contexts/Auth0Context";

import renderRoutes, { routes } from './routes';
import { BASENAME } from './config/constant';

const App = () => {
  return (
    <React.Fragment>
      <Router basename={BASENAME}>
        <JWTProvider>{renderRoutes(routes)}</JWTProvider>
      </Router>
    </React.Fragment>
  );
};

export default App;
