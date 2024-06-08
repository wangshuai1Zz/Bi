import React from 'react';
import { Button } from 'antd';
import { ProColumns, ProTable } from '@ant-design/pro-components';

interface DataItem {
  id: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [
  { id: 1, name: 'John Doe', age: 25, address: '123 Street' },
  { id: 2, name: 'Jane Smith', age: 30, address: '456 Avenue' },
  // Add more data items as needed
];

const ChartsAndExcelData: React.FC = () => {

  const columns: ProColumns<DataItem>[] = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ];

  return (
    <div className='ChartsAndExcelData'>
      <ProTable<DataItem>
        columns={columns}
        dataSource={data}
        search={false}
        pagination={false}
      />
    </div>
  );
};

export default ChartsAndExcelData;
