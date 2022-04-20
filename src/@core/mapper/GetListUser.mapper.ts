import { User } from "../entity/User.entity";
import { GetListUserResponse } from "../interface/GetListUser.interface";

export function getListUserMapper(response: GetListUserResponse): User[] {
  const result: User[] = response.data.results.map(data => {
    const user: User = {
      username: data.login.username,
      name: `${data.name.title} ${data.name.first} ${data.name.last}`,
      email: data.email,
      gender: data.gender,
      registered_date: data.registered.date
    }
    return user;
  });

  return result;
} 