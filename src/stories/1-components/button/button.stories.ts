import { Button } from '@storybook/angular/demo';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import docs from './documentation.md';

export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    notes: 'some documentation here',
  },
};

export const Primary = () => ({
  template: `<button type="button" disabled={{disabled}} style="height:48px;width:178px;background:red;color: white;text-align: left;font-size: 16px;border: none;">{{text}}</button>`,
  props: {
    text: text('text', 'Primary Button'),
    disabled: boolean('disabled', false)
  },
});

Primary.story = {
  parameters: {
    notes: docs,
    abstract: {
      url: "https://share.goabstract.com/c3d9c8d2-9f4d-4f05-b765-fae184a55240",
    }
  },
};