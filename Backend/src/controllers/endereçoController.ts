import { Request, Response } from 'express';
import { getRepository } from 'typeorm'

import Endereço from '../models/endereco';
import Usuario from '../models/usuario';

export default {

    async index(req: Request, res: Response){

        const produtoRepository = getRepository(Endereço);

        const produto = await produtoRepository.find({
            relations: ['usuario']
        });

        return res.status(200).json(produto);
    },

    async show(req: Request, res: Response){
        const { id } = req.params;

        const produtoRepository = getRepository(Endereço);

        const produto = await produtoRepository.findOneOrFail(id, {
            relations: ['usuario']
        });

        return res.status(200).json(produto);
    },

    async create(req: Request, res: Response) {

        const {
            estado,
            cidade,
            cep,
            rua,
            numero,
            complemento,
            usuarioEmail
        } = req.body

        const endereçoRepository = getRepository(Endereço);
        const usuarioRepository = getRepository(Usuario)

        const endereço_usuario = await usuarioRepository.findOneOrFail(usuarioEmail);

        console.log(endereço_usuario.email)

        const data = {
            estado,
            cidade,
            cep,
            rua,
            numero,
            complemento,
            usuario: endereço_usuario,
        }

        const endereço = endereçoRepository.create(data);

        await endereçoRepository.save(endereço);

        return res.status(201).json(endereço);
    }
}