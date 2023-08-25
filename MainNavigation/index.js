import React, { useEffect, useRef, useState } from 'react';
import {
  mdiBankOutline,
  mdiCardBulletedOutline,
  mdiCashFast,
  mdiClose,
  mdiHelpCircleOutline,
  mdiMenu,
  mdiPiggyBankOutline,
  mdiViewGrid
} from '@mdi/js';
import { Link as GatsbyLink } from 'gatsby';
import { HeaderLogo, IconButton } from '@upgrade/react-components';
import { debounce } from 'lodash';
import useClickOutside from '../../../utils/useClickOutside';
import Fluid from '../../Fluid';
import HeaderContainer, { MobileHeader, MenuWrapper, StyledHeaderSignInBtn, StyledMobileSignInBtn } from './styles';
import MenuItem from './MenuItem';
import useWindowSize from '../../../utils/useWindowSize';
import PartnerLogos from '../../PartnerLogos';

const NavContainer = ({ children, navRef, showMobileMenu }) => {
  return (
    <nav aria-label="upgrade menu">
      <ul aria-orientation={showMobileMenu ? 'vertical' : 'horizontal'} role="menubar" ref={navRef}>
        {children}
      </ul>
    </nav>
  );
};

const menuIconProps = {
  label: 'close menu',
  size: '1.5rem',
  className: 'hidden-md'
};

const HeaderMenu = ({
  signInHref,
  signInText,
  showNavigation = true,
  showPartnerLogo,
  location,
  showNavItems = true
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [visibleSubMenuId, setVisibleSubMenuId] = useState('');
  const [addHeaderShadow, setAddHeaderShadow] = useState(false);
  const navContainerRef = useRef();
  const { width: windowWidth } = useWindowSize();

  useClickOutside(navContainerRef, () => setVisibleSubMenuId(''));

  const handleMenuClick = id => event => {
    if (event.type === 'click') {
      event.currentTarget.blur();
    }

    if (visibleSubMenuId === id) {
      setVisibleSubMenuId('');
      return;
    }

    setVisibleSubMenuId(id);
  };

  useEffect(() => {
    if (showMobileMenu && windowWidth < 1280) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu, windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setAddHeaderShadow(true);
        setVisibleSubMenuId('');
      } else {
        setAddHeaderShadow(false);
      }
    };
    const debouncedHandleScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer addHeaderShadow={addHeaderShadow}>
      <Fluid>
        {showNavigation && (
          <IconButton
            {...{ ...menuIconProps }}
            icon={mdiMenu}
            color="actionablePrimary"
            onClick={() => setShowMobileMenu(true)}
            onKeyDown={handleMenuClick('')}
          />
        )}

        <HeaderLogo {...{ Link: GatsbyLink, linkProps: { to: '/' }, logoMobileLarge: true }} />

        {showNavigation && (
          <MenuWrapper visible={showMobileMenu}>
            <MobileHeader>
              <IconButton
                {...{ ...menuIconProps }}
                icon={mdiClose}
                color="content"
                onClick={() => setShowMobileMenu(false)}
                onKeyDown={handleMenuClick('')}
              />
              <div>
                <HeaderLogo {...{ Link: GatsbyLink, linkProps: { to: '/' }, logoMobileLarge: true }} />
              </div>
            </MobileHeader>

            {showNavItems !== false && (
              <NavContainer navRef={navContainerRef} showMobileMenu={showMobileMenu}>
                <MenuItem
                  label="Personal Loans"
                  id="pl"
                  visibleSubMenuId={visibleSubMenuId}
                  onClick={handleMenuClick('pl')}
                  icon={mdiCashFast}
                >
                  <MenuItem label="Personal Loans" bgPosition="-48px -96px" to="/personal-loans/" />
                  <MenuItem
                    label="Refinance Credit Cards"
                    bgPosition="2px -143px"
                    to="/personal-loans/refinance-credit-cards/"
                  />
                  <MenuItem
                    label="Debt Consolidation"
                    bgPosition="-48px -143px"
                    to="/personal-loans/debt-consolidation/"
                  />
                  <MenuItem label="Home Improvement" bgPosition="2px -192px" to="/personal-loans/home-improvement/" />
                  <MenuItem label="Major Purchase" bgPosition="-48px -192px" to="/personal-loans/major-purchase/" />
                </MenuItem>
                <MenuItem
                  label="Upgrade Cards"
                  id="uc"
                  onClick={handleMenuClick('uc')}
                  visibleSubMenuId={visibleSubMenuId}
                  icon={mdiCardBulletedOutline}
                >
                  <MenuItem label="Upgrade Cards" bgPosition="0px -96px" to="/upgrade-card/" />
                  <MenuItem label="Cash Rewards" bgPosition="0px -48px" to="/upgrade-card/cash-rewards/" />
                  <MenuItem label="Upgrade OneCard" bgPosition="-48px 0px" to="/one-card/" />
                  <MenuItem label="Bitcoin Rewards" bgPosition="-48px -48px" to="/upgrade-card/bitcoin/" />
                  <MenuItem label="Life Rewards" bgPosition="0px -96px" to="/upgrade-card/life-rewards/" />
                  {/* <MenuItem label="Compare Cards" bgPosition={menuIcon.iconCardCompare} to="/upgrade-card/compare-cards" /> */}
                </MenuItem>
                <MenuItem
                  icon={mdiCardBulletedOutline}
                  label="OneCard"
                  to="/one-card/"
                  /* add badges like status={<Status type="success">new</Status>} */
                />
                <MenuItem icon={mdiPiggyBankOutline} label="Savings" to="/premier-savings/" />
                <MenuItem icon={mdiBankOutline} label="Checking" to="/rewards-checking-plus/" />
                <MenuItem icon={mdiViewGrid} label="Credit Health" to="/credit-health-monitoring/" />
                <MenuItem icon={mdiHelpCircleOutline} label="Help" to="https://upgrade.zendesk.com/hc/en-us" />
              </NavContainer>
            )}

            <StyledMobileSignInBtn
              data-auto="mobile-sign-in"
              className="hidden-md"
              emphasis="secondary"
              href={signInHref ?? '/portal/'}
            >
              {signInText ?? 'Sign In'}
            </StyledMobileSignInBtn>
          </MenuWrapper>
        )}

        {!showPartnerLogo && (
          <StyledHeaderSignInBtn data-auto="desktop-sign-in" emphasis="secondary" href={signInHref ?? '/portal/'}>
            {signInText ?? 'Sign In'}
          </StyledHeaderSignInBtn>
        )}

        {showPartnerLogo && <PartnerLogos {...{ location }} />}
      </Fluid>
    </HeaderContainer>
  );
};

export default HeaderMenu;
