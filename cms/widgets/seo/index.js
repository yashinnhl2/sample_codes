const seoWidget = {
  label: 'SEO',
  name: 'seo',
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
      label: 'Description',
      name: 'description',
      widget: 'text',
      required: false
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'string',
      required: false
    },
    {
      label: 'Block Robots',
      name: 'blockRobots',
      widget: 'boolean',
      required: false,
      default: false
    }
  ]
};

export default seoWidget;
