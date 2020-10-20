import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Usuario from '../models/usuario';

export default {

    async index(req: Request, res: Response){
        const usuarioRepository = getRepository(Usuario);

        const usuarios = await usuarioRepository.find();

        return res.status(200).json(usuarios);
    },

    async show(req: Request, res: Response){

        const { email } = req.params;
        
        const usuarioRepository = getRepository(Usuario);

        const usuario = await usuarioRepository.findOneOrFail(email);

        return res.status(200).json(usuario);
    },

    async create(req: Request, res: Response){
        const {
            email,
            nome,
            cel,
            senha,
        } = req.body;

        const usuarioRepository = getRepository(Usuario);

        const requestImagens = req.files as Express.Multer.File[];
        const imagens = requestImagens.map(image => {
            return image.filename
        })

        const data = {
            email,
            nome,
            avatar: imagens[0],
            cel,
            senha,
        }

        const usuario = usuarioRepository.create(data);

        await usuarioRepository.save(usuario);

        return res.status(201).json(usuario)
    }
}