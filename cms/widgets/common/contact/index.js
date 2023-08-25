const contactWidget = {
  label: 'Contact Info',
  name: 'contact',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false
    },
    {
      label: 'Hide Background',
      name: 'hideBackground',
      widget: 'boolean',
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
      label: 'Curve background Color',
      name: 'curveColor',
      widget: 'palette',
      default: 'backgroundPrimary',
      required: false
    }
  ]
};

export default contactWidget;
