import { Link } from '@reach/router';
import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing.gutter};
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const PageHeader = styled.h1`
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 100px;
  height: auto;
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.gutter};
`;
export const NavLink = styled(Link)`
  padding: ${({ theme }) => theme.spacing.gutter};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  &[aria-current='page'] {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  padding : 5px;
  margin-right : ${({ theme }) => theme.spacing.gutter};
  border-bottom: 2px dotted ${({ theme }) => theme.colors.primary};
  &:focus {
    outline: none;
  }
`;
