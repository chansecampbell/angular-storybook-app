import { Component, OnInit, Input } from '@angular/core';
import { css } from 'emotion';
import colours from '../../tokens/colours';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() placeholder = "Search..";


  inputStyle = css`
    input {
      background: ${colours.disabled02};
      border-bottom: 4px solid ${colours.interactive01};
      width: 100%;
      display: inline-block;
    }
  `
}
