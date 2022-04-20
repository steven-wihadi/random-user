export type Gender = 'male' | 'female';
export interface User {
  username: string;
  name: string;
  email: string;
  gender: Gender;
  registered_date: string;
}