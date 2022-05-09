import { useState } from 'react';
import { Vertical } from '@/pages/business-to-image/components/vertical';
import { Horizontal } from '@/pages/business-to-image/components/horizontal';
import { Button, Tabs, Input, Form } from 'antd';
// @ts-ignore
import domToImage from 'dom-to-image';
import './index.less';

const download = async (tabKey: '1' | '2') => {
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
  const download = Math.random().toString(36).slice(-6);

  a.href = url;
  a.download = download;
  a.target = '_blank';

  a.click();
};

export default () => {
  const [form] = Form.useForm();

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
            onClick={() => {
              const names: string[] = form.getFieldsValue().name.split('\n');
              if (!names.length) return;

              names.forEach(async (name, index) => {
                if (index % 2 === 0) {
                  await download('2');
                } else {
                  await download('1');
                }
              });
            }}
          >
            下载
          </Button>
        </Form.Item>
      </Form>
      <div style={{ height: 10, opacity: 0, overflow: 'hidden' }}>
        <Vertical />
        <Horizontal />
      </div>
    </>
  );
};
