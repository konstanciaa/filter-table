import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanzComponent } from './finanz/finanz.component';
import { FinanzService } from './finanz.service';

@NgModule({
  declarations: [
    AppComponent,
    FinanzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FinanzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
