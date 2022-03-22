import { Button, Col, Row, Upload, Tooltip } from 'antd';
import { readFile, translateAndDownload } from '@/utils';
import { useState } from 'react';
import { FormInstance } from '@ant-design/pro-form';

export const UploadBtn = ({
  form,
  title,
}: {
  form: FormInstance;
  title: string;
}) => {
  const [template, setTemplate] = useState<any>(null);

  return (
    <Row gutter={[20, 20]} style={{ padding: 20 }}>
      <Col>
        <Upload
          onChange={async ({ file }) => {
            if (!file.originFileObj) return;

            const template = (await readFile(file.originFileObj)) as Buffer;

            setTemplate(template);
          }}
        >
          <Button>{title}</Button>
        </Upload>
      </Col>
      <Col>
        <Tooltip overlay={!template ? `请先${title}` : ''}>
          <Button
            htmlType={'submit'}
            disabled={!template}
            onClick={async () => {
              const fields = form.getFieldsValue();
              const valid = Object.values(fields).some(
                (ret) => ret === '' || ret === undefined,
              );

              if (valid) {
                return;
              }

              await translateAndDownload(fields, template, title);
            }}
          >
            翻译转换
          </Button>
        </Tooltip>
      </Col>
    </Row>
  );
};
