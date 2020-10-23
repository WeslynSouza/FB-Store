import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import UsuarioView from '../views/usuarioView';
import * as yup from 'yup';

import Usuario from '../models/usuario';

export default {

    async index(req: Request, res: Response){
        const usuarioRepository = getRepository(Usuario);

        const usuarios = await usuarioRepository.find();

        return res.status(200).json(UsuarioView.renderMany(usuarios));
    },

    async show(req: Request, res: Response){

        const { email } = req.params;
        
        const usuarioRepository = getRepository(Usuario);

        const usuario = await usuarioRepository.findOneOrFail(email);

        return res.status(200).json(UsuarioView.render(usuario));
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

        const schema = yup.object().shape({
            email: yup.string().email().required(),
            nome: yup.string().required(),
            cel: yup.number().required(),
            senha: yup.string().required().max(20)
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const usuario = usuarioRepository.create(data);

        await usuarioRepository.save(usuario);

        return res.status(201).json(usuario)
    }
}