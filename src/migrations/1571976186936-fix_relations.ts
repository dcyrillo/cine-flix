import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRelations1571976186936 implements MigrationInterface {
    name = 'fixRelations1571976186936'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_1b247d952755f8dd46e2ebe9663`", undefined);
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_a32a80a88aff67851cf5b75d1cb`", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `categoryId` `categoryId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `directorId` `directorId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_1b247d952755f8dd46e2ebe9663` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_a32a80a88aff67851cf5b75d1cb` FOREIGN KEY (`directorId`) REFERENCES `director`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_a32a80a88aff67851cf5b75d1cb`", undefined);
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_1b247d952755f8dd46e2ebe9663`", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `directorId` `directorId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `categoryId` `categoryId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_a32a80a88aff67851cf5b75d1cb` FOREIGN KEY (`directorId`) REFERENCES `director`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_1b247d952755f8dd46e2ebe9663` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
