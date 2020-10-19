 import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProduto1603125010565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produto',
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
                    name: 'nome',
                    type: 'varchar',
                }, 
                {
                    name: 'preço',
                    type: 'decimal',
                    scale: 2,
                    precision: 3,
                },
                {
                    name: 'tipo',
                    type: 'varchar',
                },
                {
                    name: 'idCategoria',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'categoria_id',
                    columnNames: ['idCategoria'],
                    referencedTableName: 'categoria',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
