import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useScrollPosition } from 'lib/hooks/useScrollPosition';
const logo = require('static/hosco-logo.svg');

type HeaderProps = {
  sticky: boolean;
};

const NavElement = styled.a`
  text-transform: uppercase;
  color: #7f7f7f;
  padding: 0 10px;
  cursor: pointer;
`;

const Logo = styled.img`
  margin-right: 128px;
  color: white;
`;

const HeaderWrapper = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  transition: background-color 0.2s ease-in-out, padding-top 0.2s ease-in-out;
  background-color: ${props => (props.sticky ? 'white' : 'transparent')};
  padding: 0 15px;
  padding-top: ${props => (props.sticky ? '0' : '20px')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${NavElement} {
    :hover {
      color: ${props => (props.sticky ? 'black' : 'white')};
    }
  }
  ${Logo} {
    color: ${props => (props.sticky ? props.theme.colors.hoscoBlue : 'white')};
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const LoginBtn = styled.a``;

const SignupBtn = styled.a`
  background-color: ${props => props.theme.colors.hoscoBlue};
  border-radius: 50px;
  padding: 8px 20px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
`;

export default function Header() {
  const topDistance = useScrollPosition();

  return (
    <HeaderWrapper sticky={topDistance !== 0}>
      <Navigation>
        <Link href="/">
          <Logo src={logo} alt="" />
        </Link>
        <Link href="/employers">
          <NavElement>for employers</NavElement>
        </Link>
        <Link href="/schools">
          <NavElement>for schools</NavElement>
        </Link>
        <Link href="/jobs">
          <NavElement>jobs</NavElement>
        </Link>
        <Link href="/advice">
          <NavElement>advice</NavElement>
        </Link>
      </Navigation>
      <nav>
        <LoginBtn>
          Login <i className="ha ha-login ha-blue" />
        </LoginBtn>
        <SignupBtn>Sign up</SignupBtn>
      </nav>
    </HeaderWrapper>
  );
}
