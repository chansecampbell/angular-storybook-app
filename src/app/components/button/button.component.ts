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
  
  @Input() buttonType = "primary" || "secondary";
  @Input() text = "Click Me";
  @Input() disabled = false;
  @Output() handleClick = new EventEmitter<string>();

  // @Input() set buttonType(value: "primary" | "secondary") {
	// 	this.buttonType = value;
	// }

	// get buttonType(): "primary" | "secondary" {
	// 	return this.buttonType;
	// }
  
  // protected _buttonType: "primary"

  buttonStyle = css`
    height: 48px;
    width: auto;
    background: ${this.buttonType == 'secondary' ? colours.interactive02 : colours.interactive01};
    color: ${colours.text04};
    text-align: left;
    font-size: 14px;
    border: none;
    padding: 16px 64px 16px 16px;
    cursor: pointer;

    &:hover {
      background: ${this.buttonType == 'secondary' ? colours.hoverSecondary : colours.hoverPrimary};
    }

    &:disabled {
      background: ${colours.disabled02};
      color: ${colours.disabled03};
      cursor: not-allowed;
    }

    &:focus {
      outline: 2px solid ${colours.focus}
    }
  `
}


