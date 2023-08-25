import noticeWidget from '../../../widgets/common/notice';
import seoWidget from '../../../widgets/seo';

export default {
  file: 'src/pages/credit-health-monitoring/index.md',
  label: 'Credit Health Monitoring',
  name: 'credit-health-monitoring',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'credit-health-monitoring'
    },
    {
      ...seoWidget
    },
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Secondary Title',
          name: 'subtitle',
          widget: 'string',
          required: false
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image'
        },
        {
          label: 'Hide Image On Mobile',
          name: 'hideImageOnMobile',
          widget: 'boolean'
        }
      ]
    },
    {
      label: 'Legal',
      name: 'legal',
      widget: 'markdown'
    },
    ...noticeWidget
  ]
};
