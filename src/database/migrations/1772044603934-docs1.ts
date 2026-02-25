import { MigrationInterface, QueryRunner } from "typeorm";

export class Docs11772044603934 implements MigrationInterface {
    name = 'Docs11772044603934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "docs" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "miTest2" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "docs"`);
    }

}
