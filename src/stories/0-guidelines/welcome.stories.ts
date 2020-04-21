import { Welcome } from '@storybook/angular/demo';

export default {
  title: 'Guidelines|Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});

ToStorybook.story = {
  name: 'to Storybook',
};
