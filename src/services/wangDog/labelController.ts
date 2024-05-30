// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /label */
export async function getLabels(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLabelsParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponseIPageLabel>('/label', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
