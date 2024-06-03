import React from 'react';
import { Form, Input, Checkbox, Button, Upload } from 'antd';

const GetCharts: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <h1>Get Charts</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Long Text"
          name="longText"
          rules={[{ required: true, message: 'Please enter long text!' }]}
        >
          <Input.TextArea maxLength={100} />
        </Form.Item>

        <Form.Item
          label="Normal Input"
          name="normalInput"
          rules={[{ required: true, message: 'Please enter normal input!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="checkbox" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>

        <Form.Item name="upload" valuePropName="fileList">
          <Upload>
            <Button>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GetCharts;
