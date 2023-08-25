const bulletTypeSelect = {
  label: 'Bullet type',
  name: 'bulletType',
  widget: 'select',
  default: 'checkmark-thin',
  required: false,
  options: [
    {
      label: 'Checkmark',
      value: 'checkmark-thin'
    },
    {
      label: 'Dash',
      value: 'dash'
    }
  ]
};

export default bulletTypeSelect;
