import React from 'react';
import { LoginButton, AppEventsLogger } from 'react-native-fbsdk';
import { permissions } from './../../config/fb_config';

const FbLogin = (props) => {
  return (
    <LoginButton
      publishPermissions={permissions.publishPermissions}
      onLoginFinished={
        (error, result) => {
          if (error) {
            alert(result.error);
            AppEventsLogger.logEvent(`FB login error: ${result.error}`);
          } else if (result.isCancelled) {
            AppEventsLogger.logEvent('FB login cancelled');
            alert("Login was cancelled. Please try again or contact customer support.");
          } else {
            global.loggedIn = true;
            AppEventsLogger.logEvent('FB user logged in');
            alert("Login was successful with permissions: " + result.grantedPermissions)
          }
        }
      }
      onLogoutFinished={() => {
        global.loggedIn = false;
        alert("User logged out")
      }
      }
    />
  );
};

export default FbLogin;