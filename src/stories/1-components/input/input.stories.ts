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
          <input class="input__search" placeholder={{placeholder}} />
        </div>
        `,
    props: {
      placeholder: text('placeholder', 'What are you looking for today?'),
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
        border: none;
        font-size: 14px;
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
