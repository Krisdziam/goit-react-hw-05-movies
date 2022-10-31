import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export default function Navigation ()  {
  return (
    <header>
      <nav>
        <Links to="/" end>Home</Links>
        <Links to="/movies">Movies</Links>
      </nav>
    </header>
  );
};

 



 export const Links = styled(NavLink)`
  display: inline-block;
  margin-left: 10px;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  color: black;

  &.active {
    color: #ff6b01;
  }
`;