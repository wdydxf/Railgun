import { AxiosRequestConfig } from 'axios';
import { InjectionToken } from '@angular/core';

/**
 * Axios配置接口
 */
export { AxiosRequestConfig as AxiosConfig };

/**
 * 配置提供商token
 * */
export const AXIOS_CONFIG = new InjectionToken<AxiosRequestConfig>('AXIOS_CONFIG');

