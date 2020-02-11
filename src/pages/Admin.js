import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import { theme } from '../config/theme';

const AdminPage = () => (
  <div>
    <header>admin page, you should be logged in</header>
  </div>
);

export default withAuthenticator(AdminPage, { theme });
