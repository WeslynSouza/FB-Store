import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Pedido from './pedido';
import Produto from './produto';

@Entity('ItemPedido')
export default class ItemPedido {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    valor: number;

    @Column()
    quantidade: number;

    @ManyToOne(() => Pedido, pedido => pedido.itens)
    @JoinColumn({ name: 'codigoPedido' })
    pedido: Pedido;

    @ManyToOne(() => Produto, produto => produto.itensPedido)
    @JoinColumn({ name: 'idProduto' })
    produto: Produto;
}