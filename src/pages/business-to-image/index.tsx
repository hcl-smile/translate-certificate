import React from 'react';
import { Template } from '@/pages/business-to-image/components';
import { Button, Input, Form } from 'antd';
// @ts-ignore
import domToImage from 'dom-to-image';
import { request } from 'umi';
import './index.less';
import { useState } from 'react';
import md5 from 'md5';
import { Horizontal } from '@/pages/business-to-image/components/horizontal';
import { Vertical } from '@/pages/business-to-image/components/vertical';

export type CompanyInfoProps = {
  /**
   * 统一社会信用代码
   */
  CreditCode?: string;

  /**
   * 企业名称
   */
  Name?: string;

  /**
   * 企业类型
   */
  EconKind?: string;

  /**
   * 法定代表人
   */
  OperName?: string;

  /**
   * 经营范围
   */
  Scope?: string;

  /**
   * 注册资本
   */
  RegistCapi?: string;

  /**
   * 成立日期
   */
  StartDate?: string;

  /**
   * 营业期限始
   */
  TermStart?: string;

  /**
   * 营业期限至
   */
  TermEnd?: string;

  /**
   * 住所
   */
  Address?: string;

  /**
   * 登记机关
   */
  BelongOrg?: string;

  /**
   * 核准日期
   */
  CheckDate?: string;

  /**
   * 官网
   */
  WebSiteUrl?: string;
};

const getInfo = async (
  name: string,
  setInfo: React.Dispatch<React.SetStateAction<Record<string, any> | null>>,
) => {
  const res = await request(
    `https://translate-hcl-smile.vercel.app/api/image/${name}`,
    {
      method: 'get',
    },
  );

  // @ts-ignore
  if (res.Status === '200') {
    // @ts-ignore
    setInfo(res.Result);

    // @ts-ignore
    return res.Result;
  }

  return null;
};

export const download = async (tabKey: '1' | '2', info: CompanyInfoProps) => {
  const a = document.createElement('a');
  const area = {
    1: {
      width: 908,
      height: 1280,
    },
    2: {
      width: 1334,
      height: 1001,
    },
  };

  const url = await domToImage.toJpeg(
    document.getElementById(`node${tabKey}`),
    {
      ...area[tabKey],
    },
  );
  // const download = Math.random().toString(36).slice(-6);

  a.href = url;
  a.download = info.Name as string;
  a.target = '_blank';

  a.click();
};

const mockInfo = {
  Status: '200',
  Message: '【有效请求】查询成功',
  OrderNumber: 'ECICOMPLEMENT2022030816573925429578',
  Result: {
    KeyNo: 'xxxxxxxxxxxxxxxxx',
    Name: 'xxxxxxxxxx',
    OperId: 'xxxxxxxx',
    OperName: 'xxxxxxxxx',
    Status: '存续（在营、开业、在册）',
    StartDate: '2010-03-03',
    RegistCapi: '185000万元人民币',
    RecCap: '185000万元人民币',
    CheckDate: '2021-04-27',
    OrgNo: 'xxxxxxxx',
    No: 'xxxxxxxxx',
    CreditCode: 'xxxxxxxx',
    EconKind: '有限责任公司（自然人投资或控股）',
    TermStart: '2010-03-03',
    TermEnd: '2030-03-02',
    TaxpayerType: '一般纳税人',
    BelongOrg: '上海市场监督管理局管理组管理',
    PersonScope: '10000以上',
    InsuredCount: '114',
    EnglishName: 'xxxxxxxxxx',
    IXCode: 'xxxxxxxxxx',
    Address: 'xxxxxxxxxxxxxxxxx',
    Scope: 'xxxxxxxxxxxxxxxxx',
    IsOnStock: '0',
    StockNumber: '',
    StockType: '',
    ImageUrl: 'xxxxxxxxx',
    PhoneNumber: '010-60601234',
    Email: 'xxxxxxxx',
    WebSiteUrl: 'http://www.mi.com',
    EntNature: '0',
    Area: {
      Province: '北京市',
      City: '北京市',
      County: '海淀区',
    },
    Industry: {
      IndustryCode: 'M',
      Industry: '科学研究和技术服务业',
      SubIndustryCode: '75',
      SubIndustry: '科技推广和应用服务业',
      MiddleCategoryCode: '751',
      MiddleCategory: '技术推广服务',
      SmallCategoryCode: '7519',
      SmallCategory: '其他技术推广服务',
    },
    UsedNameList: [
      {
        Name: 'xxxxxxxxxx',
        ChangeDate: '1970-01-17',
      },
    ],
    RevokeInfo: null,
    ShareHolderList: [
      {
        KeyNo: 'xxxxxxxxx',
        StockName: 'xxxxx',
      },
    ],
    EmployeeList: [
      {
        KeyNo: 'xxxxxxx',
        Name: 'xxxxxxx',
        Job: 'xxxxxxxxxx',
      },
    ],
    InvestList: [
      {
        KeyNo: 'xxxxxxxxxx',
        Name: 'xxxxxxxxxx',
        RegistCapi: '247655.7552万元人民币',
        StartDate: '2013-12-26',
        Status: '存续',
        OperName: 'xxxxxxx',
      },
    ],
    ChangeList: [
      {
        ProjectName: '经营范围',
        BeforeList: ['技术开发', '货物进出口、技术进出口、代理进出口'],
        AfterList: ['技术开发', '货物进出口、技术进出口、代理进出口'],
        ChangeDate: '1970-01-20',
      },
    ],
    ControlList: [
      {
        KeyNo: 'xxxxxxxx',
        Name: 'xxx',
        Province: '天津市',
        Industry: '金融业',
        Status: '存续',
      },
    ],
    BranchList: [
      {
        KeyNo: 'xxxxxxxxxxx',
        Name: 'xxxxxxx',
        DirectorName: 'xxx',
        Status: '存续',
      },
    ],
    ParentInfo: null,
    MoreEmailList: [],
    MoreTelList: [
      {
        Source: '2020年报',
        Value: 'xxxx',
      },
      {
        Source: '2013年报',
        Value: 'xxxxx',
      },
      {
        Source: '互联网',
        Value: 'xxxxxxx',
      },
      {
        Source: '互联网',
        Value: 'xxxxxxx',
      },
    ],
    EntTagList: [
      {
        Type: '903',
        Name: '存续',
      },
      {
        Type: '99',
        Name: '曾用名',
      },
      {
        Type: '108',
        Name: '高新技术企业',
      },
    ],
  },
};

export default () => {
  const [form] = Form.useForm();
  const [info, setInfo] = useState<Record<string, any> | null>(null);

  return (
    <>
      <Form form={form}>
        <Form.Item name={'name'}>
          <Input.TextArea
            placeholder={'请输入公司名称'}
            style={{ minHeight: 250 }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={async () => {
              const names: string[] = form.getFieldsValue()?.name?.split('\n');
              if (!names?.length) return;

              await names.forEach((name) => {
                setInfo(null);
                getInfo(name, setInfo);
              });
            }}
          >
            下载
          </Button>
        </Form.Item>
      </Form>
      <div style={{ height: 10, opacity: 0, overflow: 'hidden' }}>
        {info && <Template info={info} />}
      </div>
    </>
  );
};
