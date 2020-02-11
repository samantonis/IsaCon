import { Router } from '@reach/router';
import React from 'react';
import { AdminPage, SkillsPage, ProjectsPage } from '../pages';

export const Routing = () => (
  <Router>
    <AdminPage path="admin" />
    <SkillsPage path="skills" />
    <ProjectsPage path="projects" />
  </Router>
);
