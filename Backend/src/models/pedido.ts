import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Usuario from './usuario';

@Entity('Pedido')
export default class Pedido {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    data: string;
    
    @Column()
    valorTotal: number;
    
    @Column()
    statusCompra: string;
    
    @Column()
    codigoRastreio: string;

    @ManyToOne(() => Usuario, usuario => usuario.pedidos)
    @JoinColumn({ name: 'emailUsuario'})
    usuario: Usuario;
}