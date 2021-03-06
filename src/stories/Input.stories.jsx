import React from 'react';
import { Input } from '../components/Input';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
    label: 'Input',
};

