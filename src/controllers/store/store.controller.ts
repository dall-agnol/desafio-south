import Store from '../../models/store/Store.model';
import { ErrorHandler } from '../../utils/error.handler';
import { isAdmin } from '../../auth/isAdmin';

export const StoreController = {
    async insert(req, res) {
        try {
            if (!isAdmin(req.role)) {
                return res.status(401).send(ErrorHandler(401, 'autenticar token'));
            }
            const data = req.body;
            const item = await Store.create(data);
            item.__v = undefined;
            return res.status(200).send(item);
        } catch (error) {
            return res.status(500).send(ErrorHandler(500, 'inserir novo produto'));
        }
    },
    async update(req, res) {
        try {
            if (!isAdmin(req.role)) {
                return res.status(401).send(ErrorHandler(401, 'autenticar token'));
            }
            const data = req.body;
            const id = req.params.id;
            const item = await Store.findByIdAndUpdate(id, data, { new: true });
            return res.status(200).send(item);
        } catch (error) {
            console.log('erro ao buscar:', error);
            return res.status(500).send(ErrorHandler(500, 'atualizar produto'))
        }
    },
    async delete(req, res) {
        try {
            if (!isAdmin(req.role)) {
                return res.status(401).send(ErrorHandler(401, 'autenticar token'));
            }
            const id = req.params.id;
            const item = await Store.findByIdAndDelete(id);
            return res.status(204).send({ message: 'Sucesso ao deletar o produto.' });
        } catch (error) {
            return res.status(500).send(ErrorHandler(500, 'buscar usuário'));
        }
    },
    async getById(req, res) {
        try {
            const id = req.params.id;
            const item = await Store.findById(id);
            return res.status(200).send(item);
        } catch (error) {
            return res.status(500).send(ErrorHandler(500, 'recuperar produto'))
        }
    },
    async list(req, res) {
        try {
            let page = parseInt(req.query.page) || 1;
            let limit = parseInt(req.query.limit) || 10;
            let skip = limit * (page - 1);
            const onlyAvailable = Boolean(req.query.available);
            const name = req.query.name;
            let items = await Store
            .find(name ? { name: { '$regex': name } } : {})
            .skip(skip)
            .limit(limit);
            if (onlyAvailable) {
                items = items.filter((item: any) => {
                    return item.quantity > 0
                })
            }
            return res.status(200).send(items)
        } catch (error) {
            console.log('erro: ', error)
            return res.status(500).send(ErrorHandler(500, 'listar produtos'));
        }
    }
}