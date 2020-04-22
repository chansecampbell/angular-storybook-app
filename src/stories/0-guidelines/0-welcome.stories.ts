import { Welcome } from '@storybook/angular/demo';
import docs from './documentation.md';

export default {
  title: 'Guidelines|Welcome',
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});

ToStorybook.story = {
  name: 'to Storybook',
};
