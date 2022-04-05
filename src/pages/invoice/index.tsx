import { Row, Col, Card, Form } from 'antd';
import { CardItem } from '@/pages/invoice/item';
import { UploadBtn } from '@/components/upload-btn';

export default () => {
  const [form] = Form.useForm();
  const initialValues = {
    qrcodeUrl: {
      label: '二维码',
      value: '',
    },
    title: {
      label: '省市',
      value: '',
    },
    machinenumber: {
      label: '机器编码',
      value: '',
    },
    invoicecode: {
      label: '发票代码',
      value: '',
    },
    invoicenumber: {
      label: '发票号码',
      value: '',
    },
    invoicedate: {
      label: '开票日期',
      value: '',
    },
    checkcode: {
      label: '校验码',
      value: '',
    },
    buyername: {
      label: '买方名称',
      value: '',
    },
    buyeridtaxpayer: {
      label: '买方纳税人识别号',
      value: '',
    },
    buyeraddressphone: {
      label: '买方发票代码',
      value: '',
    },
    buyerbankaccount: {
      label: '买方开户行及账户',
      value: '',
    },
    buyerpasswordarea: {
      label: '买方密码区',
      value: '',
    },
    goodstaxableservices: {
      label: '货物或应税劳务、服务名称',
      value: '',
    },
    specmodel: {
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
    unitprice: {
      label: '单价',
      value: '',
    },
    amount: {
      label: '金额',
      value: '',
    },
    taxrate: {
      label: '税率',
      value: '',
    },
    amounttax: {
      label: '税额',
      value: '',
    },
    total: {
      label: '合计',
      value: '',
    },
    totalpricetax: {
      label: '价税合计',
      value: '',
    },
    lowercase: {
      label: '小写',
      value: '',
    },
    sellername: {
      label: '销售方名称',
      value: '',
    },
    selleridtaxpayer: {
      label: '销售方纳税人识别号',
      value: '',
    },
    selleraddressphone: {
      label: '销售方地址电话',
      value: '',
    },
    sellerbankaccount: {
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
                  items={items.slice(0, 7)}
                  initialValues={initialValues}
                />
              </Card>
              <Card title={'购买方'}>
                <CardItem
                  items={items.slice(7, 12)}
                  initialValues={initialValues}
                />
              </Card>
              <Card title={'规格型号单位'}>
                <CardItem
                  items={items.slice(12, 23)}
                  initialValues={initialValues}
                />
              </Card>
              <Card title={'销售方'}>
                <CardItem
                  items={items.slice(23, 28)}
                  initialValues={initialValues}
                />
              </Card>
              <Card title={'收款人'}>
                <CardItem
                  items={items.slice(28)}
                  initialValues={initialValues}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
