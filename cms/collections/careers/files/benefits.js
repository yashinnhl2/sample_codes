import noticeWidget from '../../../widgets/common/notice';
import seoWidget from '../../../widgets/seo';

export default {
  file: 'src/pages/careers/benefits.md',
  label: 'Benefits',
  name: 'benefits',
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
      label: 'Info Types',
      name: 'infoTypes',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false
        },
        {
          label: 'Background Color',
          name: 'backgroundColor',
          widget: 'palette',
          default: 'content',
          required: false
        },
        {
          label: 'Font Color',
          name: 'fontColor',
          widget: 'palette',
          default: 'content',
          required: false
        },
        {
          label: 'Columns count',
          name: 'columns',
          widget: 'select',
          default: '2',
          options: [
            {
              label: '1',
              value: 1
            },
            {
              label: '2',
              value: 2
            },
            {
              label: '3',
              value: 3
            },
            {
              label: '4',
              value: 4
            }
          ]
        },
        {
          label: 'Items',
          name: 'items',
          widget: 'list',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string'
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'string'
            }
          ]
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
