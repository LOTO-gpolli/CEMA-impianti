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
}

export const Medium = Template.bind({});
Medium.args = {
  placeholder: 'This is a placeholder',
  type: 'input',
}

export const Large = Template.bind({});
Large.args = {
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
