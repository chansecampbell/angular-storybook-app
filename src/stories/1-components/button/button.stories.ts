// import { Button } from '@storybook/angular/demo';
import { Button } from 'carbon-components-angular';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import docs from './documentation.md';

export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    notes: docs,
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
    abstract: {
      url: "https://share.goabstract.com/99f9bd2e-73c6-4acb-a8f7-871d7a011f70",
    }
  },
};

export const Secondary = () => ({
  template: `<button type="button" disabled={{disabled}} style="height:48px;width:178px;background:orange;color: white;text-align: left;font-size: 16px;border: none;">{{text}}</button>`,
  props: {
    text: text('text', 'Secondary Button'),
    disabled: boolean('disabled', false)
  },
});

Secondary.story = {
  parameters: {
    abstract: {
      url: "https://share.goabstract.com/d590c662-b151-4902-a605-d1ae8f4a1049",
    }
  },
};