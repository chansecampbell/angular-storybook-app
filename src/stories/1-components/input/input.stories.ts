// import { Button } from '@storybook/angular/demo';
import { Button } from 'carbon-components-angular';
import "carbon-components/css/carbon-components.min.css";
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import docs from './documentation.md';

export default {
  title: 'Components|Input',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    notes: docs,
  },
};

export const SearchInput = () => ({
    template: `
        <div class="input__wrapper">
          <div class="input__search">
            <span>{{text}}</span>
          </div>
        </div>
        `,
    props: {
      text: text('text', 'Search for a bank')
    },
    styles: [`
			.input__wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .input__search {
        height: 48px;
        width: 512px;
        background: #f4f4f4;
        padding: 16px;
      }

		`],
});