import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";

const Link = styled(BaseLink)`
  display: block;
`;

const Home = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/domain">Domain</Link>
      <Link to="/register">Register</Link>
      <Link to="/reset-password">Reset Password</Link>
      <Link to="/forgot-password">Forgot Password</Link>
    </div>
  );
};

export default Home;
