import {
  Link,
  Primary,
  Secondary as BaseSecondary,
} from "features/auth/auth.components";
import React from "react";
import Input from "components/input";
import styled from "styled-components";
import Button from "components/button";
import Layout from "features/auth/layout";
import { ReactComponent as BaseEmailIcon } from "assets/images/email.svg";
import { ReactComponent as BaseLockIcon } from "assets/images/padlock.svg";

const LockIcon = styled(BaseLockIcon)`
  margin-top: -1em;
`;

const Secondary = styled(BaseSecondary)`
  margin: 0;
  color: #999999;
  font-weight: 300;
  margin-bottom: 2em;
`;

const InputWrapper = styled.div`
  margin-top: 1.5em;
  text-align: center;

  & input {
    margin-bottom: 0;
  }
`;

const EmailIcon = styled(BaseEmailIcon)`
  margin-top: -1em;
  margin-bottom: 12px;
`;

const ForgotPassword = () => {
  const [verify, setVerify] = React.useState(false);

  return (
    <Layout>
      {verify ? (
        <>
          <EmailIcon />
          <Primary>Verify Your Email</Primary>
          <Secondary>Please enter the 4 digit code sent to</Secondary>
          <Secondary variant="dark">john@propconsole.com</Secondary>

          <InputWrapper>
            <Input variant="code" label="Enter code here" />
          </InputWrapper>
          <Link to="/">Resend Code</Link>
          <Button>Confirm</Button>
        </>
      ) : (
        <>
          <LockIcon />
          <Primary>Forgot Password?</Primary>
          <Secondary>
            Enter the email address associated with your account
          </Secondary>

          <Input label="Email" placeholder="company@example.com" />
          <Link to="/login">Try another way</Link>
          <Button onClick={() => setVerify(true)}>Reset Password</Button>
        </>
      )}
    </Layout>
  );
};

export default ForgotPassword;
