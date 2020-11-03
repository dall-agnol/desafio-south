import axios from 'axios';
import { URL } from '../src/environments/test.environment';

const returnToken = async (email: string, password: string) => {
    const url = `${URL}/user/login`;
    const data = { email, password};
    const request = await axios.post(url, data);
    return request.data.auth;
}
describe('list items of store with pagination', () => {
    it('should get the list os items of store', async () => {
        const token = returnToken('admin@admin.com', 'admin');
        const request = await axios.get(`${URL}/store/list`, {
            params: {

            },
            headers: {
                'x-access-token': token
            }
        });
        expect(request.status).toBe(200);
        expect(request.data.length).toBeGreaterThanOrEqual(1);
    })
})