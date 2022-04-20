export type Keyword = string;
export type Value = string;
export interface FilterPropstype {
  onClickSearch?: (keyword: Keyword) => void;
  onChangeSelect?: (value: Value) => void;
  onResetFilter?: () => void;
}