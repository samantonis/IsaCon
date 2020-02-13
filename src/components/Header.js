import { Link } from '@reach/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/Isacon_logo.png';
import Burger from './Burger';
import { Logo, Nav, NavLink } from '../atoms/styled';

const Header = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={className}>
      <Link to="/">
        <Logo src={logo} alt="IsaCon" />
      </Link>
      <Burger open={showMenu} onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="admin">Admin</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="examples">Examples</NavLink>
        </Nav>
      )}
    </div>
  );
};

export default styled(Header)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
