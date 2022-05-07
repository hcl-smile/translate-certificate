import { BasicLayoutProps } from '@ant-design/pro-layout';

export const layout = (): BasicLayoutProps => {
  return {
    title: '',
    navTheme: 'light',
    siderWidth: 100,
    route: {
      routes: [
        {
          name: '身份证',
          path: '/identity',
        },
        {
          name: '营业执照',
          path: '/license',
        },
        {
          name: '发票',
          path: '/invoice',
        },
        {
          name: '文件',
          path: '/fileManage',
        },
        {
          name: '转图片',
          path: '/toImage',
        },
      ],
    },
  };
};
