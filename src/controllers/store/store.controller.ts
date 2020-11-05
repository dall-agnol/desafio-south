import Store from '../../models/store/Store.model';
import { ErrorHandler } from '../../utils/error.handler';
import { isAdmin } from '../../auth/isAdmin';
import { ErrorController } from '../../utils/error.controller';

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
            const data: any = {
                messages: ErrorHandler(500, 'inserir novo produto')
            }
            if (error.errors) data.data = ErrorController(error.errors);
            return res.status(500).send(data);
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
            const data: any = {
                messages: ErrorHandler(500, 'atualizar produto')
            }
            if (error.errors) data.data = ErrorController(error.errors);

            return res.status(500).send(data)
        }
    },
    async delete(req, res) {
        try {
            if (!isAdmin(req.role)) {
                return res.status(401).send(ErrorHandler(401, 'autenticar token'));
            }
            const id = req.params.id;
            await Store.findByIdAndDelete(id);
            return res.status(201).send({ message: 'Sucesso ao deletar o produto.' });
        } catch (error) {
            const data: any = {
                messages: ErrorHandler(500, 'deletar item')
            }
            if (error.errors) data.data = ErrorController(error.errors);
            return res.status(500).send(data);
        }
    },
    async getById(req, res) {
        try {
            const id = req.params.id;
            const item = await Store.findById(id);
            return res.status(200).send(item);
        } catch (error) {
            const data: any = {
                messages: ErrorHandler(500, 'recuperar produto')
            }
            if (error.errors) data.data = ErrorController(error.errors);
            return res.status(500).send(data)
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
                items = items.filter((item: any) => item.quantity > 0)
            }
            return res.status(200).send(items)
        } catch (error) {
            const data: any = {
                messages: ErrorHandler(500, 'listar produto')
            }
            if (error.errors) data.data = ErrorController(error.errors);
            return res.status(500).send(data);
        }
    }
}