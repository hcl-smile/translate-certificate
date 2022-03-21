import { useState } from 'react';
import { CardItem } from '@/pages/business-license/card-item';
import { Row, Col, Card, Button, Form } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 7 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 17 },
    sm: { span: 17 },
  },
};

export default () => {
  const [initialValues, setInitialValues] = useState({
    creditCode: '',
    name: '',
    registeredCapital: '',
    type: '',
    dateOfEstablishment: '',
    representative: '',
    validity: '',
    scope: '',
    domicile: '',
    registrationAuthority: '',
    registrationDate: '',
    qrcode: '',
  });

  return (
    <Form
      style={{
        padding: 20,
        backgroundColor: '#fff',
        border: '1px solid #979797',
      }}
    >
      <Row gutter={[0, 20]}>
        <Col span={24}>
          {/*<DrawerForm*/}
          {/*  width={1300}*/}
          {/*  trigger={<Button type={'primary'}>翻译</Button>}*/}
          {/*>*/}
          {/*  <CardItem type={'en'} initialValues={initialValues} />*/}
          {/*</DrawerForm>*/}
          <Card title={'营业执照中文'}>
            <CardItem type={'zh'} setConfig={setInitialValues} />
          </Card>
        </Col>
        <Col span={24}>
          <Card title={'营业执照英文'}>
            <CardItem type={'en'} initialValues={initialValues} />
          </Card>
        </Col>
      </Row>
    </Form>
  );
};
