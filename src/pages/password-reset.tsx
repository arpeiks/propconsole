import Input from "components/input";
import Modal from "components/modal";
import styled from "styled-components";
import Layout from "features/auth/layout";
import BaseButton from "components/button";
import { Primary, Secondary } from "features/auth/auth.components";
import { ReactComponent as BaseIcon } from "assets/images/verified.svg";
import React from "react";

const Icon = styled(BaseIcon)`
  margin-top: 4em;
  margin-bottom: 1em;
`;

const Button = styled(BaseButton)`
  margin: 1.5em auto;
`;

const ModalContent = ({ closeModal }: any) => {
  return (
    <>
      <Icon />
      <Primary>Thank You!</Primary>
      <Secondary>Your password has been reset</Secondary>
      <Button onClick={closeModal}>Sign In</Button>
    </>
  );
};

const ResetPassword = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Modal show={modal} closeModal={() => setModal(false)}>
        <ModalContent closeModal={() => setModal(false)} />
      </Modal>
      <Layout>
        <Input type="password" label="New Password" />
        <Input type="password" label="Confirm Password" />
        <Button onClick={() => setModal(true)}>Update</Button>
      </Layout>
    </>
  );
};

export default ResetPassword;
