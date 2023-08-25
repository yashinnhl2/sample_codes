const lowerCostSection = {
  label: 'Lower Cost Section',
  name: 'lowerCostSection',
  widget: 'object',
  required: false,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      widget: 'string',
      required: false
    },
    {
      label: 'Headline',
      name: 'headline',
      widget: 'string',
      required: false
    },
    {
      label: 'Sub headline',
      name: 'subheadline',
      widget: 'string',
      required: false
    },
    {
      label: 'Background Color',
      name: 'backgroundColor',
      widget: 'palette',
      default: 'backgroundPage',
      required: false
    },
    {
      label: 'Table',
      name: 'table',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'First Heading',
          name: 'firstHeading',
          widget: 'string',
          required: false
        },
        {
          label: 'Second Heading',
          name: 'secondHeading',
          widget: 'string',
          required: false
        },
        {
          label: 'First Row (Comma separated columns)',
          name: 'firstRow',
          widget: 'list',
          required: false
        },
        {
          label: 'Second Row (Comma separated columns)',
          name: 'secondRow',
          widget: 'list',
          required: false
        },
        {
          label: 'Third Row (Comma separated columns)',
          name: 'thirdRow',
          widget: 'list',
          required: false
        },
        {
          label: 'First Footnote',
          name: 'firstFootnote',
          widget: 'string',
          required: false
        },
        {
          label: 'Second Footnote',
          name: 'secondFootnote',
          widget: 'string',
          required: false
        },
        {
          label: 'Third Footnote',
          name: 'thirdFootnote',
          widget: 'string',
          required: false
        }
      ]
    }
  ]
};

export default lowerCostSection;
