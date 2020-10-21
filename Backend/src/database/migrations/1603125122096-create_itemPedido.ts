import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createItemPedido1603125122096 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'itemPedido',
            columns: [
                {
                    name: 'codigoPedido',
                    type: 'integer',
                },
                {
                    name: 'idProduto',
                    type: 'integer',
                },
                {
                    name: 'valor',
                    type: 'decimal',
                    scale: 2,
                    precision: 3
                },{
                    name: 'quantidade',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'pedicoCodigo',
                    columnNames: ['codigoPedido'],
                    referencedTableName: 'pedido',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'produtoCodigo',
                    columnNames: ['idProduto'],
                    referencedTableName: 'produto',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('itemPedido');
    }

}
