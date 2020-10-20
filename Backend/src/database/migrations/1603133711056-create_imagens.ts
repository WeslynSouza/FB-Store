import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImagens1603133711056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'imagem',
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
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'idProduto',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'produto_id',
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
        await queryRunner.dropTable('imagens')
    }

}
