import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';
import colours from '../../tokens/colours';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})

export class ButtonComponent implements OnInit {
  ngOnInit(): void {
  }

  ngOnChanges()	{
    // This needs to be called when the values update in order to have the correct styles.
    this.buttonStyle();
  }
  
  @Input() ibmButton = "primary";
  @Input() text = "Click Me";
  @Input() disabled = false;
  @Output() handleClick = new EventEmitter<string>();

  buttonStyle() {
    return css`
      background: ${this.ibmButton == 'secondary' ? colours.interactive02 : colours.interactive01};
      color: ${colours.text04};

      &:hover {
        background: ${this.ibmButton == 'secondary' ? colours.hoverSecondary : colours.hoverPrimary};
      }

      &:disabled {
        background: ${colours.disabled02};
        color: ${colours.disabled03};
      }

      &:focus {
        outline: 2px solid ${colours.focus}
      }
    `
  }
}


