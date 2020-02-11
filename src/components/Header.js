import { Link } from '@reach/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../Isacon_logo.png';
import Burger from '../atoms/Burger';

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
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: center;
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

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="IsaCon" />
      </Link>
      <Burger open={showMenu} onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="admin">Admin</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="skills">Skills</NavLink>
        </Nav>
      )}
    </StyledHeader>
  );
};
