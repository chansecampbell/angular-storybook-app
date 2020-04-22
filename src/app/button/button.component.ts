import { Component, OnInit } from '@angular/core';
import { Button } from "carbon-components-angular";

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent extends Button implements OnInit {
  constructor() { 
    super()
  }

  ngOnInit(): void {
  }
}


