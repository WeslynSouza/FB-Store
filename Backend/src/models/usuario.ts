import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'
import Endereço from './endereco';
import Pedido from './pedido';

@Entity('Usuario')
export default class Usuario {

    @PrimaryColumn()
    email: string;

    @Column()
    nome: string;

    @Column()
    avatar: string;

    @Column()
    cel: number;

    @Column()
    senha: string;

    @OneToMany(() => Endereço, endereço => endereço.usuario, {
        cascade: ['update', 'remove']
    })
    @JoinColumn({ name: 'usuarioEmail' })
    endereços: Endereço[];

    @OneToMany(() => Pedido, pedido => pedido.usuario, {
        cascade: ['update', 'remove']
    })
    @JoinColumn({ name: 'emailUsuario' })
    pedidos: Pedido[];
}