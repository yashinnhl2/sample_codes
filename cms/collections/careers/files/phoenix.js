import noticeWidget from '../../../widgets/common/notice';
import seoWidget from '../../../widgets/seo';

export default {
  file: 'src/pages/careers/phoenix.md',
  label: 'Phoenix Careers',
  name: 'phoenix',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'careers/phoenix'
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
          label: 'Subtitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Background image',
          name: 'image',
          widget: 'image'
        }
      ]
    },
    {
      label: 'Collage Section',
      name: 'collageSection',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'markdown'
        }
      ]
    },
    {
      label: 'Legal',
      name: 'legal',
      widget: 'markdown',
      required: false
    },
    ...noticeWidget
  ]
};
