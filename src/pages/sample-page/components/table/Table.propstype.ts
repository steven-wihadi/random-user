export interface DataSource {
  username: string;
  name: string;
  email: string;
  gender: string;
  registered_date: string;
}
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
  dataSource: DataSource[];
  onSort?: (columnName: ColumnName, order: Order) => void;
  onInfiniteScroll?: () => void;
}