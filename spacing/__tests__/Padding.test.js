import React from 'react';
import matchesSnapshot from '@upgrade/ui-utils/utils/assertions/matches-snapshot';
import { Padding } from '../Padding';

describe('Padding', () => {
  it('Should have no style when no props are passed', () => {
    matchesSnapshot(<Padding />);
  });

  it('Should have inline props if inline prop is passed', () => {
    matchesSnapshot(<Padding inline />);
  });

  it('Should have xs to rem Padding from all side', () => {
    matchesSnapshot(<Padding all={{ xs: 'xs' }} />);
  });

  it('Should have xs, sm to rem Padding from all side', () => {
    matchesSnapshot(<Padding all={{ xs: 'xs', sm: 'md' }} />);
  });

  it('Should have xs, sm to rem Padding from right side only', () => {
    matchesSnapshot(<Padding right={{ xs: 'md', sm: 'lg' }} />);
  });

  it('Should have Padding top only without any media queries', () => {
    matchesSnapshot(<Padding top="2xl" />);
  });

  it('Should have Padding left only without any media queries', () => {
    matchesSnapshot(<Padding left="2xl" />);
  });

  it('Should have Padding left only without any media queries, if user pass string', () => {
    matchesSnapshot(<Padding right="xl" />);
  });

  it('Should have no style, if user pass empty string', () => {
    matchesSnapshot(<Padding left="" />);
  });

  it('Should have empty value, if user pass empty object', () => {
    matchesSnapshot(<Padding left={{}} />);
  });
});
