-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pagoprod`
--

DROP TABLE IF EXISTS `pagoprod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagoprod` (
  `ide` int NOT NULL,
  `bOr` varchar(255) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `precio` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagoprod`
--

LOCK TABLES `pagoprod` WRITE;
/*!40000 ALTER TABLE `pagoprod` DISABLE KEYS */;
INSERT INTO `pagoprod` VALUES (170,'O-84811','Medias de Béisbol Burdeo Rawlings L Adulto',1,10990),(196,'O-84811','Muñequera Deportiva Ancha',1,2890),(133,'O-84811','Balón Voleibol Mikasa V330w',2,39990),(185,'O-84811','Pelota de Básquetbol Molten GR7 - BG2000',1,15990),(123,'O-42921','Pelota de Voleibol Molten V5M 3500',1,42990),(92,'O-42921','Funda Simple Palo de Hockey Simbra',4,5390),(66,'O-42921','Wedges Titleist SM9 Jet Black	',1,1299990),(107,'O-42921','Patines en Linea DRB Speed Azul',1,56390),(123,'O-14211','Pelota de Voleibol Molten V5M 3500',1,42990),(107,'O-14211','Patines en Linea DRB Speed Azul',1,56390),(129,'O-23201','Cintillos Deportivos',1,2590);
/*!40000 ALTER TABLE `pagoprod` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  6:25:56
