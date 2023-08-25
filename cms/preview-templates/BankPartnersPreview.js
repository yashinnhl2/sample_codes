import React from 'react';
import BankPartnersPage from '../../components/bank-partners';
import Styled from './styled-injector';
import GlobalLayout from '../../components/common/Layout';

export default ({ entry }) => {
  const data = entry.get('data').toJS();
  const { legal, notice, title, partners } = data;
  return (
    <Styled>
      <GlobalLayout {...{ legal, notice }}>
        <BankPartnersPage {...{ title, partners }} />
      </GlobalLayout>
    </Styled>
  );
};
