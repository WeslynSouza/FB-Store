import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsuario1603124133575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'usuario',
            columns: [
                {
                    name: 'email',
                    type: 'varchar',
                    unsigned: true,
                    isPrimary: true,
                },
                {
                    name: 'nome',
                    type: 'varchar'
                },
                {
                    name: 'cel',
                    type: 'integer'
                },
                {
                    name: 'senha',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuario');
    }

}
