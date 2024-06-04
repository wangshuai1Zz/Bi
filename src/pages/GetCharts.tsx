import React, { useState } from 'react';
import { Form, Input, Space, Select, SelectProps, UploadProps, message, Button, Upload, Spin, Typography, Card, Row, Col } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { excelToString } from '@/services/wangDog/wenjianchuli';
import ReactECharts from 'echarts-for-react';

const GetCharts: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [chartConfig, setChartOptions] = useState({});
  const [Target, setTarget] = useState(''); // 分析目标
  const onFinish = async (values: any) => {
    setIsLoading(true);
    setChartOptions({});
    try {
      const res = await excelToString({
        chartName: values.chartName,
        chartType: values.chartType,
        chartTarget: values.chartTarget,
        file: values.file.file.originFileObj,
      });
      if (res.code === 2000) {
        if (!res?.data) {
          message.error('生成图表失败');
          return;
        }
        const jsonData = JSON.parse(res.data);
        const echartsConfig = jsonData.echarts;
        setChartOptions(echartsConfig);
        setTarget(jsonData.Target);
        message.success('生成图表成功');
      }
    }
    catch (error) {
      message.error('生成图表失败');
    }
    finally {
      setIsLoading(false);
    }
  };

  const options: SelectProps['options'] = [
    {
      label: '折线图',
      value: '折线图',
      emoji: '📈',
      desc: '折线图',
    },
    {
      label: '柱状图',
      value: '柱状图',
      emoji: '📊',
      desc: '柱状图',
    },
    {
      label: '饼图',
      value: '饼图',
      emoji: '⭕',
      desc: '饼图',
    },
  ];

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    beforeUpload(file) {
      const isExcel =
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/vnd.ms-excel';

      if (!isExcel) {
        message.error('您只能上传Excel文件!');
      }

      return isExcel || Upload.LIST_IGNORE;
    },
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} 文件上传成功.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败.`);
      }
    },
  };

  return (
    <div>
      <h1>利用excel分析数据</h1>
      <Spin spinning={isLoading} tip="生成中...">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="上传文件" style={{ marginTop: 20 }}>
              <Form onFinish={onFinish}>
                <Form.Item
                  label="分析目标"
                  name="chartTarget"
                  rules={[{ required: true, message: '请输入分析目标!' }]}
                >
                  <Input.TextArea maxLength={100} placeholder="输入你的分析目标,最多输入100字符" showCount autoSize />
                </Form.Item>

                <Form.Item
                  label="图表名称"
                  name="chartName"
                  rules={[{ required: true, message: '请输入图表名称!' }]}
                >
                  <Input maxLength={20} placeholder='请输入图表名称' showCount />
                </Form.Item>

                <Form.Item label="图表类型" name="chartType" rules={[{ required: true, message: '请选择图标类型!' }]}>
                  <Select
                    style={{ width: '100%' }}
                    placeholder="请选择图标类型"
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          {option.data.emoji}
                        </span>
                        {option.data.desc}
                      </Space>
                    )}
                  />
                </Form.Item>

                <Form.Item label="原始数据" name="file" rules={[{ required: true, message: '请上传文件!' }]}>
                  <Dragger {...props} maxCount={1}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">点击或拖动上传文件</p>
                    <p className="ant-upload-hint">
                      仅支持上传一个文件。严禁上传公司数据或其他被禁止的文件。
                    </p>
                  </Dragger>
                </Form.Item>

                <Form.Item >
                  <Space>
                    <Button type="primary" htmlType="submit" disabled={isLoading}>
                      生成
                    </Button>
                    <Button htmlType="reset">重置</Button>
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="分析图表" style={{ marginTop: 20 }}>
              {
                Object.keys(chartConfig).length === 0 ? (
                  <div>请先获取分析结果</div>
                ) : (
                  <ReactECharts option={chartConfig} />
                )
              }
            </Card>
            <Card title="分析结果" style={{ marginTop: 20 }}>
              {
                Object.keys(Target).length === 0 ? (
                  <div>请先获取分析结果</div>
                ) : (
                  <Typography.Text>{Target}</Typography.Text>
                )
              }
            </Card>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default GetCharts;
