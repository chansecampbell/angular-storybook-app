import { Button } from '@storybook/angular/demo';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
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
    notes: 'Primary Button',
    abstract: {
      url: "https://share.goabstract.com/9fabf10b-2eae-4a1d-adb1-6ef05e398130",
    }
  },
};
