import { useEffect } from 'react';

import { SUB_NAVIGATION_ID } from './constants';
import useWindowMinWidth from '../hooks/useWindowMinWidth';
import addCssUnit from '../utils/add-css-unit';
import getElementById from '../utils/get-element-by-id';
import useBreakpoint from './useBreakpoint';

const useStacked = ({ ref, navIdOrRef = SUB_NAVIGATION_ID }) => {
  const breakpoint = useBreakpoint();
  const [matchBreakpoint] = useWindowMinWidth(breakpoint);

  useEffect(() => {
    const el = ref?.current;

    if (!el) return;

    if (matchBreakpoint) {
      el.dataset.stacked = false;
      el.style.bottom = '0';
      return;
    }

    const nav = typeof navIdOrRef === 'string' ? getElementById(navIdOrRef) : navIdOrRef?.current;
    if (nav) {
      const { height } = nav.getBoundingClientRect();
      el.dataset.stacked = true;
      el.style.bottom = addCssUnit(height);
    }
  }, [matchBreakpoint, ref, navIdOrRef]);
};

export default useStacked;
