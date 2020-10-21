import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Produto from './produto';

@Entity('Imagens')
export default class Imagem {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Produto, produto => produto.imagens)
    @JoinColumn({ name: 'idProduto'})
    produto: Produto;
}