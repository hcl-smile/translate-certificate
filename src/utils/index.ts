import axios from 'axios';

axios.create({
  baseURL:
    process.env['NODE_ENV'] === 'development'
      ? undefined
      : 'https://translate-weld.vercel.app',
});

export { axios };
