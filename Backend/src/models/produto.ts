import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Categoria from './categoria';
import Imagem from './imagem';

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
}