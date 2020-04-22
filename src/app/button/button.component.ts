import { Component, OnInit } from '@angular/core';
import { css } from 'emotion';
import colours from '../tokens/colours';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  ngOnInit(): void {
  }
  
  text = 'Submit';
  buttonStyle = css`
    height: 48px;
    width: auto;
    background: ${colours.interactive01};
    color: ${colours.text04};
    text-align: left;
    font-size: 14px;
    border: none;
    padding: 16px;
    cursor: pointer;

    &:hover {
      background: ${colours.hoverPrimary};
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


