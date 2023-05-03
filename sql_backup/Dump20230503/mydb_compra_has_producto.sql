-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
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
-- Table structure for table `compra_has_producto`
--

DROP TABLE IF EXISTS `compra_has_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra_has_producto` (
  `COMPRA_idCOMPRA` int NOT NULL,
  `PRODUCTO_idPRODUCTO` int NOT NULL,
  `PRODUCTO_MARCA_idMARCA` int NOT NULL,
  PRIMARY KEY (`COMPRA_idCOMPRA`,`PRODUCTO_idPRODUCTO`,`PRODUCTO_MARCA_idMARCA`),
  KEY `fk_COMPRA_has_PRODUCTO_PRODUCTO1_idx` (`PRODUCTO_idPRODUCTO`,`PRODUCTO_MARCA_idMARCA`),
  KEY `fk_COMPRA_has_PRODUCTO_COMPRA1_idx` (`COMPRA_idCOMPRA`),
  CONSTRAINT `fk_COMPRA_has_PRODUCTO_COMPRA1` FOREIGN KEY (`COMPRA_idCOMPRA`) REFERENCES `compra` (`idCOMPRA`),
  CONSTRAINT `fk_COMPRA_has_PRODUCTO_PRODUCTO1` FOREIGN KEY (`PRODUCTO_idPRODUCTO`, `PRODUCTO_MARCA_idMARCA`) REFERENCES `producto` (`id`, `MARCA_idMARCA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra_has_producto`
--

LOCK TABLES `compra_has_producto` WRITE;
/*!40000 ALTER TABLE `compra_has_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra_has_producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-03  4:18:09
