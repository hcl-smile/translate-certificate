import { Card, Row, Col, Form, Input } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { axios } from '@/utils';

const translateEn = async (id: string, text: string, setEnConfig: any) => {
  if (!text) return;

  const res = await axios('https://translate-weld.vercel.app/api/upload', {
    method: 'get',
    params: {
      text,
    },
  });

  setEnConfig &&
    setEnConfig((data: any) => ({
      ...data,
      [id]: res.data.translated,
    }));
};

const getValue = (type: 'en' | 'zh', initialValues: any, id: string) => {
  return useMemo(() => {
    return type === 'en' ? initialValues[id] : null;
  }, [type, initialValues]);
};

const dataConfig = [
  {
    id: 'name',
    label: {
      zh: '姓名',
      en: 'Name',
    },
  },
  {
    id: 'sex',
    label: {
      zh: '性别',
      en: 'Gender',
    },
  },
  {
    id: 'date',
    label: {
      zh: '出生',
      en: 'Date of Birth',
    },
  },
  {
    id: 'address',
    label: {
      zh: '住址',
      en: 'Address',
    },
  },
  {
    id: 'num',
    label: {
      zh: '公民身份证号码',
      en: 'Identification Card Number',
    },
  },
];

const dataEnConfig = [
  {
    id: 'authority',
    label: {
      zh: '签发机关',
      en: 'Issuing Authority',
    },
  },
  {
    id: 'validity',
    label: {
      zh: '有效期限',
      en: 'Term of Validity',
    },
  },
];

const CardBody = ({
  type,
  setEnConfig,
  initialValues,
}: {
  type: 'zh' | 'en';
  setEnConfig?: any;
  initialValues?: any;
}) => {
  const readOnly = type === 'en';
  const [form] = Form.useForm();

  const translate = _.debounce(translateEn, 200);

  return (
    <div style={{ border: '1px solid #979797', padding: 20 }}>
      <Form
        form={form}
        aria-readonly={readOnly}
        labelCol={{ span: 6 }}
        labelAlign={'left'}
      >
        {dataConfig.map((ret) => (
          <Form.Item label={ret.label[type]} id={ret.id} key={ret.id}>
            {type === 'zh' && (
              <Input
                readOnly={readOnly}
                onChange={(e) => translate(ret.id, e.target.value, setEnConfig)}
              />
            )}
            {type === 'en' && getValue(type, initialValues, ret.id)}
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};

const CardText: React.FC<{
  type: 'zh' | 'en';
  setOenConfig?: any;
  initialValues?: any;
}> = ({ type, setOenConfig, initialValues }) => {
  const translate = _.debounce(translateEn, 200);

  return (
    <div style={{ border: '1px solid #979797', padding: 20 }}>
      <h2 style={{ textAlign: 'center', fontSize: 20, marginBottom: 30 }}>
        {type === 'zh' ? '中华人民共和国' : "The People's Republic of China"}
        <br />
        {type === 'zh' ? '居民身份证' : 'Resident Identification Card'}
      </h2>
      <Form>
        <Form.Item label={dataEnConfig[0].label[type]} id={'authority'}>
          {type === 'zh' && (
            <Input
              onChange={(e) => {
                translate('authority', e.target.value, setOenConfig);
              }}
            />
          )}
          {type === 'en' && getValue(type, initialValues, 'authority')}
        </Form.Item>
        <Form.Item label={dataEnConfig[1].label[type]} id={'validity'}>
          {type === 'zh' && (
            <>
              <Input
                style={{ width: 150 }}
                onChange={(e) => {
                  translate('validityStart', e.target.value, setOenConfig);
                }}
              />{' '}
              -{' '}
              <Input
                style={{ width: 150 }}
                onChange={(e) => {
                  translate('validityEnd', e.target.value, setOenConfig);
                }}
              />
            </>
          )}
          {type === 'en' &&
            getValue(type, initialValues, 'validityStart') +
              ' to ' +
              getValue(type, initialValues, 'validityEnd')}
        </Form.Item>
      </Form>
    </div>
  );
};

export default () => {
  const [enConfig, setEnConfig] = useState({
    name: '',
    sex: '',
    date: '',
    address: '',
    num: '',
  });
  const [oEnConfig, setOenConfig] = useState({
    authority: '',
    validity: '',
    validityStart: '',
    validityEnd: '',
  });

  return (
    <Row gutter={[0, 10]}>
      <Col span={24}>
        <Card title={'身份证头像面'}>
          <Row gutter={[30, 0]}>
            <Col span={10}>
              <CardBody type={'zh'} setEnConfig={setEnConfig} />
            </Col>
            <Col span={14}>
              <CardBody type={'en'} initialValues={enConfig} />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24}>
        <Card title={'身份证国徽面'}>
          <Row gutter={[30, 0]}>
            <Col span={10}>
              <CardText type={'zh'} setOenConfig={setOenConfig} />
            </Col>
            <Col span={14}>
              <CardText type={'en'} initialValues={oEnConfig} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
