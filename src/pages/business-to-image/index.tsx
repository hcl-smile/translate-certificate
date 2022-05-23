import React from 'react';
import { Template } from '@/pages/business-to-image/components';
import { Button, Input, Form } from 'antd';
// @ts-ignore
import domToImage from 'dom-to-image';
import { request } from 'umi';
import './index.less';
import { useState } from 'react';
import md5 from 'md5';

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
    `https://translate-weld.vercel.app/api/image/${name}`,
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
