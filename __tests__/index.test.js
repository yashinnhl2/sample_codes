import React from 'react';
import matchesSnapshot from '@upgrade/ui-utils/utils/assertions/matches-snapshot';
import { mdiCardBulletedOutline } from '@mdi/js';
import { create, act } from '@upgrade/ui-utils/utils/tests/renderer';
import SubNavigation, { SubnavItem } from '../index';
import useClickOutside from '../../hooks/useClickOutside';

jest.mock('../../hooks/useClickOutside');
jest.mock('../../StickyActions/Spacer', () => 'Spacer');

const triggerClick = (el, id) => {
  el.props.onClick({
    currentTarget: {
      getAttribute: () => id
    }
  });
};

beforeEach(() => {
  useClickOutside.mockClear();
});

it('should return null if there is no any children', () => {
  matchesSnapshot(<SubNavigation />);
});

it('should render first level items', () => {
  matchesSnapshot(
    <SubNavigation>
      <SubnavItem label="Account" data-auto="accountSubNavLink" icon={mdiCardBulletedOutline} to="/account" />
      <SubnavItem label="Home" data-auto="homeSubNav" icon={mdiCardBulletedOutline} to="/home" />
      <SubnavItem label="Setting" data-auto="settingSubNav" icon={mdiCardBulletedOutline} to="/setting" />
    </SubNavigation>
  );
});

it('should render first and second level items', () => {
  matchesSnapshot(
    <SubNavigation>
      <SubnavItem label="Account" data-auto="accountSubNavLink" icon={mdiCardBulletedOutline} to="/account">
        <SubnavItem label="Transfer in" to="/" icon="none" />
        <SubnavItem label="Debit card funding" to="" icon="none" />
        <SubnavItem label="Deposit a check" to="" icon="none" />
        <SubnavItem label="Deposit history" to="" icon="none" />
      </SubnavItem>
      <SubnavItem label="Home" data-auto="homeSubNav" icon={mdiCardBulletedOutline} to="/home" />
      <SubnavItem label="Setting" data-auto="settingSubNav" icon={mdiCardBulletedOutline} to="/setting" />
    </SubNavigation>
  );
});

it('should render first and second level items plus account item children and overlay', () => {
  const testRenderer = create(
    <SubNavigation>
      <SubnavItem label="Account" data-auto="accountSubNavLink" icon={mdiCardBulletedOutline} to="/account">
        <SubnavItem label="Transfer in" to="/" icon="none" />
        <SubnavItem label="Debit card funding" to="" icon="none" />
        <SubnavItem label="Deposit a check" to="" icon="none" />
        <SubnavItem label="Deposit history" to="" icon="none" />
      </SubnavItem>
      <SubnavItem label="Home" data-auto="homeSubNav" icon={mdiCardBulletedOutline} to="/home" />
      <SubnavItem label="Setting" data-auto="settingSubNav" icon={mdiCardBulletedOutline} to="/setting" />
    </SubNavigation>
  );

  act(() => {
    const { id } = testRenderer.root.findByProps({ role: 'menu' }).props;
    triggerClick(testRenderer.root.findByProps({ label: 'Account' }), id);
  });

  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('should hide elements if user clicks outside', () => {
  const testRenderer = create(
    <SubNavigation>
      <SubnavItem label="Account" data-auto="accountSubNavLink" icon={mdiCardBulletedOutline} to="/account">
        <SubnavItem label="Transfer in" to="/" icon="none" />
        <SubnavItem label="Debit card funding" icon="none" />
        <SubnavItem label="Deposit a check" icon="none" />
        <SubnavItem label="Deposit history" icon="none" />
      </SubnavItem>
      <SubnavItem label="Home" data-auto="homeSubNav" icon={mdiCardBulletedOutline} to="/home" />
      <SubnavItem label="Setting" data-auto="settingSubNav" icon={mdiCardBulletedOutline} to="/setting" />
    </SubNavigation>
  );

  act(() => {
    useClickOutside.mock.calls.at(-1)[0].handler();
  });

  expect(testRenderer.toJSON()).toMatchSnapshot();
});

it('test close and open menu', () => {
  const component = create(
    <SubNavigation>
      <SubnavItem label="Account" data-auto="accountSubNavLink" icon={mdiCardBulletedOutline} isOpen>
        <SubnavItem label="Transfer in" to="/t" icon="none" />
        <SubnavItem label="Debit card funding" to="/d" icon="none" />
        <SubnavItem label="Deposit a check" to="/c" icon="none" />
        <SubnavItem label="Deposit history" to="/dd" icon="none" />
      </SubnavItem>
      <SubnavItem label="Home" data-auto="homeSubNav" icon={mdiCardBulletedOutline} to="/home" />
      <SubnavItem label="Setting" data-auto="settingSubNav" icon={mdiCardBulletedOutline} to="/setting" />
    </SubNavigation>
  );
  const [firstItem] = component.root.findAllByType(SubnavItem);

  expect(firstItem.props.currentOpenItem).toBeNull();

  const { id } = component.root.findByProps({ role: 'menu' }).props;

  act(() => {
    triggerClick(firstItem, id);
  });

  expect(firstItem.props.currentOpenItem).toBe(id);
  expect(component.toJSON()).toMatchSnapshot();

  act(() => {
    // close item after clicking an item that is already opened
    triggerClick(firstItem, id);
  });

  expect(firstItem.props.currentOpenItem).toBeNull();

  act(() => {
    // open again
    triggerClick(firstItem, id);
  });

  expect(firstItem.props.currentOpenItem).toBe(id);

  act(() => {
    firstItem.props.closeMenu();
  });

  expect(firstItem.props.currentOpenItem).toBeNull();
});

it('test close menu with Esc', () => {
  const addEventListener = jest.fn();
  const removeEventListener = jest.fn();

  const component = create(
    <SubNavigation>
      <SubnavItem label="Account" data-auto="accountSubNavLink" icon={mdiCardBulletedOutline} isOpen>
        <SubnavItem label="Transfer in" to="/t" icon="none" />
        <SubnavItem label="Debit card funding" to="/d" icon="none" />
        <SubnavItem label="Deposit a check" to="/c" icon="none" />
        <SubnavItem label="Deposit history" to="/dd" icon="none" />
      </SubnavItem>
      <SubnavItem label="Home" data-auto="homeSubNav" icon={mdiCardBulletedOutline} to="/home" />
      <SubnavItem label="Setting" data-auto="settingSubNav" icon={mdiCardBulletedOutline} to="/setting" />
    </SubNavigation>,
    {
      createNodeMock: el => {
        return el.type === 'nav' ? { addEventListener, removeEventListener } : null;
      }
    }
  );

  const [firstItem] = component.root.findAllByType(SubnavItem);

  expect(firstItem.props.currentOpenItem).toBeNull();

  const { id } = component.root.findByProps({ role: 'menu' }).props;

  act(() => {
    triggerClick(firstItem, id);
  });

  expect(firstItem.props.currentOpenItem).toBe(id);
  expect(addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function), false);
  expect(removeEventListener).not.toHaveBeenCalled();

  act(() => {
    addEventListener.mock.calls[0][1]({
      key: 'Escape'
    });
  });

  expect(firstItem.props.currentOpenItem).toBeNull();

  act(() => {
    component.unmount();
  });

  expect(removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function), false);
});
