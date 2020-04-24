import { moduleMetadata } from "@storybook/angular";
import "carbon-components/css/carbon-components.min.css";
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { CustomSearchModule } from '../../../app/components/search/search.module';
import docs from './documentation.md';

export default {
  title: 'Components|Search',
  component: CustomSearchModule,
  decorators: [withKnobs, withA11y, moduleMetadata({
    imports: [CustomSearchModule]
  })],
  parameters: {
    notes: docs,
  },
};

export const SearchInput = () => ({
    template: `
        <div class="input__wrapper">
          <app-search [placeholder]="placeholder"></app-search>
        </div>
        `,
    props: {
      placeholder: text('placeholder', 'Placeholder here..'),
    },
    styles: [`
			.input__wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
		`],
});

SearchInput.story = {
  parameters: {
    abstract: {
      url: "https://share.goabstract.com/876dc7ba-a032-4564-a683-6ba2d940c7e4",
    }
  },
};
