import { HttpService } from '../Http';

export const apiLogin = (p: any) => new HttpService().post('/api/login', p);

export const apiFindInfo = (p: any) => new HttpService().get('/api/find-info', p);