import { ErrorController } from './../../utils/error.controller';

import jwt from 'jsonwebtoken';
import User from '../../models/user/User.model';
import { ErrorHandler } from '../../utils/error.handler';

export const UserController = {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.find({email, password});
            if (user && user.length) {
                const key = String(process.env.SECRET);
                user[0].__v = undefined;
                const token = jwt.sign({
                    id: user[0]._id,
                    role: user[0].role
                }, key);
                const response = {
                    auth: token,
                    data: user[0]
                }
                return res.status(200).send(response);
            } else {
                const data = {
                    messages: ErrorHandler(400, 'encontrar usuário')
                }
                return res.status(400).send(data)
            }
        } catch (error) {
            const data: any = {
                messages: ErrorHandler(500, 'realizar login')
            }
            if (error.errors) data.data = ErrorController(error.errors);
            return res.status(500).send(data);
        }
        
    },
    async register(req, res) {
        try {
            const data = req.body;
            const user = await User.create(data);
            user.__v = undefined;
            return res.status(200).send(user);
        } catch (error) {
            const data: any = {
                messages: ErrorHandler(500, 'realizar cadastro')
            }
            if (error.errors) data.data = ErrorController(error.errors);
            return res.status(500).send(data);
        }
     },
     async update(req, res) {
        try {
            const data = req.body;
            const id = req.params.id;
            const user = await User.findByIdAndUpdate(id, data, { new: true });
            user.__v = undefined;
            return res.status(200).send(user);
        } catch (error) {
            const data: any = {
                messages: ErrorHandler(500, 'realizar atualização')
            }
            if (error.errors) data.data = ErrorController(error.errors);
            return res.status(500).send(data);
        }
     }
    
}