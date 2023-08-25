import styled, { css } from 'styled-components';
import { m, ml, mt, p, px, py } from '../Spacing/core';
import { fadeInAnimation, scaleUpAnimation, slideUpAnimation } from './utils/animations';

export const SUB_NAV_HEIGHT = '5.5rem';

export const verticalFlex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.backgroundPrimary};
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
    justify-content: start;
    align-items: start;
  }
`;

const linkBaseCss = css`
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.palette.contentWeak};
  text-decoration: none;
  ${px('sm')};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.navigationItemHover};
    text-decoration: none;
  }

  &.active,
  &.active span {
    color: ${({ theme }) => theme.palette.navigationItemActive} !important;
  }

  span {
    ${mt('sm')};
    display: flex;
    flex: 1;
    line-height: 1;
    text-align: center;
    align-items: center;
    white-space: normal;
    font-size: ${({ theme }) => theme.typography.sizes.text.mobile.xxs.fontSize};
  }

  @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
    ${px('none')};

    span {
      ${mt('none')};
      ${ml('md')};
      text-align: left;
      font-size: ${({ theme }) => theme.typography.sizes.text.desktop.sm.fontSize};
    }
  }
`;

export const StyledExternalLink = styled.a`
  ${linkBaseCss};
  ${verticalFlex};

  @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
    flex-direction: row;
  }
`;

export const StyledMenuDropDown = styled.button`
  ${linkBaseCss};
  ${verticalFlex};
  background: ${({ theme }) => theme.palette.backgroundPrimary};
  border: none;
  white-space: nowrap;
  cursor: pointer;
  ${py('none')};

  @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
    flex-direction: row;
  }
`;

export const StyledNavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: ${SUB_NAV_HEIGHT};
  box-shadow: ${({ theme }) => theme.boxShadowMediumUpward};
  background: ${({ theme }) => theme.palette.backgroundPrimary};
  z-index: ${({ theme }) => theme.zIndex.subNavigation};
  ${px('sm')};

  @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
    position: static;
    flex-direction: column;
    height: max-content;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: ${({ theme }) => theme.defaultBorderRadius};
    box-shadow: none;
    ${p(['lg', 'md'])};
    gap: 1rem;
  }

  a {
    ${linkBaseCss};
    ${verticalFlex};
    @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
      flex-direction: row;
    }
  }
`;

export const SheetsContainer = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.palette.backgroundPrimary};
  width: 100%;
  left: 0;
  right: 0;
  bottom: ${SUB_NAV_HEIGHT};
  ${px('xl')};
  animation: ${slideUpAnimation} 0.2s ease-out;
  z-index: -1;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  ${LinkContainer} {
    justify-content: start;
    align-items: start;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    ${py('lg')};
    ${m('none')};

    svg {
      display: none;
    }

    span {
      color: ${({ theme }) => theme.palette.content};
      font-size: ${({ theme }) => theme.typography.sizes.text.desktop.md.fontSize};
      font-weight: 500;
    }

    &:last-child {
      border: none;
    }
  }

  a {
    &,
    span {
      ${m('none')};
    }

    &,
    span:hover {
      color: ${({ theme }) => theme.palette.navigationItemHover};
    }
  }

  @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
    position: absolute;
    top: 0;
    right: calc(100% + 1.5rem);
    width: max-content;
    min-width: 17rem;
    height: max-content;
    left: unset;
    box-shadow: ${({ theme }) => theme.boxShadowHigh};
    animation: ${scaleUpAnimation} 0.2s ease-out;
    transform-origin: top right;
    z-index: 0;
    border-bottom: none;
  }
`;

export const StyledOverlay = styled.div`
  background-color: ${({ theme }) => theme.palette.backgroundOverlay};
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.subNavigation - 1};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${fadeInAnimation} 0.2s ease-out;

  @media (${({ theme }) => theme.mediaSubNavigationBreakpoint}) {
    display: none;
  }
`;
