// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max'

/** doDelete 用户删除接口 DELETE /user/doDelete */
export async function doDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteParams
    ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResponseString>('/user/doDelete', {
  method: 'DELETE',
    params: {
        ...params,},
    ...(options || {}),
  });
}

/** 用户登录接口 POST /user/doLogin */
export async function doLogin(body: API.LoginVo,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResponseMapStringString>('/user/doLogin', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** doLogout 用户退出登录接口 POST /user/doLogout */
export async function logout(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LogoutParams
    ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResponseString>('/user/doLogout', {
  method: 'POST',
    params: {
        ...params,},
    ...(options || {}),
  });
}

/** doRevise 用户修改接口 PUT /user/doRevise */
export async function revise(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ReviseParams
    ,body: API.UserVo,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResponseString>('/user/doRevise', {
  method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
        ...params,},
    data: body,
    ...(options || {}),
  });
}

/** 用户注册接口 POST /user/doSign */
export async function doSign(body: API.SignVo,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResponseString>('/user/doSign', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户信息接口 GET /user/getUser */
export async function getUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserParams
    ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResponseUserVo>('/user/getUser', {
  method: 'GET',
    params: {
        ...params,},
    ...(options || {}),
  });
}

