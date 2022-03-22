import { Row, Col, Card, Form } from 'antd';
import { CardItem } from '@/pages/invoice/item';
import { UploadBtn } from '@/components/upload-btn';

export default () => {
  const [form] = Form.useForm();
  const initialValues = {
    title: {
      label: '省市',
      value: '',
    },
    machine_number: {
      label: '机器编码',
      value: '',
    },
    invoice_code: {
      label: '发票代码',
      value: '',
    },
    invoice_number: {
      label: '发票号码',
      value: '',
    },
    invoice_date: {
      label: '开票日期',
      value: '',
    },
    check_code: {
      label: '校验码',
      value: '',
    },
    buyer_name: {
      label: '买方名称',
      value: '',
    },
    buyer_id_taxpayer: {
      label: '买方纳税人识别号',
      value: '',
    },
    buyer_address_phone: {
      label: '买方发票代码',
      value: '',
    },
    buyer_bank_account: {
      label: '买方开户行及账户',
      value: '',
    },
    buyer_password_area: {
      label: '买方密码区',
      value: '',
    },
    goods_taxable_services: {
      label: '货物或应税劳务、服务名称',
      value: '',
    },
    spec_model: {
      label: '规格型号',
      value: '',
    },
    unit: {
      label: '单位',
      value: '',
    },
    quantity: {
      label: '数量',
      value: '',
    },
    unit_price: {
      label: '单价',
      value: '',
    },
    amount: {
      label: '金额',
      value: '',
    },
    tax_rate: {
      label: '税率',
      value: '',
    },
    amount_tax: {
      label: '税额',
      value: '',
    },
    total: {
      label: '合计',
      value: '',
    },
    total_price_tax: {
      label: '价税合计',
      value: '',
    },
    lower_case: {
      label: '小写',
      value: '',
    },
    seller_name: {
      label: '销售方名称',
      value: '',
    },
    seller_id_taxpayer: {
      label: '销售方纳税人识别号',
      value: '',
    },
    seller_address_phone: {
      label: '销售方地址电话',
      value: '',
    },
    seller_bank_account: {
      label: '销售方开户行及账号',
      value: '',
    },
    note: {
      label: '备注',
      value: '',
    },
    payee: {
      label: '收款人',
      value: '',
    },
    review: {
      label: '复核',
      value: '',
    },
    drawer: {
      label: '开票人',
      value: '',
    },
    seller: {
      label: '销售方',
      value: '',
    },
  };
  const items = Object.keys(initialValues);

  return (
    <Form form={form}>
      <Row gutter={[0, 20]}>
        <Col span={24}>
          <UploadBtn form={form} title={'上传发票模板'} />
        </Col>
        <Col span={24}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Card title={'发票头部'}>
                <CardItem
                  items={items.slice(0, 6)}
                  initialValues={initialValues}
                />
              </Card>
              <Card title={'购买方'}>
                <CardItem
                  items={items.slice(6, 11)}
                  initialValues={initialValues}
                />
              </Card>
              {/*<Card title={'规格型号单位'}>*/}
              {/*  <CardItem*/}
              {/*    items={items.slice(11, 22)}*/}
              {/*    initialValues={initialValues}*/}
              {/*  />*/}
              {/*</Card>*/}
              {/*<Card title={'销售方'}>*/}
              {/*  <CardItem*/}
              {/*    items={items.slice(22, 26)}*/}
              {/*    initialValues={initialValues}*/}
              {/*  />*/}
              {/*</Card>*/}
              {/*<Card title={'收款人'}>*/}
              {/*  <CardItem*/}
              {/*    items={items.slice(26, 30)}*/}
              {/*    initialValues={initialValues}*/}
              {/*  />*/}
              {/*</Card>*/}
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
