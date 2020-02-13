import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import { PageHeader } from '../atoms/styled'
import { theme } from '../config/theme';

const AdminPage = () => (
  <>
    <PageHeader>admin page, you should be logged in</PageHeader>
  </>
);

export default withAuthenticator(AdminPage, { theme });
