// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 提取Excel转换为字符串 POST /File/convert */
export async function excelToString(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ExcelToStringParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponseString>('/gas/File/convert', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: params,
    ...(options || {}),
  });
}
