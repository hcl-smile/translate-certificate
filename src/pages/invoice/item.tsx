import { Form, Input, Row, Col } from 'antd';

export const CardItem = ({
  items,
  initialValues,
}: {
  items: any;
  initialValues: any;
}) => {
  return (
    <Row gutter={[20, 20]}>
      {items.map((ret: any) => {
        const Com = ret === 'address' ? Input.TextArea : Input;

        return (
          <Col span={6} key={ret}>
            <Form.Item
              name={ret}
              label={initialValues[ret].label}
              rules={[
                {
                  required: true,
                  message: `请输入${initialValues[ret].label}`,
                },
              ]}
            >
              <Com />
            </Form.Item>
          </Col>
        );
      })}
    </Row>
  );
};
