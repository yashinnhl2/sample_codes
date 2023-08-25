import noticeWidget from '../../../widgets/common/notice';
import seoWidget from '../../../widgets/seo';

export default {
  file: 'src/pages/credit-health/insights/index.md',
  label: 'Credit Health Insights',
  name: 'credit-health-insights',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'credit-health-insights'
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
          label: 'Background Image',
          name: 'image',
          widget: 'image'
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
