import React from 'react';
import wait from 'waait';
import { act, create } from '@upgrade/ui-utils/utils/tests/renderer';

import useBreakpoint, { setBreakpoint } from '../useBreakpoint';

const Comp = () => {
  const breakpoint = useBreakpoint();
  return <div data-breakpoint={breakpoint} />;
};

it('updates breakpoint value', async () => {
  let instance;

  act(() => {
    instance = create(<Comp />);
  });

  await wait();

  // default value
  expect(instance.root.findByType('div').props['data-breakpoint']).toBe('sm');

  act(() => {
    setBreakpoint('lg');
  });

  await wait();

  expect(instance.root.findByType('div').props['data-breakpoint']).toBe('lg');
});
