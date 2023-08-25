import React from 'react';
import matchesSnapshot from '@upgrade/ui-utils/utils/assertions/matches-snapshot';
import { Margin } from '../Margin';

describe('Margin', () => {
  it('Should have no style when no props are passed', () => {
    matchesSnapshot(<Margin />);
  });

  it('Should have inline props if inline prop is passed', () => {
    matchesSnapshot(<Margin inline />);
  });

  it('Should have xs to rem margin from all side', () => {
    matchesSnapshot(<Margin all={{ xs: 'xs' }} />);
  });

  it('Should have xs, sm to rem margin from all side', () => {
    matchesSnapshot(<Margin all={{ xs: 'xs', sm: 'md' }} />);
  });

  it('Should have xs, sm to rem margin from right side only', () => {
    matchesSnapshot(<Margin right={{ xs: 'md', sm: 'lg' }} />);
  });

  it('Should have margin top only without any media queries', () => {
    matchesSnapshot(<Margin top="2xl" />);
  });

  it('Should have margin left only without any media queries', () => {
    matchesSnapshot(<Margin left="3xl" />);
  });

  it('Should have margin left only without any media queries, if user pass string', () => {
    matchesSnapshot(<Margin left="lg" />);
  });

  it('Should have no style, if user pass empty string', () => {
    matchesSnapshot(<Margin left="" />);
  });

  it('Should have empty value, if user pass empty object', () => {
    matchesSnapshot(<Margin left={{}} />);
  });
});
