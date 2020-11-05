import axios from 'axios';
import {URL} from '../environments/test.environment';

export const returnToken = async (email: string, password: string) => {
    const url = `${URL}/user/login`;
    const data = { email, password};
    const request = await axios.post(url, data);
    return request.data.auth;
}