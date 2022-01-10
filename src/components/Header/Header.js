import React from 'react';
import styled from 'styled-components/macro';

import { BREAKPOINTS, COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeaderWrapper>
        <SuperHeader />
      </SuperHeaderWrapper>
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <MobileNavButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </MobileNavButton>
          <MobileNavButton>
            <Icon id="search" strokeWidth={2} />
          </MobileNavButton>
          <MobileNavButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </MobileNavButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const SuperHeaderWrapper = styled.div`
  @media (${BREAKPOINTS.laptop}) {
    display: none;
  }
`;

const MainHeader = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (${BREAKPOINTS.laptop}) {
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(24px, 3.5vw - 20px, 48px);
  margin: 0px 48px;

  @media (${BREAKPOINTS.laptop}) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media (${BREAKPOINTS.laptop}) {
    display: flex;
    gap: clamp(0px, 1vw, 16px);
    margin-right: -8px;
  }
`;

const MobileNavButton = styled(UnstyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
