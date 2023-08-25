import React from 'react';
import AutoRefi from '../../components/auto-refi';
import Styled from './styled-injector';
import GlobalLayout from '../../components/common/Layout';

export default ({ entry }) => {
  const data = entry.get('data').toJS();
  const { hero, infoTypes, verticalSteps, autoLoanDetails, help, contact, legal, notice } = data;
  return (
    <Styled>
      <GlobalLayout {...{ legal, notice, margin: false, showNavigation: true }}>
        <AutoRefi {...{ hero, infoTypes, verticalSteps, autoLoanDetails, help, contact }} />
      </GlobalLayout>
    </Styled>
  );
};
