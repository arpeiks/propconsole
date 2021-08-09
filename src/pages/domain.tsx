import React from "react";
import Input from "components/input";
import styled from "styled-components";
import Layout from "features/auth/layout";
import BaseButton from "components/button";
import { ChevronRightIcon } from "assets/icons/caret-right";
import { Primary, Secondary } from "features/auth/auth.components";
import { ReactComponent as CaretRightIcon } from "assets/images/chevron-right.svg";

const Instruction = styled(Secondary)`
  margin-bottom: 1.5em;
  align-self: flex-start;
  text-align: left !important;

  & .bold {
    font-weight: 500;
  }
`;

const Skip = styled.button`
  border: 0;
  outline: 0;
  display: flex;
  color: #444444;
  margin-top: 1em;
  font-size: 18px;
  cursor: pointer;
  line-height: 27px;
  align-items: center;
  align-self: flex-end;
  background-color: transparent;

  & svg {
    margin-top: -2px;
    margin-left: 1em;
  }
`;

const InputRoot = styled.div`
  display: flex;
  margin: 2em auto;
  align-items: center;

  & input {
    margin: 0;
  }

  & p.dot {
    margin: 0 6px;
  }
`;

const ButtonRoot = styled(BaseButton)`
  display: flex;
  padding: 2.4em 2em;
  align-items: center;
  margin-bottom: 1.5em;
  text-transform: capitalize;
  justify-content: space-between;

  & h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    line-height: 27px;
  }

  & span.secondary {
    color: #f1f1f1;
    font-size: 12px;
    line-height: 18px;
    font-style: italic;
    font-weight: normal;
  }
`;

const SubdomainInput = () => {
  return (
    <InputRoot>
      <Secondary style={{ marginRight: "6px" }}>https://</Secondary>
      <Input style={{ width: "100px" }} />
      <Secondary className="dot">.</Secondary>
      <Input placeholder="propconsole.com" />
    </InputRoot>
  );
};

const Button = ({ onClick }: any) => {
  return (
    <ButtonRoot onClick={onClick}>
      <div>
        <h2 className="primary">Auto Generate</h2>
        <span className="secondary">eg: user1234.propconsole.com</span>
      </div>
      <CaretRightIcon />
    </ButtonRoot>
  );
};

const DomainInstruction = () => (
  <>
    <Secondary style={{ marginBottom: "2.5em" }}>
      Kindly follow this steps below:
    </Secondary>

    <Instruction>
      Access the domain administration console of your domain vendor.
    </Instruction>

    <Instruction>
      Login using the credentials provided to you by your domain vendor
    </Instruction>

    <Instruction>
      Edit the <span className="bold">"A Record"</span> field, and update it
      with the IP address.
    </Instruction>

    <Instruction>
      Edit the <span className="bold">"C NAME"</span> field, and update it witht
      the value john_propconsole.com
    </Instruction>

    <Instruction>Save the changes.</Instruction>
  </>
);

const DomainName = ({ next }: any) => (
  <>
    <Secondary style={{ marginBottom: "2.5em" }}>
      Customize your built-in domain or map an existing domain you own to
      propconsole
    </Secondary>
    <Button onClick={next} />
    <Button onClick={next} />
    <Button onClick={next} />
    <Skip onClick={next}>
      Skip <ChevronRightIcon />
    </Skip>
  </>
);

const SubDomain = ({ next }: any) => (
  <>
    <Secondary style={{ marginBottom: "2.5em" }}>
      Enter a sub domain for your propconsole instance.
    </Secondary>
    <SubdomainInput />
    <BaseButton onClick={next}>Next</BaseButton>
  </>
);

const Domain = () => {
  const [step, setStep] = React.useState(0);

  const next = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };
  return (
    <Layout>
      <Primary variant="dark">Setup Domain</Primary>
      {step === 0 && <DomainName next={next} />}
      {step === 1 && <SubDomain next={next} />}
      {step === 2 && <DomainInstruction />}
    </Layout>
  );
};

export default Domain;
