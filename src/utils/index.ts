import axios from 'axios';

axios.create({
  baseURL: 'https://translate-weld.vercel.app',
});

export { axios };
