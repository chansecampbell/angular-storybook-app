import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ButtonComponent } from "./button.component";

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ButtonComponent]
})
export class ButtonModule {}

export { ButtonComponent };