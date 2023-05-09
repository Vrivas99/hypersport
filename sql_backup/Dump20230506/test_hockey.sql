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
-- Table structure for table `hockey`
--

DROP TABLE IF EXISTS `hockey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hockey` (
  `TITULO` varchar(48) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Column_2` int DEFAULT NULL,
  `DESCRIPCION` varchar(207) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `PRECIO` int DEFAULT NULL,
  `CANTIDAD` int DEFAULT NULL,
  `MARCA` varchar(7) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `PRECIO_ORIGIN` int DEFAULT NULL,
  `DESCU` int DEFAULT NULL,
  `Imagen` varchar(96) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hockey`
--

LOCK TABLES `hockey` WRITE;
/*!40000 ALTER TABLE `hockey` DISABLE KEYS */;
INSERT INTO `hockey` VALUES ('Bolso para Palo de Hockey',NULL,'Bolso para Stick de Hockey, Capacidad  para 3 raquetas.\nIncluye 3 compartimentos espaciosos, y 4 pequeño a los lados, para objetos personales,',21590,15,'Simbra',26600,19,'https://www.gympro.cl/7364-thickbox_default/bolso-para-palo-de-hockey.jpg'),('Funda Simple Palo de Hockey Simbra',NULL,'Funda de Hockey Simple, con diseño simple y liviano, esta funda es ideal para transportar un palo cómodamente. Posee una correa para calzarla al hombro y cierre de velcro.',5390,14,'Simbra',7190,25,'https://www.gympro.cl/2623-thickbox_default/funda-simple-palo-de-hockey-simbra.jpg'),('Canillera de Hockey Mercian Anatómica Azul',NULL,'Canillera Rígidas con Protección Acolchada interna\nIdeal para proteger tus espinillera y tobillos de impactos y golpes, en tus entrenamientos de Hockey.',25990,13,'Mercian',31490,17,'https://www.gympro.cl/8187-thickbox_default/canillera-de-hockey-mercian-anatomica-azul.jpg'),('Canillera de Hockey Mercian profesionales Rosado',NULL,'Canillera Rígidas con Protección Acolchada interna\nIdeal para proteger tus espinillera y tobillos de impactos y golpes, en tus entrenamientos de Hockey.',25990,13,'Mercian',31490,17,'https://www.gympro.cl/8186-thickbox_default/canillera-de-hockey-mercian-profesionales-rosado.jpg'),('Pelota de Hockey Infantil Simbra',NULL,'Bocha de Hockey, este modelo de pelota permite mayor control en tus juegos recreacionales, debido a su material de PVC y peso.',4290,12,'Simbra',6990,39,'https://www.gympro.cl/8773-thickbox_default/pelota-de-hockey-infantil-simbra.jpg'),('Pelota de Hockey Match Simbra',NULL,'Pelota de Hockey, modelo Match, con una medida perfecta para la práctica de este deporte, su peso y material de composición permite un mayor control y rapidez en los pases.',4990,10,'Simbra',6990,29,'https://www.gympro.cl/2721-thickbox_default/pelota-de-hockey-match-simbra.jpg'),('Pelota de Hockey Dimple Simbra',NULL,'Pelota de Hockey, modelo Dimple, con una medida perfecta para la práctica de este deporte, su peso y material de composición permite un mayor control y rapidez en los pases.',5990,10,'Simbra',6990,14,'https://www.gympro.cl/2715-thickbox_default/pelota-de-hockey-dimple-simbra.jpg'),('Pelota de Hockey Glitter Simbra',NULL,'Pelota de Hockey, modelo Dimple, con una medida perfecta para la práctica de este deporte, su peso y material de composición permite un mayor control y rapidez en los pases.',4990,10,'Simbra',6990,29,'https://www.gympro.cl/9088-thickbox_default/pelota-de-hockey-glitter-simbra.jpg'),('Palo de Hockey Glasy 36\" Simbra',NULL,'Palo de Hockey Iniciación, Modelo Simbra.\nConfeccionado en madera, permite realizar golpes con potencia y precisión.',21990,6,'Simbra',29990,27,'https://www.gympro.cl/9327-thickbox_default/palo-de-hockey-glasy-36-simbra.jpg'),('Palo de Hockey Simbra School 32\"',NULL,'El Bastón de hockey Simbra para Niños, es el instrumento que puedes utilizar para la iniciación de tu hija/o en este hermoso deporte, el modelo School está diseñado para niñas/os con altura de +1.20/-1.45 m.',18990,7,'Simbra',19990,5,'https://www.gympro.cl/7618-thickbox_default/palo-de-hockey-simbra-school-32.jpg'),('Palo de Hockey Simbra School 30\"',NULL,'El Bastón de hockey Simbra para Niños, es el instrumento que puedes utilizar para la iniciación de tu hija/o en este hermoso deporte, el modelo School está diseñado para niñas/os con altura de +1.20/-1.45 m.',18990,7,'Simbra',19990,5,'https://www.gympro.cl/7616-thickbox_default/palo-de-hockey-simbra-school-30.jpg'),('Palo de Hockey Simbra School 28\"',NULL,'El Bastón de hockey Simbra para Niños, es el instrumento que puedes utilizar para la iniciación de tu hija/o en este hermoso deporte, el modelo School está diseñado para niñas/os con altura de +1.00/-1.25 m.',18990,7,'Simbra',19990,5,'https://www.gympro.cl/7613-thickbox_default/palo-de-hockey-simbra-school-28.jpg'),('Palo de Hockey Simbra School 37\" Rosado',NULL,'El Bastón de hockey Simbra es el instrumento que puedes utilizar para la iniciación de tu hija/o en este hermoso deporte, el modelo School está diseñado para niñas/os con altura de +1.65 m.',18990,7,'Simbra',19990,5,'https://www.gympro.cl/9319-thickbox_default/palo-de-hockey-simbra-school-37-rosado.jpg'),('Bolso para Palo de Hockey Mitre Celeste',NULL,'Bolso mochila para llevar en tu espalda. Construido con hilo de alta resistencia. Diseño ergonómico, con acolchado en las correas para llevar cómodamente. Apto para palos de hasta 38\'\'',44990,2,'Mitre',52490,14,'https://www.gympro.cl/8783-thickbox_default/bolso-para-palo-de-hockey-mitre-celeste.jpg'),('Canilleras de Hockey Simbra Celeste',NULL,'Canillera Rígidas con Protección Acolchada interna\nIdeal para proteger tus espinillera y tobillos de impactos y golpes, en tus entrenamientos de Hockey.',18990,3,'Simbra',24990,24,'https://www.gympro.cl/7821-thickbox_default/canilleras-de-hockey-simbra-celeste.jpg'),('Canilleras de Hockey Simbra Rosado',NULL,'Canillera Rígidas con Protección Acolchada interna\nIdeal para proteger tus espinillera y tobillos de impactos y golpes, en tus entrenamientos de Hockey.',22990,3,'Simbra',24990,8,'https://www.gympro.cl/7820-thickbox_default/canilleras-de-hockey-simbra-rosado.jpg'),('Patines en Linea DRB Speed Azul',NULL,'Patines en Línea, modelo Speed\nColoridos con ruedas de poliuretano que absorben las vibraciones y rodamientos ABEC-9, que garantizan seguridad a velocidades medias.',56390,6,'DRB',81590,31,'https://www.gympro.cl/5962-thickbox_default/patines-en-linea-drb-speed-azul.jpg'),('Patines 4 Ruedas Elite DRB Negro',NULL,'Patines 4 Ruedas, modelo Elite\nColoridos con ruedas de poliuretano que absorben las vibraciones y rodamientos ABEC-7, que garantizan seguridad a velocidades medias.',44390,6,'DRB',64790,31,'https://www.gympro.cl/8183-thickbox_default/patines-4-ruedas-elite-drb-negro.jpg'),('Patines en Linea Ajustable HD RG ABEC-7',NULL,'Patines en Línea, ideales para recreación y deporte\nColoridos con ruedas 100% Silicona que absorben las vibraciones y rodamientos ABEC-7, que garantizan seguridad a velocidades medias, diseño con frenos',49990,4,'HD',60000,17,'https://www.gympro.cl/9386-thickbox_default/patines-en-linea-ajustable-hd-rg-abec-7.jpg'),('Patines en Linea Ajustable HD NF ABEC-7',NULL,'Patines en Línea, ideales para recreación y deporte\nColoridos con ruedas 100% Silicona que absorben las vibraciones y rodamientos ABEC-7, que garantizan seguridad a velocidades medias, diseño sin frenos',59990,5,'HD',70000,14,'https://www.gympro.cl/9153-thickbox_default/patines-en-linea-ajustable-hd-nf-abec-7.jpg'),('Canillera de Hockey Azul Simbra',NULL,'Canillera de Hockey para niños. Protege las Espinillera gracias a su cubierta dura de PVC Reforzado y esta acolchada con Espuma Eva. ',4790,9,'Simbra',6990,31,'https://www.gympro.cl/10039-thickbox_default/canillera-de-hockey-azul-simbra.jpg'),('Canillera de Hockey Fucsia Simbra',NULL,'Set de dos Canillera de Hockey para niños.\nProtege las Espinillera gracias a su cubierta dura de PVC Reforzado, internamente esta acolchada con Espuma Eva.',4790,9,'Simbra',5990,20,'https://www.gympro.cl/10041-thickbox_default/canillera-de-hockey-fucsia-simbra.jpg'),('Guante para Hockey Simbra Fluor',NULL,'Modelo con Palma abierta para un mejor agarre\nCierre regulable con velcro que permite un calce firme y colocarla y quitarla rápidamente.',16990,6,'Simbra',18990,11,'https://www.gympro.cl/9070-thickbox_default/guante-para-hockey-simbra-fluor.jpg'),('Guante para Hockey Simbra Azul',NULL,'Modelo con Palma abierta para un mejor agarre\nCierre regulable con velcro que permite un calce firme y colocarla y quitarla rápidamente.',10990,5,'Simbra',14490,24,'https://www.gympro.cl/9079-thickbox_default/guante-para-hockey-simbra-azul.jpg'),('Guante para Hockey Simbra Naranjo',NULL,'Modelo con Palma abierta para un mejor agarre\nCierre regulable con velcro que permite un calce firme y colocarla y quitarla rápidamente.',10990,9,'Simbra',15990,31,'https://www.gympro.cl/9073-thickbox_default/guante-para-hockey-simbra-naranjo.jpg');
/*!40000 ALTER TABLE `hockey` ENABLE KEYS */;
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
