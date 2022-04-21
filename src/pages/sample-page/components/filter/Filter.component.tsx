import { useState } from 'react';
import './Filter.component.scss';
import {
  FilterPropstype
} from './Filter.propstype';

let timeId: any;

export default function Filter(props: FilterPropstype) {

  const genderOptions = [
    { label: 'All', value: '' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];
  const [keyword, setKeyword] = useState('');
  const [gender, setGender] = useState('');

  const onChangeInput = (e: any) => {
    setKeyword(e.target.value);

    clearTimeout(timeId);
    timeId = setTimeout(() => {
      if (props?.onClickSearch) {
        props.onClickSearch(e.target.value);
      }
    }, 3000);
  }

  const onKeydown = (e: any) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  }

  const onClickSearch = () => {
    if (props?.onClickSearch) {
      clearTimeout(timeId);
      props.onClickSearch(keyword);
    }
  }

  const onChangeSelect = (e: any) => {
    setGender(e.target.value);
    if (props?.onChangeSelect) {
      props.onChangeSelect(e.target.value);
    }
  }

  const onClickResetFilter = () => {
    setGender('');
    setKeyword('');
    if (props?.onResetFilter) {
      props.onResetFilter();
    }
  }

  return (
    <div className="filter-container">
      <div className="filter-section">
        <label>Search</label>
        <div className="flex-wrapper">
          <input
            type='text'
            placeholder="Search..."
            onChange={(e) => onChangeInput(e)} value={keyword}
            onKeyDown={(e) => onKeydown(e)}
          />
          <button className='search-button' onClick={onClickSearch}>Search</button>
        </div>
      </div>
      <div className="filter-section">
        <label>Gender</label>
        <select onChange={(e) => onChangeSelect(e)} value={gender}>
          {
            genderOptions.map(option => 
              <option key={option.value} value={option.value}>{option.label}</option>
            )
          }
        </select>
      </div>
      <button className='reset-button' onClick={onClickResetFilter}>Reset Filter</button>
    </div>
  );
}