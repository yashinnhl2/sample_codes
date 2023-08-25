import React from 'react';
import matchesSnapshot from '@upgrade/ui-utils/utils/assertions/matches-snapshot';
import styled from 'styled-components';
import { m, p, mt } from '../core';

describe('Mixins', () => {
  it('Element should get space from all side without queries', () => {
    const Element = styled.div`
      ${m('xl')}
    `;
    matchesSnapshot(<Element />);
  });

  it('Should have get margin from top - no queries', () => {
    const Element = styled.div`
      ${mt('xl')}
    `;
    matchesSnapshot(<Element />);
  });

  it('Should have get padding from all side with all media queries', () => {
    const Element = styled.div`
      ${p({ xs: 'xs', sm: 'sm', md: 'md', lg: 'lg' })}
    `;
    matchesSnapshot(<Element />);
  });

  it('Should have get padding from all side with md media query', () => {
    const Element = styled.div`
      ${p({ md: 'md' })}
    `;
    matchesSnapshot(<Element />);
  });

  it('Should add custom margin to all directions in one line, if array passed', () => {
    const Element = styled.div`
      ${m(['md', 'xs', 'lg', 'md'])}
    `;
    matchesSnapshot(<Element />);
  });

  it('Should add custom margin to horizontal and vertical directions', () => {
    const Element = styled.div`
      ${m(['md', 'xl'])}
    `;
    matchesSnapshot(<Element />);
  });

  it('Should add custom margin to horizontal and vertical directions in different media queries', () => {
    const Element = styled.div`
      ${m({ xs: ['md', 'xs'], sm: ['xl', 'md'] })}
    `;
    matchesSnapshot(<Element />);
  });
});
