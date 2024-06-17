import axios from 'axios';

export const https = axios.create({ baseURL: process.env.NEXT_PUBLIC_HOST });
