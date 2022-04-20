import { User } from "../../@core/entity/User.entity";
import GetListUserInteractor from "../../@core/interactor/GetListUser.interactor";
import { GetListUserDTO } from "../../@core/interface/GetListUser.interface";
import { getListUserMapper } from "../../@core/mapper/GetListUser.mapper";
import SamplePageUsecase from "../../@core/usecase/SamplePage.usecase";

export default class SamplePageImpl extends SamplePageUsecase {
  getListUser(params: GetListUserDTO): Promise<User[]> {
    return GetListUserInteractor(params).then((res: any) => 
      getListUserMapper(res)
    );
  }
}