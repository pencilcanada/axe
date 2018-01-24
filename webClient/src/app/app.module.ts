import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { Router, routingComponets } from 'app/app.router';

// main frame
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// share and common
import { DynamicFormComponent } from './share/dynamic-form/dynamic-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DynamicFormComponent,
    routingComponets
  ],
  imports: [
    BrowserModule,
    Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
