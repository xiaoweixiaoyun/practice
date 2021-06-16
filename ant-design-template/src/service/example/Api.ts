import { HttpService } from '../Http';

export const apiGetTest = (p: any) => new HttpService().get('/api/user/list', p);
