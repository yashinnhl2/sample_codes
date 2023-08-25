import noticeWidget from '../../../widgets/common/notice';
import seoWidget from '../../../widgets/seo';

export default {
  file: 'src/pages/careers/index.md',
  label: 'Careers',
  name: 'careers',
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
        { label: 'Subtitle', name: 'subtitle', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'string' }
      ]
    },
    {
      label: 'Core Values',
      name: 'coreValues',
      widget: 'object',
      fields: [
        {
          label: 'Items',
          name: 'items',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Subtitle', name: 'subtitle', widget: 'string' },
            {
              label: 'Highlights',
              name: 'highlights',
              widget: 'list',
              summary: '{{fields.item}}',
              fields: [{ label: 'Item', name: 'item', widget: 'string' }]
            },
            { label: 'Background Color', name: 'backgroundColor', widget: 'color' },
            { label: 'Image', name: 'imageUrl', widget: 'image' }
          ]
        }
      ]
    },
    {
      label: 'Collage Section',
      name: 'collageSection',
      widget: 'object',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Text', name: 'text', widget: 'string', required: false }
      ]
    },
    {
      label: 'Highlights Alt',
      name: 'highlightsAlt',
      widget: 'object',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'string', required: false },
        { label: 'Description', name: 'description', widget: 'string' },
        {
          label: 'Badges',
          name: 'badges',
          widget: 'list',
          fields: [
            { label: 'Badge Title', name: 'badgeTitle', widget: 'string', required: false },
            { label: 'Badge Image', name: 'badgeImgUrl', widget: 'image' }
          ]
        }
      ]
    },
    {
      label: 'Show Office Locations',
      name: 'showOfficeLocations',
      widget: 'boolean'
    },
    {
      label: 'Legal',
      name: 'legal',
      widget: 'markdown'
    },
    ...noticeWidget
  ]
};
