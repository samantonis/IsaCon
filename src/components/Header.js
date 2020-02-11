import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import logo from '../Isacon_logo.png';
import Burger from '../atoms/Burger'

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  display: block;
  width: 100px;
  height: auto;
  padding: 10px;
`;

const Nav = styled.nav`
  flex-basis: 100%;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.gutter};
`;
const NavLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing.gutter};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  &[aria-current='page'] {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Logo src={logo} alt="IsaCon" />
    </Link>
	  <Burger/>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="admin">Admin</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="skills">Skills</NavLink>
    </Nav>
  </StyledHeader>
);
