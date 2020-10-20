import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Produto from './produto';

@Entity('Categoria')
export default class Categoria {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    logoUrl: string;

    @Column()
    bannerUrl: string;

    @OneToMany(() => Produto, produto => produto.categoria, {
        cascade: ['update', 'remove']
    })
    @JoinColumn({ name: 'idCategoria'})
    produtos: Produto[];
}