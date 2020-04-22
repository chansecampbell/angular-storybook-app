import { Component, OnInit } from '@angular/core';
import { Button } from "carbon-components-angular";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent extends Button implements OnInit {
  constructor() { 
    super()
  }

  ngOnInit(): void {
  }
}


