import InputGroup from './InputGroup';

export default {
  title: 'InputGroup',
  component: InputGroup,
};

const Template = (args) => <InputGroup {...args}/>;

export const Showcase = Template.bind({});
Showcase.args = {
  label: 'Label',
  placeholder: 'This is a placeholder',
  required: true,
  size: 'medium',
  theme: 'light',
  type: 'input',
  optionsList: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
}

export const Medium = Template.bind({});
Medium.args = {
  label: 'Label',
  placeholder: 'This is a placeholder',
  type: 'input',
}

export const Large = Template.bind({});
Large.args = {
  label: 'Label',
  placeholder: 'This is a placeholder',
  size: 'large',
  type: 'input',
}

export const Textarea = Template.bind({});
Textarea.args = {
  label: 'Label',
  placeholder: 'This is a placeholder',
  required: true,
  type: 'textarea',
}

export const Select = Template.bind({});
Select.args = {
  label: '',
  placeholder: 'This is a placeholder',
  required: true,
  type: 'select',
  optionsList: ['option 1', 'option 2', 'option 3', 'option 4', 'option 5']
}
