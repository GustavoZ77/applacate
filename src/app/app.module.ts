import { NgModule }            from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { Auth } from './services/security/auth.service';
import { AppComponent }        from './app.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    Auth
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
