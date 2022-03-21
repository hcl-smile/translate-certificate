import { Button, Upload, UploadProps, Row, Col, Form, Input } from 'antd';
import { readFile, translateAndDownload } from '@/utils';
// @ts-ignore
import JSZipUtils from 'jszip-utils';
import { createReport } from 'docx-templates';
import { useState } from 'react';

export default () => {
  const [form] = Form.useForm();
  const initialValues: any = {
    name: {
      label: '名称',
      value: '',
    },
    type: {
      label: '类型',
      value: '',
    },
    representative: {
      label: '法定代表人',
      value: '',
    },
    scope: {
      label: '经营范围',
      value: '',
    },
    capital: {
      label: '注册资本',
      value: '',
    },
    date: {
      label: '成立日期',
      value: '',
    },
    validity: {
      label: '营业期限',
      value: '',
    },
    domicile: {
      label: '住所',
      value: '',
    },
    authority: {
      label: '登记机关',
      value: '',
    },
    authority_date: {
      label: '登记日期',
      value: '',
    },
  };
  const [template, setTemplate] = useState<any>(null);

  return (
    <Row style={{ padding: 20 }} gutter={[0, 20]}>
      <Col span={24}>
        <Row gutter={[20, 0]}>
          <Col>
            <Upload
              onChange={async ({ file }) => {
                if (!file.originFileObj) return;

                const template = (await readFile(file.originFileObj)) as Buffer;

                setTemplate(template);
              }}
            >
              <Button>上传营业执照模板</Button>
            </Upload>
          </Col>
          <Col>
            <Button
              onClick={async () => {
                const fields = form.getFieldsValue();

                await translateAndDownload(fields, template);
              }}
            >
              翻译转换
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Form
          form={form}
          labelCol={{ xs: 3, sm: 3, xl: 3 }}
          initialValues={{
            name: '',
            type: '',
            representative: '',
            scope: '',
            capital: '',
            date: '',
            validity: '',
            domicile: '',
            authority: '',
            authorityDate: '',
          }}
        >
          <Row gutter={[30, 0]}>
            {Object.keys(initialValues).map((ret: any) => {
              const Com = ret === 'scope' ? Input.TextArea : Input;

              return (
                <Col key={ret} span={12}>
                  <Form.Item
                    name={ret}
                    id={ret}
                    label={initialValues[ret].label}
                  >
                    <Com />
                  </Form.Item>
                </Col>
              );
            })}
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
