import React, { InputHTMLAttributes } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FiMail } from 'react-icons/fi';

import Input from '.';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
  name: string;
}

export default {
  title: 'Input',
  argTypes: {
    children: {
      type: 'string',
      icon: {
        type: '',
      },
    },
  },
} as Meta;

export const Text: Story<InputProps> = args => <Input {...args} />;

Text.args = {
  type: 'text',
};

export const withIcon: Story<InputProps> = args => <Input {...args} />;

withIcon.args = {
  type: 'password',
  icon: <FiMail />,
};
