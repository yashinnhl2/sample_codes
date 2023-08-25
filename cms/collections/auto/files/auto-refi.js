import contactWidget from '../../../widgets/common/contact';
import noticeWidget from '../../../widgets/common/notice';
import seoWidget from '../../../widgets/seo';

export default {
  file: 'src/pages/auto-refi/index.md',
  label: 'Auto Refinance',
  name: 'auto-refi',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'auto-refi'
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
          label: 'BackgroundColor',
          name: 'backgroundColor',
          widget: 'palette',
          required: false
        },
        {
          label: 'Caption',
          name: 'caption',
          widget: 'string',
          required: false
        },
        {
          label: 'Secondary Title',
          name: 'subtitle',
          widget: 'string',
          required: false
        },
        {
          label: ' Image',
          name: 'image',
          widget: 'image',
          required: false
        },
        {
          label: 'Is White Header?',
          name: 'isWhiteHeader',
          widget: 'boolean',
          default: false
        },
        {
          label: 'Hide image on mobile?',
          name: 'hideImageOnMobile',
          widget: 'boolean',
          default: false
        },
        {
          label: 'CTA Button Text',
          name: 'ctaButtonText',
          widget: 'string',
          required: false
        }
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
          widget: 'string'
        },
        {
          label: 'Secondary Title',
          name: 'subtitle',
          widget: 'string',
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
              label: 'Image',
              name: 'image',
              widget: 'image'
            },
            {
              label: 'ImageWidth',
              name: 'imageWidth',
              widget: 'number',
              required: false
            },
            {
              label: 'imageHeight',
              name: 'imageHeight',
              widget: 'number',
              required: false
            },
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
              required: false
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'markdown',
              required: false
            }
          ]
        }
      ]
    },
    {
      label: 'InfoTypes Alt',
      name: 'infoTypesAlt',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'SubTitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Background Color',
          name: 'backgroundColor',
          widget: 'palette',
          default: 'backgroundPage',
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
          label: 'Align Items (based on flex property)',
          name: 'alignItems',
          widget: 'string',
          required: false
        },
        {
          label: 'Items',
          name: 'items',
          widget: 'list',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
              required: false
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'string'
            },
            {
              label: 'Styled Text',
              name: 'styledText',
              widget: 'string'
            }
          ]
        }
      ]
    },
    {
      label: 'Auto Loan Details',
      name: 'autoLoanDetails',
      widget: 'object',
      fields: [
        {
          label: 'title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'description',
          name: 'description',
          widget: 'string'
        },
        {
          label: 'First Image',
          name: 'firstImage',
          widget: 'image'
        },
        {
          label: 'second Image',
          name: 'secondImage',
          widget: 'image'
        },
        {
          label: 'Text Bottom',
          name: 'textBottom',
          widget: 'string'
        },
        {
          label: 'Text Top',
          name: 'textTop',
          widget: 'string'
        },
        {
          label: 'highlights Bottom',
          name: 'highlightsBottom',
          widget: 'list',
          fields: [
            {
              label: 'Item',
              name: 'item',
              widget: 'string'
            }
          ]
        },
        {
          label: 'highlights Top',
          name: 'highlightsTop',
          widget: 'list',
          fields: [
            {
              label: 'Item',
              name: 'item',
              widget: 'string'
            }
          ]
        }
      ]
    },
    {
      label: 'FAQ',
      name: 'help',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'SubTitle',
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'BackgroundColor',
          name: 'backgroundColor',
          widget: 'palette'
        },
        {
          label: 'Layout (Number of Columns)',
          name: 'layout',
          widget: 'number'
        },
        {
          label: 'Items',
          name: 'items',
          widget: 'list',
          fields: [
            {
              label: 'Question',
              name: 'question',
              widget: 'string'
            },
            {
              label: 'Answer',
              name: 'answer',
              widget: 'string'
            }
          ]
        }
      ]
    },
    { ...contactWidget },
    ...noticeWidget,
    {
      label: 'Legal',
      name: 'legal',
      widget: 'markdown'
    }
  ]
};
