import styled, { css } from 'styled-components';
import { m, ml, mr, mt, p, pt } from '@upgrade/react-components/Spacing/core';
import { Button } from '@upgrade/react-components';

const linkBaseStyle = css`
  color: ${({ theme }) => theme.palette.navigationItem};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.palette.semanticPositiveHover};
  }

  &.active {
    color: ${({ theme }) => theme.palette.semanticPositiveHover};
  }
`;

const CaretCssStyle = css`
  content: '';
  border-width: 0.8rem;
  border-color: transparent transparent ${({ theme }) => theme.palette.backgroundPrimary} transparent;
  border-style: solid;
  position: absolute;
  top: -1.5rem;
  left: calc(50% - 0.8rem);
  filter: drop-shadow(0 -10px 10px ${({ theme }) => theme.palette.shadowMedium});
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background-color: ${({ theme }) => theme.palette.backgroundPrimary};
  height: max-content;
  min-height: 7.5rem;
  display: grid;
  place-items: center;
  box-shadow: ${({ theme, addHeaderShadow }) => (addHeaderShadow ? theme.boxShadowLow : 'none')};
  transition: box-shadow 0.3s ease-out;
  ${pt({ xs: 'xl', md: 'none' })}

  & > div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  & .header__logo svg {
    width: 120px;
    @media (min-width: ${props => props.theme.mediaMd}) {
      width: 171px;
    }
  }
`;

export const MenuWrapper = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s ease-out;
  position: fixed;
  background-color: ${({ theme }) => theme.palette.backgroundPrimary};
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  ${p('lg')};
  overflow-y: scroll;

  & > * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: ${props => props.theme.mediaMd}) {
    visibility: visible;
    opacity: 1;
    position: static;
    height: auto;
    ${p('none')};
    overflow-y: initial;
  }

  nav {
    flex-grow: 1;

    & > ul {
      ${p('none')};
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (min-width: ${props => props.theme.mediaMd}) {
        ${m('none')};
        flex-direction: row;
      }

      & > li {
        list-style: none;
        ${p(['xl', 'none'])};
        position: relative;
        border-bottom: 1px solid ${({ theme }) => theme.palette.border};

        @media (min-width: ${props => props.theme.mediaMd}) {
          ${mr({ xs: 'sm', lg: 'md' })};
          ${ml({ xs: 'sm', lg: 'md' })};
          border-bottom: none;
        }

        & > a {
          ${linkBaseStyle};
          justify-content: space-between;

          & > span {
            display: flex;
            align-items: center;
          }
        }

        & > ul {
          ${p('none')};

          @media (min-width: ${props => props.theme.mediaMd}) {
            position: absolute;
            top: 100%;
            width: 23rem;
            left: -3rem;
            background-color: ${({ theme }) => theme.palette.backgroundPrimary};
            z-index: ${({ theme }) => theme.zIndex.dropdown};
            ${p('md')};
            box-shadow: ${({ theme }) => theme.boxShadowMedium};
            border-radius: ${({ theme }) => theme.smallBorderRadius};

            &::after {
              ${CaretCssStyle};
            }
          }

          & > li {
            list-style: none;
            width: 100%;

            &:first-child {
              ${mt({ xs: 'md', md: 'none' })};
            }

            & > a {
              ${linkBaseStyle};
              justify-content: space-between;
              ${p({ xs: 'md', md: ['lg', 'xl'] })};
              ${ml({ xs: 'md', md: 'none' })};

              @media (min-width: ${props => props.theme.mediaMd}) {
                border-bottom: 1px solid ${({ theme }) => theme.palette.border};
              }
            }

            &:last-child a {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  ${p(['xl', 'none', 'lg', 'none'])};

  @media (min-width: ${props => props.theme.mediaMd}) {
    display: none;
  }

  & > div {
    flex-grow: 1;
    display: grid;
    place-items: center;
  }
`;

export const StyledHeaderSignInBtn = styled.a`
  border: none;
  ${p('none')};
  color: ${({ theme }) => theme.palette.actionablePrimary};
  background-color: ${({ theme }) => theme.palette.backgroundPrimary};
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.defaultBorderRadius};
  text-decoration: none;
  font-weight: 500;

  &:active,
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.content};
  }

  @media (min-width: ${props => props.theme.mediaMd}) {
    border: 2px solid ${({ theme }) => theme.palette.border};
    ${p(['sm', 'md'])};
    color: ${({ theme }) => theme.palette.content};
  }
`;

export const StyledMobileSignInBtn = styled(Button)`
  width: 100%;
`;

export const SubMenu = styled.ul`
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? '20rem' : '0')};
  transition-property: max-height;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;

  @media (min-width: ${props => props.theme.mediaMd}) {
    max-height: max-content;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  }
`;

export const StyledMenuDropDown = styled.button`
  background: ${({ theme }) => theme.palette.backgroundPrimary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  width: 100%;
  ${p('none')};
  color: ${({ theme }) => theme.palette.navigationItem};
  white-space: nowrap;

  &:active {
    outline: 0;
  }

  & > span {
    display: flex;
    align-items: center;
  }
`;

export const ImgPlaceholder = styled.div`
  width: 2rem;
  height: 2rem;
  background: url('/img/menu/PrimaryNavSprite.png');
  background-repeat: no-repeat;
  background-position: ${({ bgPosition }) => bgPosition};
`;

export default HeaderContainer;
