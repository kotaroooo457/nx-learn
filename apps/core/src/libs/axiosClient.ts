import { default as aspida, default as aspidaClient } from '@aspida/axios';
import axios from 'axios';

import api from '../apis/$api'; //swaggerを参照したaspida型定義
import mock from '../apis/$mock';

export const client =
  process.env['NODE_ENV'] === 'test'
    ? mock(aspidaClient())
    : api(aspida(axios, { baseURL: 'http://localhost:8080' }));
