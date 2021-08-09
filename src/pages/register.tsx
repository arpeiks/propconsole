import Modal from "components/modal";
import Input from "components/input";
import styled from "styled-components";
import Layout from "features/auth/layout";
import BaseButton from "components/button";
import { Primary, Secondary } from "features/auth/auth.components";
import { ReactComponent as BaseIcon } from "assets/images/email.svg";
import React from "react";

const Button = styled(BaseButton)`
  margin-bottom: 1.5em;
`;

const Icon = styled(BaseIcon)`
  width: 6em;
  margin-top: 4em;
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  margin-top: 1.5em;
  text-align: center;
  margin-bottom: 1.5em;

  & input {
    margin-bottom: 0;
  }
`;

const ModalSuccess = ({ close }: any) => {
  return (
    <>
      <Icon />
      <Primary>Email Address Verified</Primary>
      <Button onClick={close}>SignIn</Button>
    </>
  );
};

const ModalVerify = ({ verify }: any) => {
  return (
    <>
      <Icon />
      <Primary>Verify Your Email address</Primary>
      <Secondary>An email with a verification code has been sent to</Secondary>
      <Secondary variant="dark">@john@propconsole.com</Secondary>

      <InputWrapper>
        <Input variant="code" label="Enter code here:" />
      </InputWrapper>

      <Secondary style={{ margin: "2em auto" }}>
        Can't find your code? Check your spam folder!
      </Secondary>

      <Button onClick={verify}>Next</Button>
    </>
  );
};

const Register = () => {
  const [modal, setModal] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleClose = () => {
    setModal(false);
    setSuccess(false);
  };

  return (
    <>
      <Modal show={modal} closeModal={() => setModal(false)}>
        {!success ? (
          <ModalVerify verify={() => setSuccess(true)} />
        ) : (
          <ModalSuccess close={handleClose} />
        )}
      </Modal>
      <Layout>
        <Input label="Agency Name" placeholder="Enter name" />
        <Input label="Email" placeholder="Enter email" />
        <Input label="Phone Number" placeholder="+234" />
        <Input label="Password" placeholder="password" />
        <Button onClick={() => setModal(true)}>Sign In</Button>
        <Secondary>
          Forgot password?{" "}
          <a href="https://google.com">Kindly reset password.</a>
        </Secondary>
      </Layout>
    </>
  );
};

export default Register;
