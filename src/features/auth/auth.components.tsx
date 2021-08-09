import styled from "styled-components";
import { CloseIcon } from "assets/icons/close";
import { Link as BaseLink } from "react-router-dom";

export const Primary = styled.h2<any>`
  font-size: 18px;
  font-weight: 600;
  margin: 0.4em auto;
  text-align: center;
  text-transform: capitalize;
  color: ${({ variant }) => (variant === "dark" ? "#333" : "#157fcc")};
`;

export const Secondary = styled.p<any>`
  margin: 0;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  font-weight: ${({ variant }) => (variant === "dark" ? "500" : "normal")};
  color: ${({ variant }) => (variant === "dark" ? "#333333" : "#666666")};

  & a {
    color: #84bc33;
    text-decoration: none;
  }
`;

export const Link = styled(BaseLink)`
  display: block;
  color: #157fcc;
  text-align: center;
  margin: 1.5em auto;
  text-decoration: none;
  border-bottom: 1px solid #157fcc;
`;

const ErrorRoot = styled.div`
  position: relative;
  transition: all ease 0.3s;
  margin: 1em auto 2em auto;
  padding: 1em 2.5em 1em 1em;
  border-left: 2px solid #c44536;
  background: rgba(255, 89, 94, 0.1);

  & p {
    margin: 0;
    color: #666666;
    text-align: center;

    & .bold {
      color: #333333;
    }
  }

  & svg {
    top: 12px;
    right: 12px;
    cursor: pointer;
    stroke: #333333;
    stroke-width: 36px;
    position: absolute;
  }
`;

export const Error = ({ closeError }: any) => (
  <ErrorRoot>
    <CloseIcon onClick={closeError} />
    <p>
      <span className="bold">Oh sorry!</span> Email address not found try again
    </p>
  </ErrorRoot>
);
