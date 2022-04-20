import API from "../../service/API.service";
import { GetListUserDTO, GetListUserResponse } from "../interface/GetListUser.interface";

export default function GetListUserInteractor(params: GetListUserDTO): Promise<GetListUserResponse> {
  const URL = 'https://randomuser.me/api/';
  return API.get(URL, {params});
}