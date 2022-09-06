import aspida from '@aspida/axios';
import axios from 'axios';

import api from '../apis/$api';

export const client = api(aspida(axios, { baseURL: 'http://localhost:8080' }));
