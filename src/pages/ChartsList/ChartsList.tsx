import React, { useState } from 'react';
import { message, Modal } from 'antd';
import { ProList } from '@ant-design/pro-components';
import ChartsAndExcelData from './ChatrsAndExcelData';

// 假设你的后端返回的数据是这样的
const data = [
  {
    chartId: 0,
    chartName: "图表1",
    chartType: "类型1",
    chartTarget: "目标1",
    chartData: "数据1",
    chartEchatrs: "Echatrs1",
    chartResults: "结果1",
    updateTime: "更新时间1",
    createTime: "创建时间1",
    createUser: "创建用户1",
    updateUser: "更新用户1"
  },
  // ...
];

const ChartsList: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisible = (visible: boolean) => {
    setIsModalVisible(visible);
  };

  return (
    <div className="charts-list">
      <ProList<any>
        itemCardProps={{
          ghost: false,
        }}
        pagination={{
          defaultPageSize: 4,
          showSizeChanger: false,
        }}
        showActions="always"
        grid={{ gutter: 16, column: 2 }}
        onItem={() => {
          return {
            onClick: () => {
              handleModalVisible(true);
              message.info('点击了卡片');
            },
          };
        }}
        metas={{
          title: { dataIndex: 'chartName', title: '图表名称' },
          subTitle: { dataIndex: 'chartType', title: '图表类型' },
          description: { dataIndex: 'chartTarget', title: '分析目标' },
          content: { dataIndex: 'chartResults', title: '分析结果' },
          // 这里我没有包含 chartData 和 chartEchatrs，所以它们不会在卡片列表中显示
          actions: {
            cardActionProps: 'actions',
            render: (_, record) => [
              [
                <a key="run"
                  onClick={() => {
                    console.log(record);
                    message.info('编辑');
                  }}>编辑</a>,
                <a key="delete"
                  onClick={() => {
                    message.info('删除');
                  }}>删除</a>],
            ],
          },
        }}
        headerTitle="数据列表"
        dataSource={data}
      />
      <Modal
        title="数据对话框"
        open={isModalVisible}
        onCancel={() => handleModalVisible(false)}
        footer={null}
      >
        <ChartsAndExcelData />
      </Modal>
    </div>
  );
};

export default ChartsList;
