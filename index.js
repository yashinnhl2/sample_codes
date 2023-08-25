import React, {
  Children,
  useState,
  cloneElement,
  useId,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo
} from 'react';
import { size, upperFirst } from 'lodash-es';
import { NavLink } from 'react-router-dom';
import { ThemeProvider, useTheme } from 'styled-components';
import useClickOutside from '../hooks/useClickOutside';
import {
  StyledNavContainer,
  SheetsContainer,
  StyledOverlay,
  LinkContainer,
  StyledExternalLink,
  StyledMenuDropDown
} from './styles';
import Icon from '../Icon';
import Text from '../Typography/Text';
import Spacer from '../StickyActions/Spacer';
import { setBreakpoint } from './useBreakpoint';
import { SUB_NAVIGATION_ID } from './constants';

const ExternalLink = ({ children, to, ...otherProps }) => (
  <StyledExternalLink {...otherProps} href={to} target="_blank" rel="noreferrer">
    {children}
  </StyledExternalLink>
);

const getMenuItemComponent = ({ subMenuId, to, isOpen }) => {
  if (!to) {
    return {
      LinkComp: StyledMenuDropDown,
      'aria-haspopup': 'menu',
      'aria-controls': subMenuId,
      'aria-expanded': isOpen,
      className: isOpen ? 'active' : ''
    };
  }

  if (to.startsWith('http')) {
    return {
      LinkComp: ExternalLink,
      to
    };
  }

  return {
    LinkComp: NavLink,
    className: ({ isActive }) => (isActive ? 'active' : ''),
    to
  };
};

const SubMenu = ({ menuRef, subMenuId, children, closeMenu, isOpen }) => {
  const subMenuRef = useRef(null);
  useClickOutside({
    ref: menuRef,
    handler: closeMenu,
    skip: !isOpen
  });

  useEffect(() => {
    // focus the first menuitem
    if (isOpen) {
      subMenuRef?.current?.querySelector('[role="menuitem"]')?.focus();
    }
  }, [subMenuRef, isOpen]);

  return (
    <SheetsContainer hidden={!isOpen} ref={subMenuRef} id={subMenuId} role="menu">
      {Children.toArray(children).map(child =>
        cloneElement(child, {
          onClick: closeMenu
        })
      )}
    </SheetsContainer>
  );
};

const SubnavItem = ({
  to,
  'data-auto': dataAuto,
  onClick,
  children,
  menuRef,
  currentOpenItem,
  label,
  icon,
  closeMenu = () => {}
}) => {
  const subMenuId = useId();
  const isOpen = currentOpenItem === subMenuId;
  const { LinkComp, ...props } = getMenuItemComponent({ subMenuId, to, isOpen });

  return (
    <LinkContainer>
      <LinkComp {...props} data-auto={dataAuto} onClick={onClick} role="menuitem">
        {icon && <Icon {...{ icon, size: '1.5rem' }} />}
        <Text as="span" weight="500">
          {label}
        </Text>
      </LinkComp>
      {children ? <SubMenu {...{ menuRef, subMenuId, children, closeMenu, isOpen }} /> : null}
    </LinkContainer>
  );
};

const CLOSED_STATE = {
  currentOpenItem: null,
  showOverlay: false
};

const SubNavigation = ({ children, 'aria-label': ariaLabel, breakpoint }) => {
  const theme = useTheme();
  const menuRef = useRef();
  const mainNavItems = Children.toArray(children);
  const [{ currentOpenItem, showOverlay }, setState] = useState(CLOSED_STATE);

  useLayoutEffect(() => {
    setBreakpoint(breakpoint);
  }, [breakpoint]);

  // customTheme is used as a hack to set the dynamic breakpoint media query without needing to pass a special prop to
  // each styled component
  const customTheme = useMemo(
    () => ({
      ...theme,
      mediaSubNavigationBreakpoint: `min-width: ${theme[`media${upperFirst(breakpoint)}`]}`
    }),
    [theme, breakpoint]
  );

  const closeMenu = useCallback(() => {
    setState(CLOSED_STATE);
  }, [setState]);

  const handleItemClick = useCallback(
    event => {
      const subMenuId = event.currentTarget.getAttribute('aria-controls');
      setState(curState => {
        if (!subMenuId || curState.currentOpenItem === subMenuId) {
          return CLOSED_STATE;
        }

        return {
          currentOpenItem: subMenuId,
          showOverlay: true
        };
      });
    },
    [setState]
  );

  const onEscapeBtnPress = useCallback(
    event => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    const menu = menuRef?.current;

    menu?.addEventListener('keydown', onEscapeBtnPress, false);

    return () => menu?.removeEventListener('keydown', onEscapeBtnPress, false);
  }, [onEscapeBtnPress]);

  if (size(mainNavItems) === 0) return null;

  return (
    <ThemeProvider theme={customTheme}>
      {showOverlay && <StyledOverlay onClick={closeMenu} />}
      <StyledNavContainer id={SUB_NAVIGATION_ID} ref={menuRef} aria-label={ariaLabel}>
        {mainNavItems.map(child =>
          cloneElement(child, {
            menuRef,
            onClick: handleItemClick,
            currentOpenItem,
            closeMenu
          })
        )}
      </StyledNavContainer>
      <Spacer sourceRef={menuRef} {...{ breakpoint }} />
    </ThemeProvider>
  );
};

SubNavigation.defaultProps = {
  breakpoint: 'sm'
};

export default SubNavigation;
export { SubnavItem };
