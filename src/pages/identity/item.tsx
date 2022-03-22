import { Form, Row, Col, Card, Input } from 'antd';
import { UploadBtn } from '@/components/upload-btn';

const CardItem = ({
  items,
  initialValues,
}: {
  items: any;
  initialValues: any;
}) => {
  return items.map((ret: any) => {
    const Com = ret === 'address' ? Input.TextArea : Input;

    return (
      <Form.Item
        key={ret}
        name={ret}
        label={initialValues[ret].label}
        rules={[{ required: true }]}
      >
        <Com />
      </Form.Item>
    );
  });
};

export const Item = () => {
  const [form] = Form.useForm();
  const initialValues: any = {
    name: {
      label: '姓名',
      value: '',
    },
    gender: {
      label: '性别',
      value: '',
    },
    ethnicity: {
      label: '民族',
      value: '',
    },
    dateofbirth: {
      label: '出生',
      value: '',
    },
    address: {
      label: '住址',
      value: '',
    },
    num: {
      label: '公民身份证号码',
      value: '',
    },
    issue: {
      label: '签发机关',
      value: '',
    },
    period: {
      label: '有效期限',
      value: '',
    },
  };

  return (
    <Form form={form}>
      <UploadBtn form={form} title={'上传身份证模板'} />
      <Row gutter={[0, 20]}>
        <Col span={24}>
          <Card title={'身份证头像'}>
            <CardItem
              items={Object.keys(initialValues).slice(0, 6)}
              initialValues={initialValues}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title={'身份证国徽'}>
            <CardItem
              items={Object.keys(initialValues).slice(6)}
              initialValues={initialValues}
            />
          </Card>
        </Col>
      </Row>
    </Form>
  );
};
