-- MariaDB dump 10.17  Distrib 10.4.7-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: desafiohaizencineback
-- ------------------------------------------------------
-- Server version	10.4.7-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `moviesId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1302fc3b13b99f69b0d2f569c7e` (`moviesId`),
  CONSTRAINT `FK_1302fc3b13b99f69b0d2f569c7e` FOREIGN KEY (`moviesId`) REFERENCES `movie` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('382c325a-4fa7-44a9-aa76-cf0c1fd7d5d7','ação',NULL),('c815918e-7e9c-458f-9b49-5a1f044d22f1','terror',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `director`
--

DROP TABLE IF EXISTS `director`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `director` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `moviesId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a16199fc665ca207c7e8b04dcc4` (`moviesId`),
  CONSTRAINT `FK_a16199fc665ca207c7e8b04dcc4` FOREIGN KEY (`moviesId`) REFERENCES `movie` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `director`
--

LOCK TABLES `director` WRITE;
/*!40000 ALTER TABLE `director` DISABLE KEYS */;
INSERT INTO `director` VALUES ('5696124b-9be1-466b-9512-0038aef7ca37',' helder ',NULL),('daf862f7-1a16-4184-8a66-296ed2a6536c','James Cameron',NULL);
/*!40000 ALTER TABLE `director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movie` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(11) NOT NULL,
  `categoryId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `directorId` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1a3a30bbfb1d15135f023e2e99f` (`categoryId`),
  KEY `FK_a32a80a88aff67851cf5b75d1cb` (`directorId`),
  CONSTRAINT `FK_1a3a30bbfb1d15135f023e2e99f` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_a32a80a88aff67851cf5b75d1cb` FOREIGN KEY (`directorId`) REFERENCES `director` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES ('071cc95c-9198-4de7-9f28-9d258ade23e4','harry potter',2011,'382c325a-4fa7-44a9-aa76-cf0c1fd7d5d7','5696124b-9be1-466b-9512-0038aef7ca37'),('135e4887-29c0-43ea-9305-c6df03791d84','Tropa de elite ',2009,'c815918e-7e9c-458f-9b49-5a1f044d22f1',NULL),('2b931c87-e58c-4a87-a44c-a1bf03c74bed','tropa de elite 4',2009,'382c325a-4fa7-44a9-aa76-cf0c1fd7d5d7','daf862f7-1a16-4184-8a66-296ed2a6536c'),('746b2fd3-b14b-4cd5-b851-e3d328cccd66','tropa de elite 4',2009,'382c325a-4fa7-44a9-aa76-cf0c1fd7d5d7','daf862f7-1a16-4184-8a66-296ed2a6536c'),('a159b4da-7468-4923-b285-1c956a41f5a3','teste',2001,'382c325a-4fa7-44a9-aa76-cf0c1fd7d5d7',NULL),('b946b539-531c-458c-b324-1a592a078bb7','AVATAR',2012,'382c325a-4fa7-44a9-aa76-cf0c1fd7d5d7',NULL),('d809382b-a1df-456c-8240-10ef395a819e','helder',2009,'382c325a-4fa7-44a9-aa76-cf0c1fd7d5d7','5696124b-9be1-466b-9512-0038aef7ca37'),('d92bc1fc-4e86-48fd-ac19-beb2e3b01a3b','harry potter',2011,'c815918e-7e9c-458f-9b49-5a1f044d22f1','5696124b-9be1-466b-9512-0038aef7ca37');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-30 11:50:25
