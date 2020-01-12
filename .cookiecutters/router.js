import express from 'express';
import {{ Model }} from '../models/{{ModelInstance}}';
import { request } from './route_utils';

const router = express.Router();

class {{ Model }}Router {
    @request(router.post.bind(router), '/')
    static async create(req, res) {
        let body = req.body;
        let {{ ModelInstance }} = new {{Model}}(body);
        await {{ ModelInstance }}.save();
        return { {{ ModelInstance }} };
    }

    @request(router.get.bind(router), '/')
    static async getAll(req, res) {
        let {{ModelInstance}}s = await {{Model}}.find();
        return { {{ModelInstance}}s };
    }

    @request(router.get.bind(router), '/:id')
    static async get(req, res) {
        let {{ModelInstance}} = await {{Model}}.findById(req.params.id);
        return { {{ ModelInstance }} };
    }

    @request(router.patch.bind(router), '/:id')
    static async update(req, res) {
        let {{ModelInstance}} = await {{Model}}.findById(req.params.id);
        return { {{ ModelInstance }} };
    }
}

export default router;
