
import jwt from 'jsonwebtoken';
import User from '../../models/user/User.model';
import { validateJWT } from '../../auth/jwt';
import { ErrorHandler } from '../../utils/error.handler';
import { Response } from '../../utils/success.response';

export const UserController = {
    async login(req, res) {
        //const { email, password } = req.body;
        //const user = await User.find({email, password});
        //if (user && user.length) {
            //console.log('usuário encontrado: ', user);
            const key = String(process.env.SECRET);
            console.log('key: ', key)
            const token = jwt.sign({
                //id: user[0]._id,
                //role: user[0].type
                id: 1,
                role: 'admin'
            }, key, {
                expiresIn: '1d'
            });
            const user = []
            return res.status(200).send(Response(200, user[0], token));
       // }
        
        //return res.status(400).send(ErrorHandler(400, 'encontrar usuário.'))
    },
    async logout(req, res) {

        console.log(req.role);
        return res.status(204).send(Response(204, undefined, null))
    },
    async create(req, res) {
        try {
            //const data = req.body;
            //console.log(data);
            //const user = await User.create(data);
            return res.status(200).send({message: 'oi'});
        } catch (error) {
            return res.status(400).send({message: 'erro'});
        }
     },
     async register(req, res) {

     },
     async update(req, res) {
        try {
            
        } catch (error) {
            
        }
     }
    
}