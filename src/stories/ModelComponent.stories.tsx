import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ModalButtonComponent from '../components/ModalButtonComponent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ModalButtonComponent',
  component: ModalButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ModalButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalButtonComponent> = (args) => <ModalButtonComponent {...args} />;

export const Demo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Demo.args = {
  buttonLabel: 'Abrir modal',
  items: ['opcion 1', 'opcion 2'],
  title: 'Titulo modal'
};
