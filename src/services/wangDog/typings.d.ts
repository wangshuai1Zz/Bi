declare namespace API {
  type ApiResponseIPageLabel = {
    code?: number;
    message?: string;
    data?: IPageLabel;
  };

  type ApiResponseListUser = {
    code?: number;
    message?: string;
    data?: User[];
  };

  type ApiResponseMapStringString = {
    code?: number;
    message?: string;
    data?: Record<string, any>;
  };

  type ApiResponseString = {
    code?: number;
    message?: string;
    data?: string;
  };

  type ApiResponseUserVo = {
    code?: number;
    message?: string;
    data?: UserVo;
  };

  type createUserLabelParams = {
    userid: number;
    labels: string[];
  };

  type DeleteParams = {
    userId: number;
  };

  type getLabelsParams = {
    page: number;
    size: number;
  };

  type getUserParams = {
    userId: number;
  };

  type getUsersParams = {
    labels: string[];
    isFuzzy?: boolean;
  };

  type IPageLabel = {
    size?: number;
    current?: number;
    records?: Label[];
    total?: number;
    pages?: number;
  };

  type Label = {
    labelId?: number;
    labelName?: string;
    parentId?: number;
    isParent?: number;
    createTime?: string;
    updateTime?: string;
    createUser?: string;
    updateUser?: string;
    deleted?: number;
  };

  type LoginVo = {
    accountName?: string;
    password?: string;
  };

  type LogoutParams = {
    userId: number;
  };

  type ReviseParams = {
    userId: number;
  };

  type SignVo = {
    username?: string;
    accountName?: string;
    password?: string;
    checkPassword?: string;
    avatarUrl?: string;
    userPhone?: string;
    userEmail?: string;
  };

  type User = {
    userId?: number;
    username?: string;
    accountName?: string;
    password?: string;
    avatarUrl?: string;
    userPhone?: string;
    userEmail?: string;
    userStatus?: number;
    userRole?: number;
    createTime?: string;
    updateTime?: string;
    createUser?: string;
    updateUser?: string;
    deleted?: number;
  };

  type UserVo = {
    username?: string;
    avatarUrl?: string;
    userPhone?: string;
    userEmail?: string;
    userRole?: number;
  };
}
