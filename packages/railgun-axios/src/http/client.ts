import { Inject, Injectable, Optional } from '@angular/core';
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AXIOS_CONFIG, AxiosConfig } from './config';
import { AXIOS_INTERCEPTOR, AxiosInterceptor } from './interceptor';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

/**
 * Axios实例和方法包装
 * */
@Injectable()
export class AxiosClient {
  private instance: AxiosInstance;

  constructor(
    @Inject(AXIOS_CONFIG) @Optional() axiosConfig: AxiosConfig,
    @Inject(AXIOS_INTERCEPTOR) axiosInterceptor: AxiosInterceptor
  ) {
    this.instance = Axios.create(axiosConfig);
    this.instance.interceptors.request.use(
      config => axiosInterceptor.requestHandle(config),
      error => axiosInterceptor.requestErrorHandle(error)
    );
    this.instance.interceptors.response.use(
      response => axiosInterceptor.responseHandle(response),
      error => axiosInterceptor.responseErrorHandle(error)
    );
  }

  // 包装方法并返回rxjs流
  getUri(config?: AxiosRequestConfig): string {
    return this.instance.getUri(config);
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.request(config));
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.get(url, config));
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.delete(url, config));
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.head(url, config));
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.options(url, config));
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.post(url, data, config));
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.put(url, data, config));
  }

  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Observable<R> {
    return fromPromise(this.instance.patch(url, data, config));
  }
}
