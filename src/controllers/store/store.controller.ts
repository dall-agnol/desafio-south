import Store from '../../models/store/Store.model';
import { ErrorHandler } from '../../utils/error.handler';


export const StoreController = {
    async createUser(req: any, res: any) {
        try {
            //const data = req.body;
            //console.log(data);
            //const user = await Store.create(data);
            return res.status(200).send({message: 'oi'});
        } catch (error) {
            return res.status(400).send({message: 'erro'});
        }
     },
    async getUsers(req, res) {
        try {
            const users = await Store.find({});
            return res.status(200).send(users);
        } catch (error) {
            console.log('erro ao buscar:', error);
            return res.status(400).send(ErrorHandler('buscar usuários', error))
        }
    },
    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await Store.findById(id);
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send(ErrorHandler('buscar usuário', error));
        }
    },
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const file = await Store.findByIdAndUpdate(id, data, { new: true });
            //file.password = undefined;
            return res.status(200).send(file);
        } catch (error) {
            return res.status(400).send(ErrorHandler('atualizar usuário', error))
        }
    },
    async login(req, res) {
        try {
            const params = {
                username: req.body.usuario,
                password: req.body.senha
            }
            console.log(params)
            const user = await Store.find(params);
            console.log(user)
            if (user && user.length) {
                return res.status(200).send({ data: user[0] });
            }
            return res.status(400).send({ data: null })
        } catch (error) {
            //return res.status(500).send(ErrorHandler(500,'fazer login', error));
        }
    }
}