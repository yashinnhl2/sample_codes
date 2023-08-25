import React, { useRef } from 'react';
import wait from 'waait';
import { act, create } from '@upgrade/ui-utils/utils/tests/renderer';

import getElementById from '../../utils/get-element-by-id';
import useWindowMinWidth from '../../hooks/useWindowMinWidth';

import useStacked from '../useStacked';

jest.mock('../../utils/get-element-by-id', () => jest.fn());
jest.mock('../../hooks/useWindowMinWidth');

let nodeMock;

const Comp = ({ navIdOrRef }) => {
  const ref = useRef();
  useStacked({ ref, navIdOrRef });

  return <div ref={ref} />;
};

beforeEach(() => {
  getElementById.mockReturnValue({
    getBoundingClientRect: () => ({ height: 80 })
  });
  useWindowMinWidth.mockReturnValue([true]);
});

const setup = (navIdOrRef = 'some-fake-id') => {
  let instance;

  act(() => {
    instance = create(<Comp {...{ navIdOrRef }} />, {
      createNodeMock: () => {
        nodeMock = {
          dataset: {},
          style: {}
        };

        return nodeMock;
      }
    });
  });

  return instance;
};

it('should set bottom:0 and stacked="false" if matches the breakpoint', async () => {
  useWindowMinWidth.mockReturnValue([true]);

  setup();

  await wait();

  expect(nodeMock.style.bottom).toEqual('0');
  expect(nodeMock.dataset.stacked).toEqual(false);
});

it('should set bottom and stacked="true" if does not match the breakpoint', async () => {
  useWindowMinWidth.mockReturnValue([false]);

  setup();

  await wait();

  expect(nodeMock.style.bottom).toEqual('80px');
  expect(nodeMock.dataset.stacked).toEqual(true);
});

it('should support ref on navIdOrRef', async () => {
  useWindowMinWidth.mockReturnValue([false]);

  const navRef = {
    current: {
      getBoundingClientRect: () => ({ height: 123 })
    }
  };

  setup(navRef);

  await wait();

  expect(nodeMock.dataset.stacked).toEqual(true);
  expect(nodeMock.style.bottom).toEqual('123px');
});
