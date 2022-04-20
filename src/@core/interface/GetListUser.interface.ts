import { Gender } from "../entity/User.entity";

export interface GetListUserDTO {
  page: number;
  results: number;
  gender?: Gender;
  keyword?: string;
  sortBy?: string;
  sortOrder?: 'ascend' | 'descend';
}

export interface UserResponse {
  login: {
    username: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  gender: Gender;
  registered: {
    date: string;
  }
};
export interface GetListUserResponse {
  status: number;
  data: {
    info: any;
    results: UserResponse[];
  }
}