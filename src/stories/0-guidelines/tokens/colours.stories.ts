// import { Button } from '@storybook/angular/demo';
import { Button } from 'carbon-components-angular';
import "carbon-components/css/carbon-components.min.css";
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import colours from '../../../app/tokens/colours';
import docs from './documentation.md';

export default {
  title: 'Guidelines|Tokens',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    notes: docs,
  },
};

export const Colours = () => ({
    template: `
      <div class="colour__wrapper">
        <div class="colour__inner-wrapper">
          <div class="colour" style="background:${colours.interactive01};color:${colours.text04};">
            <div>interactive01</div>
            <div>${colours.interactive01}</div>
          </div>
          <div class="colour" style="background:${colours.interactive02};color:${colours.text04};">
            <div>interactive02</div>
            <div>${colours.interactive02}</div>
          </div>
          <div class="colour" style="background:${colours.hoverPrimary};color:${colours.text04};">
            <div>hoverPrimary</div>
            <div>${colours.hoverPrimary}</div>
          </div>
          <div class="colour" style="background:${colours.hoverSecondary};color:${colours.text04};">
            <div>hoverSecondary</div>
            <div>${colours.hoverSecondary}</div>
          </div>
          <div class="colour" style="background:${colours.activePrimary};color:${colours.text04};">
            <div>activePrimary</div>
            <div>${colours.activePrimary}</div>
          </div>
          <div class="colour" style="background:${colours.activeSecondary};color:${colours.text04};">
            <div>activeSecondary</div>
            <div>${colours.activeSecondary}</div>
          </div>
          <div class="colour" style="background:${colours.disabled02};color:${colours.text04};">
            <div>disabled02</div>
            <div>${colours.disabled02}</div>
          </div>
          <div class="colour" style="background:${colours.disabled03};color:${colours.text04};">
            <div>disabled03</div>
            <div>${colours.disabled03}</div>
          </div>
          <div class="colour" style="background:${colours.text04};color:${colours.interactive02}; border:1px solid ${colours.interactive02}">
            <div>text04</div>
            <div>${colours.text04}</div>
          </div>
          <div class="colour" style="background:${colours.focus};color:${colours.text04};">
            <div>focus</div>
            <div>${colours.focus}</div>
          </div>
        </div>
      </div>
      `,
    styles: [`
			.colour__wrapper {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .colour {
        height: 100px;
        width: 100px;
        display: inline-flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        font-size: 12px;
      }
		`],
});

Colours.story = {
  parameters: {
    abstract: {
      url: "https://share.goabstract.com/0e32dacb-7b59-4dc1-b29c-3bb87b2db235",
    }
  },
};