import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ButtonModule } from "carbon-components-angular";

import { ButtonComponent } from "./button.component";

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule, ButtonModule],
  providers: [],
  bootstrap: [ButtonComponent]
})
export class CustomButtonModule {}
