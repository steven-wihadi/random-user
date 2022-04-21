import './SamplePage.scss';
import Breadcrumb from './components/breadcrumb/Breadcrumb.component';
import Filter from './components/filter/Filter.component';
import Table from './components/table/Table.component';
import {
  Order,
  ColumnName
} from './components/table/Table.propstype';
import { useEffect, useState } from 'react';
import SamplePageImpl from './SamplePage.impl';
import { GetListUserDTO } from '../../@core/interface/GetListUser.interface';

let getListUserParams: GetListUserDTO = {
  page: 1,
  results: 10,
};
let isFetch = false;

export default function SamplePage() {
  const usecase = new SamplePageImpl();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getListUserParams = {
      page: 1,
      results: 10,
    };
    getList();
  }, []);

  const getList = (procedure: string = '') => {
    if (!procedure) {
      getListUserParams.page = 1;
    }
    
    if (!isFetch) {
      isFetch = true;
      usecase.getListUser(getListUserParams)
        .then((res: any) => {
          isFetch = false;
          if (procedure === 'scroll') {
            const result = dataSource.concat(res);
            setDataSource([...result]);
          } else {
            const result = [].concat(res);
            setDataSource([...result]);
          }
        }, err => {
          isFetch = false;
          console.error('Got wrong: ', err);
        });
    }
  }

  const onClickSearch = (keyword: string) => {
    if (keyword) {
      getListUserParams.keyword = keyword;
    } else {
      delete getListUserParams.keyword;
    }
    getList();
  }

  const  onChangeSelect = (value: any) => {
    if (value) {
      getListUserParams.gender = value;
    } else {
      delete getListUserParams.gender;
    }
    getList();
  }

  const onClickResetFilter = () => {
    delete getListUserParams.keyword;
    delete getListUserParams.gender;
    getList();
  }

  const onSort = (columnName: ColumnName, order: Order) => {
    if (order) {
      getListUserParams.sortBy = columnName;
      getListUserParams.sortOrder = order;
    } else {
      delete getListUserParams.sortBy;
      delete  getListUserParams.sortOrder;
    }
    getList();
  }

  const onInfiniteScroll = () => {
    getListUserParams.page += 1;
    getList('scroll');
  }
  return (
    <div className="sample-page-container">
      <Breadcrumb/>

      <h1 className='page-title' style={{ color: '#525353' }}>Example With Search And Filter</h1>

      <Filter
        onClickSearch={onClickSearch}
        onChangeSelect={onChangeSelect}
        onResetFilter={onClickResetFilter}
      />
      <Table
        dataSource={dataSource}
        onSort={onSort}
        onInfiniteScroll={onInfiniteScroll}
      />
    </div>
  );
}