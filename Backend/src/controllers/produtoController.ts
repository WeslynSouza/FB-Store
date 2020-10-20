import { Request, Response } from 'express';
import { getRepository } from 'typeorm'

import Produto from '../models/produto';
import Categoria from '../models/categoria';

export default {

    async index(req: Request, res: Response){

        const produtoRepository = getRepository(Produto);

        const produto = await produtoRepository.find({
            relations: ['categoria']
        });

        return res.status(200).json(produto);
    },

    async show(req: Request, res: Response){
        const { id } = req.params;

        const produtoRepository = getRepository(Produto);

        const produto = await produtoRepository.findOneOrFail(id, {
            relations: ['categoria']
        });

        return res.status(200).json(produto);
    },

    async create(req: Request, res: Response) {

        const {
            nome,
            preço,
            tipo,
            categoria_id
        } = req.body

        const produtoRepository = getRepository(Produto);
        const categoriaRepository = getRepository(Categoria)

        const produto_categoria = await categoriaRepository.findOneOrFail(categoria_id);

        console.log(produto_categoria.id)

        const data = {
            nome,
            preço,
            tipo,
            categoria: produto_categoria
        }

        const produto = produtoRepository.create(data);

        await produtoRepository.save(produto);

        return res.status(201).json(produto);
    }
}