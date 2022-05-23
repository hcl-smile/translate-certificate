import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', exact: true, redirect: '/identity' },
    { path: '/identity', component: '@/pages/identity/index' },
    { path: '/license', component: '@/pages/license/index' },
    { path: '/invoice', component: '@/pages/invoice/index' },
    { path: '/fileManage', component: '@/pages/file-manage/index' },
    { path: '/toImage', component: '@/pages/business-to-image/index' },
  ],
  fastRefresh: {},
  layout: {},
  proxy: {
    '/api': {
      // target: 'https://translate-weld.vercel.app',
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
    '/company': {
      target: 'http://api.qichacha.com/ECIComplement',
      changeOrigin: true,
      pathRewrite: { '^/company': '' },
    },
  },
});
