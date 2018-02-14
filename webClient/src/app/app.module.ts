import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { Router, routingComponets } from './app.router';

// main frame
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// share and common
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './share/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './share/dynamic-form-field/dynamic-form-field.component';
import { WebService } from './service/web.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent,
    routingComponets
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Router
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {}
