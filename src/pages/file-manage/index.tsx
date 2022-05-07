import { Tabs, TabPaneProps } from 'antd';
import { ModalForm } from '@ant-design/pro-form';
import ProTable from '@ant-design/pro-table';
import { useState } from 'react';

const TableTabs = () => {
  const [activeKey, setActiveKey] = useState('1');
  const tabs: TabPaneProps[] = [
    {
      tab: '身份证模板',
      tabKey: '1',
    },
    {
      tab: '发票模板',
      tabKey: '2',
    },
    {
      tab: '营业执照模板',
      tabKey: '3',
    },
  ];

  return (
    <Tabs activeKey={activeKey} onTabClick={(key) => setActiveKey(key)}>
      {tabs.map((ret) => (
        <Tabs.TabPane tab={ret.tab} key={ret.tabKey} tabKey={ret.tabKey}>
          <ProTable search={false} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default () => {
  return (
    <div style={{ padding: 24 }}>
      <TableTabs />
    </div>
  );
};
