import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Pedido from '../models/pedido';
import Usuario from '../models/usuario';

export default {

    async index(req: Request, res: Response) {

        const pedidoRepository = getRepository(Pedido);

        const pedidos = await pedidoRepository.find();

        return res.status(200).json(pedidos);
    },

    async show(req: Request, res: Response) {

        const { id } = req.params;

        const pedidoRepository = getRepository(Pedido);

        const pedido = await pedidoRepository.findOneOrFail( id );

        return res.status(200).json(pedido);
        
    },

    async create(req: Request, res: Response){

        const {
            data,
            emailUsuario,
            valorTotal,
            statusCompra,
            codigoRastreio
        } = req.body

        const pedidoRepository = getRepository(Pedido);
        const usuarioRepository = getRepository(Usuario);

        const usuario = await usuarioRepository.findOneOrFail(emailUsuario);

        const requestData = {
            data,
            valorTotal,
            statusCompra,
            codigoRastreio,
            usuario,
        }

        const pedido = pedidoRepository.create(requestData);

        await pedidoRepository.save(pedido);

        return res.status(201).json(pedido);
    }
}