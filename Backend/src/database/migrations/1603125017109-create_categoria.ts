import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategoria1603125017109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'categoria',
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
                    isUnique: true
                },
                {
                    name: 'logoUrl',
                    type: 'varchar'
                },
                {
                    name: 'bannerUrl',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categoria');
    }

}
