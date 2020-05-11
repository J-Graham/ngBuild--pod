import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ScullyLibModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
