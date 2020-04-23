// import { Button } from '@storybook/angular/demo';
import { moduleMetadata } from "@storybook/angular";
import { boolean, text, withKnobs, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { ButtonModule } from '../../../app/components/button/button.module';
import docs from './documentation.md';

export default {
  title: 'Components|Button',
  component: ButtonModule,
  decorators: [withKnobs, withA11y, moduleMetadata({
		imports: [ButtonModule]
	})],
  parameters: {
    notes: docs,
  },
};

export const Primary = () => ({
    template: `
      <div class="button__wrapper">
        <app-button [text]="text" [disabled]="disabled" (handleClick)="handleClick($event)"></app-button>
      </div>
    `,
    props: {
      text: text('text', 'Primary Button'),
      disabled: boolean('disabled', false),
      handleClick: action('Clicked!')
    },
    styles: [`
			.button__wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
		`],
});

Primary.story = {
  parameters: {
    abstract: {
      url: "https://share.goabstract.com/99f9bd2e-73c6-4acb-a8f7-871d7a011f70",
    }
  },
};

export const Secondary = () => ({
  template: `
    <div class="button__wrapper">
      <app-button [text]="text" [disabled]="disabled" [buttonType]="buttonType" (handleClick)="handleClick($event)"></app-button>
    </div>
  `,
  props: {
    text: text('text', 'Secondary Button'),
    disabled: boolean('disabled', false),
    handleClick: action('Clicked!'),
    buttonType: select("button type", ["primary", "secondary"], "secondary")
  },
  styles: [`
    .button__wrapper {
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `],
});

Secondary.story = {
  parameters: {
    abstract: {
      url: "https://share.goabstract.com/d590c662-b151-4902-a605-d1ae8f4a1049",
    }
  },
};
