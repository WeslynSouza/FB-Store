import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Categoria from './categoria';
import Imagem from './imagem';
import ItemPedido from './itemPedido';

@Entity('Produto')
export default class Produto{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    preço: number;

    @Column()
    tipo: string;
    
    @OneToMany(() => Imagem, Imagem => Imagem.produto, {
        cascade: ['insert', 'update', 'remove']
    })
    @JoinColumn({ name: 'idProduto' })
    imagens: Imagem[];

    @ManyToOne(() => Categoria, Categoria => Categoria.produtos)
    @JoinColumn({ name: 'idCategoria'})
    categoria: Categoria;

    @OneToMany(() => ItemPedido, itemPedido => itemPedido.produto, {
        cascade: ['update', 'remove']
    })
    @JoinColumn({ name: 'idProduto' })
    itensPedido: ItemPedido[];
}