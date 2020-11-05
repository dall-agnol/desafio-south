import axios from 'axios';
import { URL } from '../src/environments/test.environment';
import { returnToken } from '../src/utils/returnToken';
jest.setTimeout(30000);
let token: string = '';

beforeAll(async () => {
    token = await returnToken('admin@admin.com', 'admin');
});
describe('add item as admin without error', () => {
    it('should add an item to the store as admin', async () => {
        const data = {
            name: "item de teste",
            description: "descricao do item de teste",
            price: 9.99,
            quantity: 8
        };
        const url = `${URL}/store/add`;
        const request = await axios.post(url, data, {
            headers: {
                'x-access-token': token
            }
        });

        expect(request.status).toEqual(200);
    });
});

describe('try to add item as client with error', () => {
    it('should try to add an item to the store as a client', async () => {

        const tokenClient = await returnToken('client@client.com', 'client');
        const data = {
            name: "item de teste de cliente",
            description: "descricao do item de teste de cliente",
            price: 19.99,
            quantity: 5
        };
        const url = `${URL}/store/add`;
        await axios.post(url, data, {
            headers: {
                'x-access-token': tokenClient
            }
        })
        .then(response => {
            expect(response.status).toEqual(401);
        })
        .catch(error => {
            expect(error.response.status).toEqual(401);
        })

    });
})

