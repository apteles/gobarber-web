import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './index';

export default {
  title: 'Button',
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = args => <Button {...args} />;

Default.args = {
  children: 'Logar',
};

export const Disabled: Story<ButtonProps> = args => <Button {...args} />;

Disabled.args = {
  children: 'Confirmar mudanças',
  disabled: true,
};
