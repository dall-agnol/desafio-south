import axios from 'axios';
import { URL } from '../src/environments/test.environment';

describe('do login', () => {
    it('should do login and return the auth token', async () => {
        const data = {
            email: 'admin@admin.com',
            password: 'admin'
        };
        const request = await axios.post(`${URL}/user/login`, data)
        expect(request.status).toBe(200);
        expect(request.data.auth.length).toBeGreaterThanOrEqual(1);
    })
})