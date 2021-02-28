import React from 'react';
import CustomButton from './CustomButton';

export default {
  component: CustomButton,
  title: 'CustomButton',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args:any) => <CustomButton {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  size: 'md',
  variantColor: 'green',
};


