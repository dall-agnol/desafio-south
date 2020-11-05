import {ErrorHandler} from "../utils/error.handler";

import jwt from 'jsonwebtoken';

export const validateJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    const secret = String(process.env.SECRET);
    if (!token) {
        return res.status(401).send(ErrorHandler(401, 'verificar token'))
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send(ErrorHandler(401, `autenticar token (${err.message})`))
        }
        req.role = decoded.role;
        req.id = decoded.id;
        return next();
    })
}