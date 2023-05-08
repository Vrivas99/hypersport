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
-- Table structure for table `voley`
--

DROP TABLE IF EXISTS `voley`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voley` (
  `TITULO` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Column_2` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `DESCRIPCION` varchar(257) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `PRECIO` int DEFAULT NULL,
  `CANTIDAD` int DEFAULT NULL,
  `MARCA` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `PRECIO_ORIGIN` int DEFAULT NULL,
  `DESCU` int DEFAULT NULL,
  `Imagen` varchar(92) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voley`
--

LOCK TABLES `voley` WRITE;
/*!40000 ALTER TABLE `voley` DISABLE KEYS */;
INSERT INTO `voley` VALUES ('Rodilleras Mc David Elasticada',NULL,'Rodillera McDavid\nCon tecnología Respirable para mantener el calor y evaporar el sudor\nProtege tus rodillas de forma cómoda y es fácil de colocar',12590,14,'McDavid',20990,40,'https://www.gympro.cl/3952-thickbox_default/rodilleras-mc-david-elasticada.jpg'),('Pelota de Voleibol Molten V5M/3500',NULL,'Pelota de Voleibol profesional\nUsala para competencias escolares y partidos amistosos de Voley',42990,13,'Molten',49990,14,'https://www.gympro.cl/2019-thickbox_default/pelota-de-voleibol-molten-v5m3500.jpg'),('Rodilleras Voleibol DRB',NULL,'Rodillera multideporte Clásica DRB protege tus articulaciones amortiguando tu rodilla al caer, protege la zona y mantiene fierme la rodilla.',8390,22,'DRB',11990,30,'https://www.gympro.cl/10541-thickbox_default/rodilleras-voleibol-drb.jpg'),('Malla o Red de Voleibol DRB de 2.6 mm',NULL,'Malla profesional de voleibol DRB\nConfeccionada con medidas profesionales, para uso profesional y de entrenamiento. ',89990,1,'DRB',109990,18,'https://www.gympro.cl/8686-thickbox_default/malla-o-red-de-voleibol-drb-de-26-mm.jpg'),('Rodilleras de Voleibol DRB Multideporte',NULL,'Rodillera Alta Densidad. Protege la articulaciones, amortiguando tu rodilla. Proporciona elasticidad y durabilidad. ',8990,15,'DRB',12990,31,'https://www.gympro.cl/1880-thickbox_default/rodilleras-de-voleibol-drb-multideporte.jpg'),('Pelota de voleibol DRB - Classics beach',NULL,'Pelota de voley DRB modelo Classics Beach.\n\nIdeal para encuentros playeros, diseñada para encuentros amistosos, partidos con amigos, o simple diversión.',8990,10,'DRB',10990,18,'https://www.gympro.cl/8776-thickbox_default/pelota-de-voleibol-drb-classics-beach.jpg'),('Balón de Voleibol DRB Soft Touch Italy 3.0',NULL,'Pelota de voley DRB que se utilizalo para tus partidos de entrenamiento o para amistosos. Es una excelente alternatiba para aquellos que busquen una pelota de voleibol competente.\n',11990,10,'DRB',15990,25,'https://www.gympro.cl/8775-thickbox_default/balon-de-voleibol-drb-soft-touch-italy-30.jpg'),('Cintillos Deportivos',NULL,'Cintillo Sufix usado para secar la transpiración, además de poder usar para alejar el cabello de los ojos\nMaterial del cintillo: Algodón máxima absorción',2590,15,'Sufix',3990,35,'https://www.gympro.cl/6563-thickbox_default/cintillos-deportivos.jpg'),('Mangas para Deporte + Protección UV',NULL,'Mangas para el sol, son eficaces previniendo quemaduras. Material suave y fresco. Mangas livianas.',3990,10,'GymPro',4990,20,'https://www.gympro.cl/8781-thickbox_default/mangas-para-deporte-proteccion-uv.jpg'),('Codera de Lanzamiento Honeycomb Olymphus',NULL,'Protección deportiva de alta compresión Olymphus, ideal para deportistas exigentes. Fabricado en tela poliéster y spandex, haciéndola de un material transpirable.',16990,6,'Olymphus',24990,32,'https://www.gympro.cl/9467-thickbox_default/codera-de-lanzamiento-honeycomb-olymphus.jpg'),('Malla o Red de Voleibol DRB de 1.9 mm acerada',NULL,'Malla profesional de voleibol DRB. Confeccionada con medidas profesionales, para uso profesional y de entrenamiento.  Red de acero torcido con protección superior y lateral y huincha central.',46990,12,'DRB',69990,33,'https://www.gympro.cl/8796-thickbox_default/malla-o-red-de-voleibol-drb-de-19-mm-acerada.jpg'),('Balón Voleibol Mikasa V330w',NULL,'Pelota de Voley, de tacto suave, confeccionado en alta calidad. Úsala para tus partidos Amistosos o para campeonatos',39990,11,'Mikasa',60000,33,'https://www.gympro.cl/9429-thickbox_default/balon-voleibol-mikasa-v330w.jpg'),(NULL,'Malla de Voleibol 2.0 mm Acerada','Red profesional de Voleibol Acerada para una mayor durabilidad. Respeta las medidas estándar para uso de entrenamiento y competitivo. con acero torcido y forrado, además cuenta con protección superior y lateral.',29990,23,'GymPro',39990,25,'https://www.gympro.cl/10509-thickbox_default/malla-de-voleibol-20-mm-acerada.jpg'),('Pizarra táctica de Voleibol DRB',NULL,'Pizarra Táctica para ensayar las mejores jugadas en tus entrenamientos y llevar a cabo a la perfección durante los partidos. Con la Pizarra de Entrenamiento de Voley\npodrás interactúar con tu equipo de forma organizada.',12990,20,'DRB',18990,32,'https://www.gympro.cl/3142-thickbox_default/pizarra-tactica-de-voleibol-drb.jpg'),('Balón de Voleibol Official Torpedo Beach',NULL,'Pelota de Voley Torpedo. Juega y domina el partido debido adherencia a tus manos.\nTamaño Oficial.\nÚtilizalo para tus partidos de voley, entrenamiento o para amistosos',8990,19,'Torpedo',11990,25,'https://www.gympro.cl/10703-thickbox_default/balon-de-voleibol-drb-n-5.jpg'),('Balón Voleibol Mikasa MVA350',NULL,'Pelota de Voley, de tacto suave, confeccionado en alta calidad. Úsala para tus partidos Amistosos o para campeonatos',19990,16,'Mikasa',28990,31,'https://www.gympro.cl/5372-thickbox_default/balon-voleibol-mikasa-mva350.jpg'),('Chaqueta Gateway Everlast',NULL,'Polerón de mujer con Gorro y Bolsillos, de la prestigiosa Marca Everlast, cómoda y liviana para usarla en su entrenamiento, o su día a día, realizado con material Poliester y Elástico. ',25990,14,'Everlast',33990,24,'https://www.gympro.cl/2832-thickbox_default/chaqueta-gateway-everlast.jpg'),('Chaqueta Basic Everlast chaqueta deportiva',NULL,'Poleron de mujer, de la prestigiosa Marca Everlast, cómoda y liviana para usarla en su entrenamiento, o su día a día. Confeccionada con materiales de excelente calidad y  sistema Ever Dry que atrae la humedad hacia el exterior, para lograr un secado rápido.',23990,10,'Everlast',33990,29,'https://www.gympro.cl/2897-thickbox_default/chaqueta-basic-everlast-chaqueta-deportiva.jpg'),('Tablero Marcador Cambio Jugador',NULL,'Tablero para indicar el cambio de jugador en cualquier competición deportiva y que sea visible desde todos los ángulos del campo.\nNúmeros de gran tamaño, para mayor visibilidad.',19990,10,'GymPro',29990,33,'https://www.gympro.cl/7270-thickbox_default/tablero-marcador-cambio-jugador.jpg'),('Carro Portabalones Vixen',NULL,'Carro portabalones perfecto para almacenar y transportar todo tipo de balones. Carro metálico con 4 ruedas giratorias en 360º y un canasto para los balones. Otorga gran estabilidad y permite moverse con facilidad.',99990,6,'Vixen',149990,33,'https://www.gympro.cl/12707-thickbox_default/carro-portabalones-vixen.jpg'),('Porta Botellas DRB',NULL,'Puede contener 6 botellas de café, cerveza o refresco, etc. Diseño plegable y ligero, muy conveniente para guardar y transportar, cuando no está en uso, se pliega fácilmente para un material simple y firme y no es fácil de dañar.',9990,15,'DRB',14990,33,'https://www.gympro.cl/12116-thickbox_default/porta-botellas-drb.jpg');
/*!40000 ALTER TABLE `voley` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-08  0:30:24
