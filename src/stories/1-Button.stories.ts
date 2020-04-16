import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/angular/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => ({
  component: Button,
  props: {
    text: 'Primary Button',
  },
});

Primary.story = {
  parameters: {
    notes: 'Primary Button',
    abstract: {
      url: "https://share.goabstract.com/b914147a-cdee-44a4-9b66-386e1b2fc2ca"
    }
  },
};

export const PrimaryDisabled = () => ({
  template: `<button type="button" disabled style="height:48px;width:178px;background:lightgray;color: white;text-align: left;font-size: 16px;border: none;">Primary Button</button>`,
  props: {
    text: 'Primary Button',
  },
});

PrimaryDisabled.story = {
  parameters: {
    notes: 'Hello',
    abstract: {
      url: "https://share.goabstract.com/7bbe2fcf-bb12-491b-a406-8f2f9ab3123c"
    }
  },
};


// export const Emoji = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//   },
// });

// Emoji.story = {
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const WithSomeEmojiAndAction = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//     onClick: action('This was clicked OMG'),
//   },
// });

// WithSomeEmojiAndAction.story = {
//   name: 'with some emoji and action',
//   parameters: { notes: 'My notes on a button with emojis' },
// };

// export const ButtonWithLinkToAnotherStory = () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// });

// ButtonWithLinkToAnotherStory.story = {
//   name: 'button with link to another story',
// };
