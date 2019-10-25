import {MigrationInterface, QueryRunner} from "typeorm";

export class updateMoviesFilterCategory1571974732286 implements MigrationInterface {
    name = 'updateMoviesFilterCategory1571974732286'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_1a3a30bbfb1d15135f023e2e99f`", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `categoriesId` `categoryId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `director` DROP FOREIGN KEY `FK_a16199fc665ca207c7e8b04dcc4`", undefined);
        await queryRunner.query("ALTER TABLE `director` CHANGE `moviesId` `moviesId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_a32a80a88aff67851cf5b75d1cb`", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `categoryId` `categoryId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `directorId` `directorId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `category` DROP FOREIGN KEY `FK_1302fc3b13b99f69b0d2f569c7e`", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `moviesId` `moviesId` varchar(36) NULL", undefined);
        await queryRunner.query("ALTER TABLE `director` ADD CONSTRAINT `FK_a16199fc665ca207c7e8b04dcc4` FOREIGN KEY (`moviesId`) REFERENCES `movie`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_1b247d952755f8dd46e2ebe9663` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_a32a80a88aff67851cf5b75d1cb` FOREIGN KEY (`directorId`) REFERENCES `director`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `category` ADD CONSTRAINT `FK_1302fc3b13b99f69b0d2f569c7e` FOREIGN KEY (`moviesId`) REFERENCES `movie`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `category` DROP FOREIGN KEY `FK_1302fc3b13b99f69b0d2f569c7e`", undefined);
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_a32a80a88aff67851cf5b75d1cb`", undefined);
        await queryRunner.query("ALTER TABLE `movie` DROP FOREIGN KEY `FK_1b247d952755f8dd46e2ebe9663`", undefined);
        await queryRunner.query("ALTER TABLE `director` DROP FOREIGN KEY `FK_a16199fc665ca207c7e8b04dcc4`", undefined);
        await queryRunner.query("ALTER TABLE `category` CHANGE `moviesId` `moviesId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `category` ADD CONSTRAINT `FK_1302fc3b13b99f69b0d2f569c7e` FOREIGN KEY (`moviesId`) REFERENCES `movie`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `directorId` `directorId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `categoryId` `categoryId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_a32a80a88aff67851cf5b75d1cb` FOREIGN KEY (`directorId`) REFERENCES `director`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `director` CHANGE `moviesId` `moviesId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `director` ADD CONSTRAINT `FK_a16199fc665ca207c7e8b04dcc4` FOREIGN KEY (`moviesId`) REFERENCES `movie`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `movie` CHANGE `categoryId` `categoriesId` varchar(36) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `movie` ADD CONSTRAINT `FK_1a3a30bbfb1d15135f023e2e99f` FOREIGN KEY (`categoriesId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
