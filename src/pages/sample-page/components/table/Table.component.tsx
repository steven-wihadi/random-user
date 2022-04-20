import { useState } from 'react';
import './Table.component.scss';
import {
  TablePropstype,
  DataSource,
  ColumnName,
  Order
} from './Table.propstype';

export default function Table(props: TablePropstype) { 
  const tableHeader = [
    { label: 'Username', value: 'username' },
    { label: 'Name', value: 'name' },
    { label: 'Email', value: 'email' },
    { label: 'Gender', value: 'gender' },
    { label: 'Registered Date', value: 'registered_date' },
  ];
  const [order, setOrder] = useState('ascend');
  const [orderColumn, setOrderColumn] = useState('name');

  const Triangle = (props: any) => {
    const className = props.type + (props.active ? ' active' : '');
    return (
      <div className={className} />
    );
  }

  const onScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const scrollTopMax = e.target.scrollTopMax;

    if (scrollTop === scrollTopMax && props?.onInfiniteScroll) {
      props.onInfiniteScroll();
    }
  };

  const onClickColumnHeader = (columnName: ColumnName) => {
    let orderResult: Order = '';
    switch(order) {
      default:
        orderResult = 'ascend';
        break;
      case 'ascend':
        orderResult = 'descend';
        break;
      case 'descend':
        orderResult = '';
        break;
    }
    setOrder(orderResult);
    setOrderColumn(orderResult ? columnName : '');

    if (props?.onSort) {
      props.onSort(
        columnName,
        orderResult
      );
    }
  }

  return (
    <div className="table-wrapper" onScroll={(e) => onScroll(e)}>
      <table>
        <thead>
          <tr>
            {
              tableHeader.map((header: any) => 
                <th
                  className={orderColumn === header.value ? 'active' : ''}
                  key={header.value}
                  onClick={() => onClickColumnHeader(header.value)}
                >
                  <span className="flex-wrapper">
                    <h2 className="header-table">
                      {header.label}
                    </h2>
                    <div className="sort-wrapper">
                      <Triangle
                        type={'triangle-up'}
                        active={orderColumn === header.value && order === 'ascend'}
                      />
                      <Triangle
                        type={'triangle-down'}
                        active={orderColumn === header.value && order === 'descend'}
                      />
                    </div>
                  </span>
                </th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            props?.dataSource.map((data: DataSource, index: number) => 
              <tr key={data.username + index}>
                <td className={orderColumn === 'username' ? 'active' : ''}>{data.username}</td>
                <td className={orderColumn === 'name' ? 'active' : ''}>{data.name}</td>
                <td className={orderColumn === 'email' ? 'active' : ''}>{data.email}</td>
                <td className={orderColumn === 'gender' ? 'active' : ''}>{data.gender}</td>
                <td className={orderColumn === 'registered_date' ? 'active' : ''}>{data.registered_date}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}