// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /userLabel */
export async function getUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponseListUser>('/userLabel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /userLabel */
export async function createUserLabel(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createUserLabelParams,
  options?: { [key: string]: any },
) {
  return request<boolean>('/userLabel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
