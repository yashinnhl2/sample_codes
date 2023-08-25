import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Icon, Margin } from '@upgrade/react-components';
import { mdiChevronDown } from '@mdi/js';
import { useTheme } from 'styled-components';
import { SubMenu, StyledMenuDropDown, ImgPlaceholder } from '../styles';

const ExternalLink = ({ children, to }) => (
  <a href={to} role="menuitem" target="_blank" rel="noreferrer">
    {children}
  </a>
);

const getMenuItemComponent = ({ to }) => {
  if (to?.startsWith('http')) {
    return ExternalLink;
  }

  if (to === '') {
    return StyledMenuDropDown;
  }

  return GatsbyLink;
};

const MenuItem = ({ label, to = '', bgPosition, icon, children, onClick, onKeyDown, id, visibleSubMenuId, status }) => {
  const theme = useTheme();

  const LinkComp = getMenuItemComponent({ to });

  const matchId = () => visibleSubMenuId === id;

  const getActiveColor = () => (children && matchId() ? theme.palette.actionablePrimary : 'inherit');

  return (
    <li role="none">
      <LinkComp
        {...{
          to,
          role: 'menuitem',
          onClick,
          onKeyDown,
          'aria-expanded': matchId(),
          activeClassName: to ? 'active' : ''
        }}
      >
        <span style={{ color: getActiveColor() }}>
          {icon && (
            <Margin className="hidden-md" right="sm">
              <Icon align="middle" icon={icon} size="1.5rem" color="actionablePrimary" />
            </Margin>
          )}
          {label}
          <Margin className="hidden-md" left="sm">
            {status}
          </Margin>
        </span>

        {children && (
          <Icon
            icon={mdiChevronDown}
            size="1.5rem"
            style={{
              transform: `rotate(${matchId() ? '180deg' : '0'})`,
              color: getActiveColor()
            }}
          />
        )}

        {bgPosition && <ImgPlaceholder bgPosition={bgPosition} className="hidden visible-sm" />}
      </LinkComp>

      {children && <SubMenu visible={matchId()}>{children}</SubMenu>}
    </li>
  );
};

export default MenuItem;
