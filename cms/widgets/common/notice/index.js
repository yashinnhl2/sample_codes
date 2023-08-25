import * as bankNoticeTypes from '@upgrade/react-components/FooterBankNotice/types';

const noticeWidget = [
  {
    label: 'Bank Notice',
    name: 'notice',
    widget: 'select',
    options: Object.values(bankNoticeTypes) || [],
    required: false
  },
  {
    label: 'Bank Notice with NYDIG',
    name: 'withNydigNotice',
    widget: 'boolean',
    default: false,
    required: false
  }
];

export default noticeWidget;
