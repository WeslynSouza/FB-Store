import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEndereço1603124986094 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'endereço',
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'usuarioEmail',
                    type: 'varchar',
                },
                {
                    name: 'estado',
                    type: 'varchar',
                }, 
                {
                    name: 'cidade',
                    type: 'varchar',
                },
                {
                    name: 'cep',
                    type: 'integer',
                },
                {
                    name: 'rua',
                    type: 'varchar',
                },
                {
                    name: 'numero',
                    type: 'integer'
                },
                {
                    name: 'complemento',
                    type: 'text'
                }
            ],
            foreignKeys: [
                {
                    name: 'emailUsuario',
                    columnNames: ['usuarioEmail'],
                    referencedTableName: 'usuario',
                    referencedColumnNames: ['email'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('endereço');
    }

}
