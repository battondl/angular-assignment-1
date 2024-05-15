import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuccessAlertComponent } from './alerts/success/success-alert.component';
import { WarningComponent } from './alerts/warning/warning.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, SuccessAlertComponent, WarningComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
