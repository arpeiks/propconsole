import React from "react";
import styled from "styled-components";
import AuthBanner from "assets/images/auth-banner.png";
import { ReactComponent as BaseLogo } from "assets/images/auth-logo.svg";

interface LayoutProps {
  children: React.ReactNode;
}

export const Logo = styled(BaseLogo)`
  margin-bottom: 4em;
`;

const Root = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Child = styled.div`
  flex-grow: 1;
  margin: auto;
  height: 100vh;
  overflow: hidden;
  max-width: 568px;
  overflow-y: auto;

  @media (min-width: 468px) {
    padding: 4em 3em;
  }

  @media (min-width: 600px) {
    padding: 4em;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    -webkit-box-shadow: inset 0 0 6px transparent;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const ChildWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  max-width: 400px;
  margin: 2em auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 468px) {
    padding: 5em 3em;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 0px 4px 70px rgba(204, 204, 204, 0.45);
  }

  @media (min-width: 600px) {
    padding: 5em 4em;
    max-width: 100%;
  }
`;

const Banner = styled.div`
  width: 0;
  color: #fff;
  flex-grow: 0;
  padding: 36px;
  display: none;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${AuthBanner});

  & h1 {
    margin: 0;
    font-size: 32px;
    line-height: 36px;
    font-weight: normal;
  }

  & p {
    margin: 0;
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    line-height: 36px;
  }

  @media (min-width: 900px) {
    flex-grow: 1;
    display: flex;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Root>
      <Child>
        <ChildWrapper>
          <Logo />
          {children}
        </ChildWrapper>
      </Child>
      <Banner>
        <h1>To find the property you love</h1>
        <p>starts with a single search</p>
      </Banner>
    </Root>
  );
};

export default Layout;
