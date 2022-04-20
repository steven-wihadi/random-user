import { User } from "../entity/User.entity";
import { GetListUserDTO } from "../interface/GetListUser.interface";

export default abstract class SamplePageUsecase {
  abstract getListUser(params: GetListUserDTO): Promise<User[]>;
}