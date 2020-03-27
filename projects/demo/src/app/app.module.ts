import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Angular i18n
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

registerLocaleData(zh);

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { RgLayoutModule } from '@ndct/railgun';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RgLayoutModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
