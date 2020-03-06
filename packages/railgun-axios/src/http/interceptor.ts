import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { InjectionToken } from '@angular/core';

/**
 * Axios拦截器接口
 */
export interface AxiosInterceptor {
  requestHandle(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig>;

  requestErrorHandle(error: AxiosError): AxiosError | Promise<AxiosError>;

  responseHandle(response: AxiosResponse): AxiosResponse | Promise<AxiosResponse>;

  responseErrorHandle(error: AxiosError): AxiosError | Promise<AxiosError>;
}


/**
 * 拦截器提供商token
 * */
export const AXIOS_INTERCEPTOR = new InjectionToken<AxiosInterceptor>('AXIOS_INTERCEPTOR');


/**
 * 默认空拦截器
 * */
export class NoopInterceptor implements AxiosInterceptor {
  requestHandle(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> {
    return config;
  }

  requestErrorHandle(error: AxiosError<any>): AxiosError<any> | Promise<AxiosError> {
    return Promise.reject(error);
  }

  responseHandle(response: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse> {
    return response;
  }

  responseErrorHandle(error: AxiosError<any>): AxiosError<any> | Promise<AxiosError> {
    return Promise.reject(error);
  }

}
