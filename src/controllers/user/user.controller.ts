
import jwt from 'jsonwebtoken';
import User from '../../models/user/User.model';
import { validateJWT } from '../../auth/jwt';
import { ErrorHandler } from '../../utils/error.handler';
import { Response } from '../../utils/success.response';

export const UserController = {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await User.find({email, password});
        if (user && user.length) {
            const key = String(process.env.SECRET);
            user[0].__v = undefined;
            const token = jwt.sign({
                id: user[0]._id,
                role: user[0].role
            }, key, {
                expiresIn: '7d'
            });
            const response = {
                auth: token,
                data: user[0]
            }
            return res.status(200).send(response);
        } else {
            return res.status(401).send(ErrorHandler(401, 'autenticar usuário'))
        }
    },
    async register(req, res) {
        try {
            const data = req.body;
            const user = await User.create(data);
            user.__v = undefined;
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send(ErrorHandler(500, 'realizar cadastro'));
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
            return res.status(500).send(ErrorHandler(500, 'realizar atualização'));
        }
     }
    
}