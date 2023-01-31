import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(NavLink)`
  color: black;
  padding-left: 15px;
  text-decoration: none;
  &.active {
    color: red;
    text-decoration: underline;
  }
`;