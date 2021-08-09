import React from "react";
import Input from "components/input";
import styled from "styled-components";
import Button from "components/button";
import { Link } from "react-router-dom";
import Layout from "features/auth/layout";
import { Error, Secondary } from "features/auth/auth.components";
import { ReactComponent as EyeOffIcon } from "assets/images/eye-off.svg";

const ButtonWrapper = styled.div`
  width: 100%;
  margin: 2em auto 1.5em auto;
`;

const Login = () => {
  const [error, setError] = React.useState(false);

  return (
    <Layout>
      <Input label="Email" placeholder="company@example.com" />
      {error && <Error closeError={() => setError(false)} />}
      <Input
        type="password"
        label="Password"
        icon={<EyeOffIcon />}
        placeholder="password"
      />
      <ButtonWrapper>
        <Button onClick={() => setError(true)}>Sign In</Button>
      </ButtonWrapper>
      <Secondary>
        Forgot password?{" "}
        <Link to="/forgot-password">Kindly reset password.</Link>
      </Secondary>
    </Layout>
  );
};

export default Login;
