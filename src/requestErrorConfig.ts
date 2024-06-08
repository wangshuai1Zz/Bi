import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message as msg } from 'antd';

// 与后端约定的响应数据格式
// 与后端约定的响应数据格式
interface ResponseStructure {
  data: any; // 请求返回的数据
  code?: number; // 错误码
  message?: string; // 错误信息
}

export const errorConfig: RequestConfig = {
  errorConfig: {
    // 错误抛出器
    errorThrower: (res) => {
      const { code, message } = res as unknown as ResponseStructure;
      // 如果请求未成功且错误码不为2000，则抛出错误
      if (code !== 2000) {
        const error: any = new Error(message);
        error.name = 'BizError';
        error.info = { code, message };
        throw error;
      }
    },
    // 错误处理器
    errorHandler: (error: any, opts: any) => {
      // 如果设置了跳过错误处理器，则直接抛出错误
      if (opts?.skipErrorHandler) throw error;
      // 如果错误类型为'BizError'，则显示错误信息
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { message, code } = errorInfo;
          msg.error(`错误 ${code}: ${message}`);
        }
      } else if (error.response) {
        // 如果有响应，则显示响应状态
        msg.error(`响应状态:${error.response.status}`);
      } else if (error.request) {
        // 如果没有响应，则提示重试
        msg.error('无响应！请重试。');
      } else {
        // 如果请求错误，则提示重试
        msg.error('请求错误，请重试。');
      }
    },
  },
  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // 从localStorage中获取satoken
      const satoken = localStorage.getItem('satoken');
      // 如果存在satoken，则将其添加到请求头中
      if (satoken) {
        config.headers = {
          ...config.headers,
          'satoken': `${satoken}`,
        };
      }
      return config;
    },
  ],
  // 响应拦截器
  responseInterceptors: [
    (response) => {
      const { data } = response as unknown as ResponseStructure;
      console.log(data);
      // 如果请求未成功且错误码不为2000，则显示错误信息
      if (data?.code !== 2000) {
        const error: any = new Error(data?.message);
        error.name = 'BizError';
        error.info = { code: data?.code, message: data?.message };
        throw error;
      }
      return response;
    },
  ],
};
