import axios from 'axios';
import { URL } from '../src/environments/test.environment';
import { returnToken } from '../src/utils/returnToken';
jest.setTimeout(30000);
let token = '';

beforeAll(async () => {
    token = await returnToken('admin@admin.com', 'admin');
});
describe('list items of store with pagination', () => {
    it('should get the list os items of store', async () => {
        const request = await axios.get(`${URL}/store/list`, {
            params: {
                page: 1,
                limit: 10
            },
            headers: {
                'x-access-token': token
            }
        });
        expect(request.status).toBe(200);
        expect(request.data.length).toBeGreaterThanOrEqual(1);
    })
})