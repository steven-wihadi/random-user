import './SamplePage.scss';
import Breadcrumb from './components/breadcrumb/Breadcrumb.component';
import Filter from './components/filter/Filter.component';
import Table from './components/table/Table.component';
import {
  DataSource,
  Order,
  ColumnName
} from './components/table/Table.propstype';

export default function SamplePage() {
  const mocData: DataSource[] = [
    {
      username: 'asd 1',
      name: 'asd 1',
      email: 'asd 1',
      gender: 'asd 1',
      registered_date: 'asd 1'
    }
  ];

  const onClickSearch = (keyword: string) => {
    console.log('keyword: ', keyword);
  }

  const  onChangeSelect = (value: string) => {
    console.log('value: ', value);
  }

  const onClickResetFilter = () => {
    console.log('==onClickResetFilter');
  }

  const onSort = (columnName: ColumnName, order: Order) => {
    console.log('===columnName: ', columnName);
    console.log('===order: ', order);
  }

  const onInfiniteScroll = () => {
    console.log('==viola');
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
        dataSource={mocData}
        onSort={onSort}
        onInfiniteScroll={onInfiniteScroll}
      />
    </div>
  );
}