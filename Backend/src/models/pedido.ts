import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ItemPedido from './itemPedido';
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

    @OneToMany(() => ItemPedido, itemPedido => itemPedido.pedido, {
        cascade: ['insert', 'update', 'remove']
    })
    @JoinColumn({ name: 'codigoPedido' })
    itens: ItemPedido[];
}