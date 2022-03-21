import { Button, Col, Row, Upload } from 'antd';
import { readFile, translateAndDownload } from '@/utils';
import { useState } from 'react';

export const UploadBtn = ({ form, title }: { form: any; title: string }) => {
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
        <Button
          disabled={!template}
          onClick={async () => {
            const fields = form.getFieldsValue();

            await translateAndDownload(fields, template);
          }}
        >
          翻译转换
        </Button>
      </Col>
    </Row>
  );
};
