import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Pedido from '../models/pedido';
import Usuario from '../models/usuario';

export default {
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
            usuario
        }

        const pedido = pedidoRepository.create(requestData);

        await pedidoRepository.save(pedido);

        return res.status(201).json(pedido);
    }
}