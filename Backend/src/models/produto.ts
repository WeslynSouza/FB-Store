import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Categoria from './categoria';

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

    @ManyToOne(() => Categoria, Categoria => Categoria.produtos)
    @JoinColumn({ name: 'idCategoria'})
    categoria: Categoria;
}