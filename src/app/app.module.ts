import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomButtonModule } from './components/button/button.module';
import { CustomSearchModule } from './components/search/search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomButtonModule,
    CustomSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
