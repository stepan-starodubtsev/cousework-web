-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: library_db
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `genre` enum('Фентезі', 'Наукова фантастика', 'Містика', 'Мелодрама', 'Художня література', 'Історичний', 'Трилер', 'Жахи') NOT NULL,
  `description` text,
  `status` enum('Видана на руки', 'В наявності') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `borrowerId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `borrowerId` (`borrowerId`),
  CONSTRAINT `books_ibfk_1` FOREIGN KEY (`borrowerId`) REFERENCES `visitors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Гаррі Поттер і філософський камінь','Джоан Роулінг','Фентезі','Пригоди молодого чаклуна Гаррі Поттера.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',1),(2,'1984','Джордж Оруелл','Наукова фантастика','Антиутопічний роман про тоталітарний режим.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',2),(3,'Великий Гетсбі','Ф. Скотт Фіцджеральд','Історичний','Роман про мрії, кохання та розчарування.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',3),(4,'Містика зникнення','Агата Крісті','Містика','Детективний роман про розслідування таємничого злочину.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',4),(5,'Віднесені вітром','Маргарет Мітчелл','Історичний','Роман про кохання і життя в часи громадянської війни.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',5),(6,'Чужий','Алан Дін Фостер','Наукова фантастика','Науково-фантастичний роман, заснований на популярному фільмі.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',6),(7,'Скляний замок','Джанет Уоллс','Художня література','Автобіографічна книга про життя в бідності.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',7),(8,'Літературна угода','Оксана Забужко','Художня література','Критичні есеї про сучасну українську літературу.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',8),(9,'Слідами зловмисника','Агата Крісті','Містика','Детектив про розслідування таємничих злочинів.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',9),(10,'Час мрійників','Майкл Енді','Фентезі','Пригоди в чарівному світі.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',10),(11,'Місячне світло','Людмила Улицька','Мелодрама','Книга про кохання, яке не знає меж.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',NULL),(12,'Лісова пісня','Леся Українка','Фентезі','Драма про кохання і природу.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',NULL),(13,'Загадка старого замку','Джон Тібор','Трилер','Пригоди в таємничому замку.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',NULL),(14,'Невідомі горизонти','Джеймс Кемерон','Наукова фантастика','Науково-фантастичні пригоди в космосі.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',NULL),(15,'Секрети щастя','Олена Білозерська','Художня література','Книга про пошук щастя.','Видана на руки','2024-10-08 00:50:58','2024-10-08 00:50:58',NULL);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'news.png','Виставка сучасної української літератури','На базі нашої бібліотеки відбудеться виставка сучасної української літератури, де відвідувачі зможуть ознайомитися з творами найкращих авторів останніх років.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(2,'news.png','Літературний вечір на честь Ліни Костенко','Запрошуємо на літературний вечір, присвячений творчості Ліни Костенко, де будуть зачитані вірші та проза української класики.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(3,'news.png','Приїзд відомого українського письменника Сергія Жадана','В рамках творчої ініціативи, до нас завітає Сергій Жадан, який розповість про свою творчість і останні публікації.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(4,'news.png','Книжкова виставка на тему \"Українська класика та її вплив\"','Цього місяця у нашій бібліотеці відбудеться виставка, присвячена українській класиці та її впливу на сучасне суспільство.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(5,'news.png','Творчий вечір за участю Юрія Андруховича','На нашому літературному вечорі відбудеться презентація нової книги Юрія Андруховича та дискусія про його літературні погляди.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(6,'news.png','Молодіжна літературна ініціатива \"Поетичні дебюти\"','Запрошуємо молодих авторів долучитися до нашої ініціативи та продемонструвати свої поетичні твори у дружньому середовищі.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(7,'news.png','Круглий стіл на тему \"Майбутнє української літератури\"','Організовуємо круглий стіл для обговорення розвитку сучасної української літератури за участю критиків і письменників.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(8,'news.png','Літературний вечір-презентація нової книги Оксани Забужко','Запрошуємо на презентацію нової книги Оксани Забужко, що відбудеться у нашій бібліотеці. Письменниця особисто проведе презентацію та відповість на питання відвідувачів.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(9,'news.png','Книжковий фестиваль української прози','Бібліотека організовує книжковий фестиваль української прози, де відвідувачі матимуть змогу поспілкуватися з авторами та придбати книги.','2024-10-08 00:50:55','2024-10-08 00:50:55'),(10,'news.png','Вечір авторського читання молодих українських поетів','Запрошуємо на авторське читання молодих українських поетів, які представлять свої твори в жанрі сучасної поезії.','2024-10-08 00:50:55','2024-10-08 00:50:55');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','USER') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'johndoe@example.com','$2a$10$98eRvDbJi0A2A7ruQSeR/.tWQxaAXtk5yWJwOBmSiQxLPC6.4jRRO','USER','2024-10-07 22:26:46','2024-10-07 22:26:46'),(2,'admin@mail.com','$2a$10$L3JergCE5xQxxjAlOPIRHeznunGERMhbToh7oSbK85vV/DS2JbY6K','ADMIN','2024-10-07 22:29:35','2024-10-07 22:29:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitors`
--

DROP TABLE IF EXISTS `visitors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `surname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitors`
--

LOCK TABLES `visitors` WRITE;
/*!40000 ALTER TABLE `visitors` DISABLE KEYS */;
INSERT INTO `visitors` VALUES (1,'Іваненко','Олександр','Іванович',35,'ivanenko.ol@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(2,'Петренко','Марія','Сергіївна',28,'petrenko.maria@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(3,'Шевченко','Олена','Василівна',42,'shevchenko.olena@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(4,'Коваленко','Сергій','Петрович',30,'kovalenko.serhii@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(5,'Сидоренко','Тетяна','Миколаївна',27,'sydorenko.tetyana@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(6,'Левченко','Анатолій','Григорович',50,'levchenko.anatolii@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(7,'Ткаченко','Вікторія','Іванівна',33,'tkachenko.viktoria@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(8,'Мельник','Дмитро','Анатолійович',38,'melnyk.dmytro@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(9,'Кузьменко','Світлана','Олексіївна',29,'kuzmenko.svitlana@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52'),(10,'Гриценко','Юрій','Володимирович',45,'hrytsenko.yurii@example.com','2024-10-08 00:50:52','2024-10-08 00:50:52');
/*!40000 ALTER TABLE `visitors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-08  1:46:08
