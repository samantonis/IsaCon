import { Router } from '@reach/router';
import React from 'react';
import { HomePage, AdminPage, SkillsPage, ProjectsPage } from '../pages';

export const Routing = () => (
  <Router>
    <HomePage path="/" />
    <AdminPage path="admin" />
    <SkillsPage path="skills" />
    <ProjectsPage path="projects" />
  </Router>
);
