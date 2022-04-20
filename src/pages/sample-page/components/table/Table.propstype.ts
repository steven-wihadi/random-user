import { User } from "../../../../@core/entity/User.entity";

export type ColumnName =
  'username'
  | 'name'
  | 'email'
  | 'gender'
  | 'registered_date'
  | '';
export type Order = 
  'ascend'
  | 'descend'
  | '';
export interface TablePropstype {
  dataSource: User[];
  onSort?: (columnName: ColumnName, order: Order) => void;
  onInfiniteScroll?: () => void;
}