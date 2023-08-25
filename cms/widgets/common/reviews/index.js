const reviewsWidget = {
  label: 'Reviews',
  name: 'reviews',
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
      label: 'Snippet code',
      name: 'snippet',
      widget: 'text',
      required: false
    },
    {
      label: 'CTA button text',
      name: 'CTAText',
      widget: 'string',
      required: false
    },
    {
      label: 'Link',
      name: 'link',
      widget: 'string',
      required: false
    }
  ]
};

export default reviewsWidget;
