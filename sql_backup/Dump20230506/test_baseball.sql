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
-- Table structure for table `baseball`
--

DROP TABLE IF EXISTS `baseball`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baseball` (
  `TITULO` varchar(57) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Column_2` int DEFAULT NULL,
  `DESCRIPCION` varchar(227) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `PRECIO` int DEFAULT NULL,
  `CANTIDAD` int DEFAULT NULL,
  `MARCA` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `PRECIO_ORIGIN` int DEFAULT NULL,
  `DESCU` int DEFAULT NULL,
  `Imagen` varchar(101) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baseball`
--

LOCK TABLES `baseball` WRITE;
/*!40000 ALTER TABLE `baseball` DISABLE KEYS */;
INSERT INTO `baseball` VALUES ('Set de Baseball: Bate 22\" + Pelota BSL',NULL,'El Set de Basetball compuesto por un Bate y una Pelota, son las herramientas necesarias para iniciar a los niños en este deporte. Fabricados con materiales especificaciones aptas para la práctica',10790,10,'BSL',12990,17,'https://www.gympro.cl/2757-thickbox_default/set-de-baseball-bate-22-pelota-bsl.jpg'),('Set de Baseball: Bate 28\" + Pelota BSL',NULL,'El Set de Basetball compuesto por un Bate y una Pelota, son las herramientas necesarias para iniciar a los niños en este deporte. Fabricados con materiales especificaciones aptas para la práctica',14390,14,'BSL',16790,14,'https://www.gympro.cl/6629-thickbox_default/set-de-baseball-bate-24-pelota-bsl.jpg'),('Bate de Béisbol Rawlings 33\'',NULL,'Bate de Béisbol Profesional hecho de Maple duro. Ultra resistente certificado.Tiene 33\' pulgadas de largo (84 cm aprox.). Cuenta con un acabado negro en el comienzo y natural hacia el final, que le da una presentación elegante.',79990,10,'Rawlings',99990,20,'https://www.gympro.cl/10319-thickbox_default/bate-de-beisbol-rawlings-33-.jpg'),('Bate de Baseball 26\" + Pelota KBL',NULL,'Bate de baseball de 26 \"\nMaterial Madera trabajada en alta calidad\nPelota de Goma con exterior de PVC\nExcelente bate de Beisbol para tus partidos',10990,3,'KBL Training',12990,15,'https://www.gympro.cl/2093-thickbox_default/bate-de-baseball-26-pelota-kbl.jpg'),('Set de Baseball Bate Pelota y Guante',NULL,'El Set de Baseball compuesto por un Bate y una Pelota, son las herramientas necesarias para iniciar a los niños en este deporte.',25990,9,'GymPro',29990,13,'https://www.gympro.cl/8118-thickbox_default/set-de-baseball-bate-pelota-y-guante.jpg'),('Pelota de Beísbol (Pack de 2 Unidades)',NULL,'Esfera de Beísbol apta para principiantes y practicantes de este deporte, ayuda a desarrollar la habilidad. Fácil de transportar por su tamaño pequeño y liviano',34990,6,'GymPro',49990,30,'https://www.gympro.cl/3034-thickbox_default/pelota-de-beisbol-pack-de-2-unidades.jpg'),('Pelotas de Béisbol 14U Set de dos pelotas',NULL,'Pelota Béisbol para ligas jóvenes, perteneciente a la gama de pelotas 14U, Modelo R14U.\nFabricada en Cuero. Ideal para entrenamientos en jaulas de Béisbol y juegos competitivos.\nIncluye 2 pelotas.',19990,8,'Rawlings',24990,20,'https://www.gympro.cl/10289-thickbox_default/pelotas-de-beisbol-14u-set-de-dos-pelotas.jpg'),('Pelotas de Béisbol 6U Set de dos pelotas',NULL,'Pelota Béisbol para ligas jóvenes, perteneciente a la gama de pelotas 14U, Modelo R14U.\nFabricada en Cuero. Ideal para entrenamientos en jaulas de Béisbol y juegos competitivos.\nIncluye 2 pelotas.',16990,5,'Rawlings',23990,29,'https://www.gympro.cl/10293-thickbox_default/pelotas-de-beisbol-6u-set-de-dos-pelotas.jpg'),('Pelota Softbol Dream Seam 12\' Rawlings',NULL,'Pelota de Softball de alta densidad diseñada para soportar varios golpes.\nPosee hilos de costura rojo y esta 100% fabricada en Cuero Genuino.\nModelo Dream Seam Fast Pitch para jugar profesionalmente Softbol.',12990,13,'Rawlings',18900,31,'https://www.gympro.cl/10296-thickbox_default/pelota-softbol-dream-seam-12-rawlings-.jpg'),('Pelota de Béisbol 9\' BSL',NULL,'Bola Béisbol hecha de Goma con centro de corcho.\nRecubierta de Cuero PU de excelente durabilidad.\nEsta pelota para Béisbol tiene las medidas oficiales 9 pulgas (22 cm de circunferencia).',3590,20,'BSL',4790,25,'https://www.gympro.cl/10351-thickbox_default/pelota-de-beisbol-9-bsl.jpg'),('Guante de Béisbol Rawlings Niño Negro y Rojo',NULL,'Guantes para Béisbol Izquierdo para lanzadores Diestros.\nModelo Player Series para jugadores infantiles.\nFabricado para adaptarse perfectamente a la mano de los niños, cómodo y flexible.',27990,10,'Rawlings',38990,28,'https://www.gympro.cl/10276-thickbox_default/guante-de-beisbol-rawlings-nino-negro-y-rojo.jpg'),('Guante de Béisbol Rawlings Infantil Rojo y Azul + Pelota',NULL,'Guantes para Béisbol Izquierdo para lanzadores Diestros.\nModelo Player Series para jugadores infantiles.\nFabricado para adaptarse perfectamente a la mano de los niños, cómodo y flexible.',24990,17,'Rawlings',29990,17,'https://www.gympro.cl/10270-thickbox_default/guante-de-beisbol-rawlings-infantil-rojo-y-azul.jpg'),('Guante de Béisbol Rawlings Niño Negro y Turquesa',NULL,'Guantes para Béisbol Izquierdo para lanzadores Diestros.\nModelo Player Series para jugadores infantiles.\nFabricado para adaptarse perfectamente a la mano de los niños, cómodo y flexible.',27990,10,'Rawlings',32990,15,'https://www.gympro.cl/10266-thickbox_default/guante-de-beisbol-rawlings-nino-negro-y-turquesa.jpg'),('Guante de Bateo 5150 Rawling',NULL,'Guantes de bate modelo 5150, que brindan una experiencia premium.\nLa palma esta fabricada en Cuero genuino que brinda un confort y suavidad.\nExcelente durabilidad debido a el Cuero Genuino.',26990,5,'Rawlings',35990,25,'https://www.gympro.cl/10295-thickbox_default/guante-de-bateo-5150-rawling.jpg'),('Guantes de Béisbol o Baseball + Pelota, Marca KBL, By DRB',NULL,'Set de Baseball: Guante + Pelota | KBL®, By DRB\nÚsalo en tus entrenamientos o juegos amistosos\nEste kit es ideal para iniciarse en el baseball o bien llamado Beisbol',18990,8,'DRB',23990,21,'https://www.gympro.cl/8565-thickbox_default/guantes-de-beisbol-o-baseball-pelota-marca-kbl-by-drb.jpg'),('Medias de Béisbol Negras Rawlings M Adulto',NULL,'Calcetines de Béisbol diseñadas para durar y aguantar los partidos o entrenamientos de Béisbol.\nSu material es Nylon y mantienen una excelente ventilación.\nMantiene los pies firmes durante los juegos.',10990,6,'Rawlings',14990,27,'https://www.gympro.cl/10297-thickbox_default/medias-de-beisbol-negras-rawlings-m-adulto.jpg'),('Medias de Béisbol Burdeo Rawlings M Adulto',NULL,'Calcetines de Béisbol diseñadas para durar y aguantar los partidos o entrenamientos de Béisbol.\nSu material es Nylon y mantienen una excelente ventilación.\nMantiene los pies firmes durante los juegos.',10990,6,'Rawlings',14990,27,'https://www.gympro.cl/10299-thickbox_default/medias-de-beisbol-burdeo-rawlings-m-adulto.jpg'),('Medias de Béisbol Burdeo Rawlings L Adulto',NULL,'Calcetines de Béisbol diseñadas para durar y aguantar los partidos o entrenamientos de Béisbol.\nSu material es Nylon y mantienen una excelente ventilación.\nMantiene los pies firmes durante los juegos.',10990,6,'Rawlings',14990,27,'https://www.gympro.cl/10300-thickbox_default/medias-de-beisbol-burdeo-rawlings-l-adulto.jpg'),('Medias de Béisbol Negras + Cinturón Rawlings M Adulto',NULL,'Calcetines de Béisbol diseñadas para durar y aguantar los partidos o entrenamientos de Béisbol.\nSu material es Nylon y mantienen una excelente ventilación.\nMantiene los pies firmes durante los juegos.',14990,2,'Rawlings',19990,25,'https://www.gympro.cl/10302-thickbox_default/medias-de-beisbol-negras-cinturon-rawlings-m-adulto.jpg'),('Medias de Béisbol Rojas + Cinturón Rawlings L Adulto',NULL,'Calcetines de Béisbol diseñadas para durar y aguantar los partidos o entrenamientos de Béisbol.\nSu material es Nylon y mantienen una excelente ventilación.\nMantiene los pies firmes durante los juegos.',14990,2,'Rawlings',19990,25,'https://www.gympro.cl/10305-thickbox_default/medias-de-beisbol-rojas-cinturon-rawlings-l-adulto.jpg'),('Casco de Béisbol Rawlings Rojo Junior',NULL,'Casco diseñado para proteger al bateador junior.\nConstruido plástico rígido y acolchado interno de espuma.\nEste casco de Béisbol juvenil se ajusta desde la talla 6 3/8 hasta la talla 7 1/8.',49990,3,'Rawlings',89990,44,'https://www.gympro.cl/10307-thickbox_default/casco-de-beisbol-rawlings-rojo-junior.jpg');
/*!40000 ALTER TABLE `baseball` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-06 20:29:53
