import noticeWidget from '../../../widgets/common/notice';
import seoWidget from '../../../widgets/seo';

export default {
  file: 'src/pages/careers/belonging.md',
  label: 'Belonging',
  name: 'belonging',
  fields: [
    { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'careers' },
    { ...seoWidget },
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'string' },
        { label: 'Background image', name: 'image', widget: 'image' }
      ]
    },
    {
      label: 'Highlights',
      name: 'highlights',
      widget: 'object',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'string', required: false },
        { label: 'Description', name: 'description', widget: 'string' }
      ]
    },
    {
      label: 'ERG Groups',
      name: 'ergGroups',
      widget: 'list',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'markdown' },
        { label: 'Image', name: 'image', widget: 'image' }
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
