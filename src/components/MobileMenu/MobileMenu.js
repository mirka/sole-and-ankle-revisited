/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onDismiss={onDismiss}>
      <Content>
        <CloseButton aria-label="Dismiss menu" onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale" isPrimary>Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin-top: -16px;
  margin-right: -20px;
`;

const Overlay = styled(DialogOverlay)`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: hsla(220, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  width: 300px;
  height: 100%;
  background: var(--color-white);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.isPrimary ? 'var(--color-secondary)' : 'inherit'};
  font-size: ${18 / 16}rem;
  font-weight: 600;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default MobileMenu;
