import React, { useCallback, useMemo, useState } from 'react';
import { Form, Row, Col, Input, Popconfirm, Tooltip } from 'antd';
// @ts-ignore
import QRCode from 'qrcode.react';
import _ from 'lodash';
import { axios } from '@/utils';
import icon1 from '@/public/1.png';
import icon2 from '@/public/2.png';
import { PlusSquareOutlined } from '@ant-design/icons';

interface CardItemProps {
  type: 'zh' | 'en';
  initialValues?: any;
  setConfig?: any;
}

const dataConfig = [
  {
    id: 'name',
    label: {
      zh: '名称',
      en: 'name',
    },
  },
  {
    id: 'registeredCapital',
    label: {
      zh: '类型',
      en: 'Registered capital',
    },
  },
  {
    id: 'type',
    label: {
      zh: '类型',
      en: 'Type',
    },
  },
  {
    id: 'dateOfEstablishment',
    label: {
      zh: '成立日期',
      en: 'Date of establishment',
    },
  },
  {
    id: 'representative',
    label: {
      zh: '法定代表人',
      en: 'Legal representative',
    },
  },
  {
    id: 'validity',
    label: {
      zh: '营业期限',
      en: 'Term of Validity',
    },
  },
  {
    id: 'scope',
    label: {
      zh: '经营范围',
      en: 'Business Scope',
    },
  },
  {
    id: 'domicile',
    label: {
      zh: '住所',
      en: 'Domicile',
    },
  },
];

const getValue = (type: 'zh' | 'en', initialValues: any, id: string) => {
  return useMemo(() => {
    if (type !== 'en') return null;

    return initialValues[id];
  }, [type, initialValues]);
};

const onChange = () => {
  return useCallback(async (id: string, value: string, setConfig: any) => {
    const res = await axios('https://translate-weld.vercel.app/api/upload', {
      method: 'get',
      params: {
        text: value,
      },
    });

    setConfig((data: any) => ({
      ...data,
      [id]: res?.data?.translated,
    }));
  }, []);
};

const RenderQRCode = ({
  type,
  setConfig,
  initialValues,
}: {
  type: 'zh' | 'en';
  setConfig: any;
  initialValues: any;
}) => {
  const [url, setUrl] = useState('');
  const [value, setValue] = useState('');

  return type === 'zh' ? (
    <Popconfirm
      title={
        <Input
          onChange={(e) => {
            setUrl(e.target.value);
            setConfig((data: any) => ({
              ...data,
              qrcode: e.target.value,
            }));
          }}
        />
      }
      onConfirm={() => setValue(url)}
    >
      {url ? (
        <Tooltip placement={'top'} title={value}>
          <QRCode size={50} value={value} />
        </Tooltip>
      ) : (
        <PlusSquareOutlined style={{ fontSize: 50 }} />
      )}
    </Popconfirm>
  ) : (
    <QRCode size={50} value={initialValues['qrcode']} />
  );
};

export const CardItem: React.FC<CardItemProps> = ({
  type,
  initialValues,
  setConfig,
}) => {
  const valueChange = _.debounce(onChange(), 200);

  const formItemLayout = {
    labelCol: {
      xs: { span: 7 },
      sm: { span: type === 'zh' ? 4 : 7 },
    },
    wrapperCol: {
      xs: { span: 17 },
      sm: { span: type === 'zh' ? 20 : 17 },
    },
  };

  return (
    <>
      <Row justify={'space-between'}>
        <Col span={10}>
          <Form.Item
            label={
              type === 'zh' ? '统一社会信用代码' : 'Uniform Social Credit Code'
            }
          >
            {type === 'zh' && (
              <Input
                onChange={(e) =>
                  valueChange('creditCode', e.target.value, setConfig)
                }
              />
            )}
            {type === 'en' && getValue(type, initialValues, 'creditCode')}
          </Form.Item>
          {/*<br />*/}
          {/*91320402MA1YRA6NOT*/}
        </Col>
        <Col span={6}>
          <h2>{type === 'zh' ? '营业执照' : 'Business License'}</h2>
        </Col>
        <Col span={5}>
          <Row gutter={[0, 0]}>
            <Col span={8}>
              <RenderQRCode
                type={type}
                setConfig={setConfig}
                initialValues={initialValues}
              />
            </Col>
            <Col span={16}>
              {type === 'zh'
                ? "扫描二维码登录'国家企业信用信息公示系统'了解更多登记、备案、许可、监管信息。"
                : 'Scan the QR code and log in to the "national enterprise credit information publicity system" to learn more registration, filing, licensing and supervision information.'}
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <img src={icon1} width={150} />
        <img src={icon2} width={150} />
      </div>
      <div>
        <Row gutter={[20, 10]}>
          {dataConfig.map((ret) => {
            const Com = ret.id === 'scope' ? Input.TextArea : Input;

            return (
              <Col key={ret.id} span={12}>
                <Form.Item label={ret.label[type]}>
                  {type === 'zh' && (
                    <Com
                      onChange={(e) =>
                        valueChange(ret.id, e.target.value, setConfig)
                      }
                    />
                  )}
                  {type === 'en' && getValue(type, initialValues, ret.id)}
                </Form.Item>
              </Col>
            );
          })}
        </Row>
      </div>
      <Row justify={'end'}>
        <Col span={8}>
          <Form.Item
            label={type === 'zh' ? '登记机关' : 'Registration Authority'}
          >
            {type === 'zh' && (
              <Input
                onChange={(e) =>
                  valueChange(
                    'registrationAuthority',
                    e.target.value,
                    setConfig,
                  )
                }
              />
            )}
            {type === 'en' &&
              getValue(type, initialValues, 'registrationAuthority')}
          </Form.Item>
          <Form.Item label={''}>
            {type === 'zh' && (
              <Input
                onChange={(e) =>
                  valueChange('registrationDate', e.target.value, setConfig)
                }
              />
            )}
            {type === 'en' && getValue(type, initialValues, 'registrationDate')}
          </Form.Item>
        </Col>
      </Row>
      <Row justify={'space-between'} style={{ fontSize: 8 }}>
        <Col span={14}>
          {type === 'zh'
            ? '国家企业信用信息公示系统网址：http://www.gsxt.gov.cn'
            : 'Website of national enterprise credit information publicity system: http://www.gsxt.gov.cn'}
        </Col>
        <Col span={10}>
          {type === 'zh'
            ? '国家市场监督管理总局监制'
            : 'Supervised by the State Administration of market supervision'}
        </Col>
      </Row>
    </>
  );
};
