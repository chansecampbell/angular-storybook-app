import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SearchModule } from 'carbon-components-angular';

import { SearchComponent } from "./search.component";

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [BrowserModule, SearchModule],
  providers: [],
  bootstrap: [SearchComponent]
})
export class CustomSearchModule {}

export { SearchComponent };