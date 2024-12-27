import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component'; // Keep Header component here

@NgModule({
  declarations: [AppComponent, Header],
  imports: [BrowserModule, AppRoutingModule],  // Import routing module
  bootstrap: [AppComponent]
})
export class AppModule {}
