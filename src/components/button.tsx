import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  color: #fff;
  height: 47px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  background: #538cd1;
  font-family: Poppins;
  border: 0 !important;
  outline: 0 !important;
  text-transform: uppercase;
  transition: all ease 0.2s;

  &:hover {
    background-color: #538cd1db;
  }
`;

export default Button;
