// import { Button } from '@storybook/angular/demo';
import { Button } from 'carbon-components-angular';
import "carbon-components/css/carbon-components.min.css";
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import colours from '../../../app/tokens/colours';
import docs from './documentation.md';

export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs, withA11y],
  parameters: {
    notes: docs,
  },
};

export const Primary = () => ({
    template: `
        <div class="button__wrapper">
            <button type="button" [disabled]="disabled" class="button__primary" (handleClick)="handleClick($event)">
                {{text}}
                <span class="button__icon"></span>
            </button>
        </div>
        `,
    props: {
      text: text('text', 'Primary Button'),
      disabled: boolean('disabled', false),
      handleClick: action('Clicked')
    },
    styles: [`
			.button__wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .button__primary {
        height: 48px;
        width: auto;
        background: ${colours.interactive01};
        color: ${colours.text04};
        text-align: left;
        font-size: 14px;
        border: none;
        padding: 16px;
        cursor: pointer;
      }

      .button__primary:hover {
        background: ${colours.hoverPrimary};
      }

      .button__primary:disabled {
        background: ${colours.disabled02};
        color: ${colours.disabled03};
        cursor: not-allowed;
      }

      .button__primary:focus {
        outline: 2px solid ${colours.focus}
      }

      .button__icon {
        display: inline-block;
        width: 48px;
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
            <button type="button" [disabled]="disabled" class="button__secondary">
                {{text}}
                <span class="button__icon"></span>
            </button>
        </div>
        `,
    props: {
    text: text('text', 'Secondary Button'),
    disabled: boolean('disabled', false)
    },
    styles: [`
			.button__wrapper {
                height: 100vh;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .button__secondary {
                height: 48px;
                width: auto;
                background: ${colours.interactive02};
                color: ${colours.text04};
                text-align: left;
                font-size: 14px;
                border: none;
                padding: 16px;
                cursor: pointer;
            }

            .button__secondary:hover {
              background: ${colours.hoverSecondary};
            }

            .button__secondary:disabled {
              background: ${colours.disabled02};
              color: ${colours.disabled03};
              cursor: not-allowed;
            }

            .button__secondary:focus {
              outline: 2px solid ${colours.focus}
            }

            .button__icon {
                display: inline-block;
                width: 48px;
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
