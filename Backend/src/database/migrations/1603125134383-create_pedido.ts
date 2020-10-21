import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPedido1603125134383 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pedido',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'emailUsuario',
                    type: 'varchar',
                },
                {
                    name: 'data',
                    type: 'varchar'
                },
                {
                    name: 'valorTotal',
                    type: 'deciaml',
                    scale: 2,
                    precision: 3
                },
                {
                    name: 'statusCompra',
                    type: 'varchar',
                },
                {
                    name: 'codigoRastreio',
                    type: 'varchar',
                    isNullable: true,
                }
            ],
            foreignKeys: [
                {
                    name: 'pedidoUsuario',
                    columnNames: ['emailUsuario'],
                    referencedTableName: 'usuario',
                    referencedColumnNames: ['email'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pedido');
    }

}
