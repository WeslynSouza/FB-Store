import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import CategoriaView from '../views/categoriaView';

import Categoria from '../models/categoria';

export default {

    async index(req: Request, res: Response){
        const categoriasRepository = getRepository(Categoria);

        const categorias = await categoriasRepository.find();

        return res.status(200).json(CategoriaView.renderMany(categorias));
    },

    async show(req: Request, res: Response){
        const { id } = req.params;

        const categoriasRepository = getRepository(Categoria);

        const categoria = await categoriasRepository.findOneOrFail( id );

        return res.status(200).json(CategoriaView.render(categoria));
    },

    async create(req: Request, res: Response ){
        const {
            nome,
        } = req.body;

        const categoriasRepository = getRepository(Categoria);
        
        const requestImagens = req.files as Express.Multer.File[];
        const imagens = requestImagens.map(image => {
            return image.filename
        })

        const data = {
            nome,
            logoUrl: imagens[0],
            bannerUrl: imagens[1]
        }

        const categoria = categoriasRepository.create(data);

        await categoriasRepository.save(categoria);

        return res.status(201).json(categoria);
    }
}