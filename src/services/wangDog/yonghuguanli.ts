// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max'

/** doDelete 用户删除接口 DELETE /user/doDelete */
export async function doDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DeleteParams
  ,
  options?: { [key: string]: any }
) {
  return request<API.ApiResponseString>('/gas/user/doDelete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户登录接口 POST /user/doLogin */
export async function doLogin(body: API.LoginVo,
  options?: { [key: string]: any }
) {
  const formData = new FormData();
  // 假设 body 包含用户名和密码
  formData.append('accountName', body.accountName);
  formData.append('password', body.password);

  return request<API.ApiResponseMapStringString>('/gas/user/doLogin', {
    method: 'POST',
    headers: {
      // 'Content-Type' 头部不需要设置，FormData会自动设置正确的Content-Type
    },
    data: formData,
    ...(options || {}),
  });
}

/** doLogout 用户退出登录接口 POST /user/doLogout */
export async function doLogout(
  options?: { [key: string]: any }
) {
  return request<API.ApiResponseString>('/gas/user/doLogout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** doRevise 用户修改接口 PUT /user/doRevise */
export async function revise(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ReviseParams
  , body: API.UserVo,
  options?: { [key: string]: any }
) {
  return request<API.ApiResponseString>('/gas/user/doRevise', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册接口 POST /user/doSign */
export async function doSign(body: API.SignVo,
  options?: { [key: string]: any }
) {
  return request<API.ApiResponseString>('/gas/user/doSign', {
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
  options?: { [key: string]: any }
) {
  return request<API.ApiResponseUserVo>('/gas/user/getUser', {
    method: 'GET',
    ...(options || {}),
  });
}

