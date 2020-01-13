import express from 'express';
import {{ Model }} from '../models/{{ModelInstance}}';
import { request } from './route_utils';

const router = express.Router();

class {{ Model }}Router {
    @request(router.post.bind(router), '/')
    static async create(req, res) {
        let body = req.body;
        let {{ Model.lower }} = new {{Model}}(body);
        await {{ Model.lower }}.save();
        return { {{ Model.lower }} };
    }

    @request(router.get.bind(router), '/')
    static async getAll(req, res) {
        let {{ Model.lower }}s = await {{Model}}.find();
        return { {{ Model.lower }}s };
    }

    @request(router.get.bind(router), '/:id')
    static async get(req, res) {
        let {{ Model.lower }} = await {{Model}}.findById(req.params.id);
        return { {{ Model.lower }} };
    }

    @request(router.patch.bind(router), '/:id')
    static async update(req, res) {
        let {{ Model.lower }} = await {{Model}}.update({_id: req.params.id}, req.body, {upsert: false});
        return { {{ Model.lower }} };
    }
}

export default router;
