import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { authentication } from 'api';
import CONFIG from 'config/env';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import CookieStorage from 'utils/CookieStorage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [mounted, setMounted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const { MARKETPLACE_URL, ClientId, UserPoolId } =
    CONFIG[process.env.REACT_APP_NODE_ENVIROMENT || 'local'];

  const loadData = async () => {
    const token = CookieStorage.get('access_token');
    const userId = CookieStorage.get('user_id');

    if (token && token !== '' && userId) {
      localStorage.setItem(`CognitoIdentityServiceProvider.${ClientId}.LastAuthUser`, userId);
    }

    const userPool = new AmazonCognitoIdentity.CognitoUserPool({
      UserPoolId,
      ClientId,
    });

    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser !== null) {
      const resp = await authentication();
      if (resp && resp.data) {
        const respData = resp.data;
        if (respData) {
          setAuthenticated(true);
        }
      }
    } else {
      const pathname = window.location.pathname.substr(1);
      if (process.env.REACT_APP_NODE_ENVIROMENT !== 'local') {
        window.location.href = `${MARKETPLACE_URL}/login?path=${pathname}&auth=true`;
      }
      setAuthenticated(false);
    }
    setMounted(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        !mounted ? <></> : authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;