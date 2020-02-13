import { Router } from '@reach/router';
import React from 'react';
import { HomePage, AdminPage, ProjectsPage, ExamplesPage } from '../pages';

export const Routing = () => (
  <Router>
    <HomePage path="/" />
    <AdminPage path="admin" />
    <ProjectsPage path="projects" />
    <ExamplesPage path="examples" />
  </Router>
);
