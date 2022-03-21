import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', exact: true, redirect: '/identity' },
    { path: '/identity', component: '@/pages/identity/index' },
    { path: '/license', component: '@/pages/business-license/index' },
    { path: '/docx', component: '@/pages/docx/index' },
  ],
  fastRefresh: {},
  layout: {},
  proxy: {
    '/api': {
      // target: 'https://translate-weld.vercel.app',
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
});
