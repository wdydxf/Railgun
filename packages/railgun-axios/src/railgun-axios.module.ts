import { NgModule } from '@angular/core';
import { AxiosClient } from './http/client';
import { AXIOS_INTERCEPTOR, NoopInterceptor } from './http/interceptor';


@NgModule({
  providers: [
    AxiosClient,
    { provide: AXIOS_INTERCEPTOR, useClass: NoopInterceptor }
  ]
})
export class RailgunAxiosModule {
}
