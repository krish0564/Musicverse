-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: musicverse
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `releaseDate` datetime DEFAULT NULL,
  `albumCover` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `artistId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artistId` (`artistId`),
  CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (4,'After Hours','2019-12-21 18:30:00','https://res.cloudinary.com/duanrxtiy/image/upload/v1725191572/gkfnjyvuwovb4wjfubpj.png','2024-09-01 11:52:53','2024-09-01 11:52:53',1),(6,'Arjit Hits','2019-12-21 18:30:00','https://res.cloudinary.com/duanrxtiy/image/upload/v1725204386/i9xd6fp6hq41utxatj8h.jpg','2024-09-01 15:26:26','2024-09-01 15:26:26',2),(7,'NCS','2019-12-21 18:30:00','https://res.cloudinary.com/duanrxtiy/image/upload/v1725205589/cl0s9zjb6ueypeunmkrn.jpg','2024-09-01 15:46:29','2024-09-01 15:46:29',3);
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `bio` text,
  `artistCoverPic` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'\"The Weeknd\"','\"Pop Artist','https://res.cloudinary.com/duanrxtiy/image/upload/v1725191068/m5yztbgbap2b8fc8bdqt.jpg','2024-09-01 11:44:28','2024-09-01 11:44:28'),(2,'Arjit Singh','Pop Artist','https://res.cloudinary.com/duanrxtiy/image/upload/v1725204267/nynotjqasozj86teaa5m.jpg','2024-09-01 15:24:28','2024-09-01 15:24:28'),(3,'Cartoon','Electronic Music','https://res.cloudinary.com/duanrxtiy/image/upload/v1725205491/cuexnbhl2alb0w721mv3.jpg','2024-09-01 15:44:52','2024-09-01 15:44:52');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'RnB','2024-08-31 12:07:19','2024-08-31 12:07:19'),(2,'Hip Hop','2024-08-31 12:07:36','2024-08-31 12:07:36'),(3,'Rap','2024-08-31 12:07:56','2024-08-31 12:07:56'),(4,'Pop','2024-08-31 12:08:15','2024-08-31 12:08:15'),(5,'Rock','2024-08-31 12:08:26','2024-08-31 12:08:26'),(6,'Jazz','2024-08-31 12:09:38','2024-08-31 12:09:38'),(7,'Disco','2024-08-31 12:09:58','2024-08-31 12:09:58'),(8,'Punjabi','2024-08-31 12:10:29','2024-08-31 12:10:29'),(9,'Hindi','2024-08-31 12:10:39','2024-08-31 12:10:39'),(10,'Hindi pop','2024-09-01 10:54:29','2024-09-01 10:54:29');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listeninghistories`
--

DROP TABLE IF EXISTS `listeninghistories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listeninghistories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trackName` varchar(255) NOT NULL,
  `artistName` varchar(255) NOT NULL,
  `listenedAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listeninghistories`
--

LOCK TABLES `listeninghistories` WRITE;
/*!40000 ALTER TABLE `listeninghistories` DISABLE KEYS */;
/*!40000 ALTER TABLE `listeninghistories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlists`
--

DROP TABLE IF EXISTS `playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlists`
--

LOCK TABLES `playlists` WRITE;
/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;
INSERT INTO `playlists` VALUES (1,'My Playlist 1','2024-09-01 19:52:36','2024-09-01 19:52:36',1),(2,'My Playlist 1','2024-09-01 19:53:04','2024-09-01 19:53:04',1),(3,'My Playlist 1','2024-09-01 19:53:23','2024-09-01 19:53:23',1),(4,'My Playlist 1','2024-09-01 19:53:55','2024-09-01 19:53:55',1);
/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlistsongs`
--

DROP TABLE IF EXISTS `playlistsongs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlistsongs` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PlaylistId` int NOT NULL,
  `SongId` int NOT NULL,
  PRIMARY KEY (`PlaylistId`,`SongId`),
  KEY `SongId` (`SongId`),
  CONSTRAINT `playlistsongs_ibfk_1` FOREIGN KEY (`PlaylistId`) REFERENCES `playlists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `playlistsongs_ibfk_2` FOREIGN KEY (`SongId`) REFERENCES `songs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlistsongs`
--

LOCK TABLES `playlistsongs` WRITE;
/*!40000 ALTER TABLE `playlistsongs` DISABLE KEYS */;
INSERT INTO `playlistsongs` VALUES ('2024-09-01 20:06:17','2024-09-01 20:06:17',1,1);
/*!40000 ALTER TABLE `playlistsongs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `length` time DEFAULT NULL,
  `file` varchar(255) NOT NULL,
  `coverImage` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `artistId` int DEFAULT NULL,
  `albumId` int DEFAULT NULL,
  `genreId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artistId` (`artistId`),
  KEY `albumId` (`albumId`),
  KEY `genreId` (`genreId`),
  CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `songs_ibfk_2` FOREIGN KEY (`albumId`) REFERENCES `albums` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `songs_ibfk_3` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'\"Heartless\"','00:02:50','https://res.cloudinary.com/duanrxtiy/video/upload/v1725191742/oouimh58f1x1ttipsym8.mp3','https://res.cloudinary.com/duanrxtiy/image/upload/v1725191743/a1ppxrgwvzl9s99odhic.jpg','2024-09-01 11:55:43','2024-09-01 11:55:43',1,4,1),(2,'heeriye','00:03:34','https://res.cloudinary.com/duanrxtiy/video/upload/v1725204498/qufdjgmb91cjqyeapmvq.mp4','https://res.cloudinary.com/duanrxtiy/image/upload/v1725204499/njih9qqq99jzs1mufmxk.jpg','2024-09-01 15:28:19','2024-09-01 15:28:19',1,6,9),(3,'judaiyaan','00:02:59','https://res.cloudinary.com/duanrxtiy/video/upload/v1725204584/rml7hfauebdqhscwfbmh.mp3','https://res.cloudinary.com/duanrxtiy/image/upload/v1725204586/iviaopa4zekf9dwz4pla.jpg','2024-09-01 15:29:46','2024-09-01 15:29:46',1,6,9),(4,'ae dil hai muskil','00:03:01','https://res.cloudinary.com/duanrxtiy/video/upload/v1725204673/mxwqwvodbae4msnmgiar.mp3','https://res.cloudinary.com/duanrxtiy/image/upload/v1725204674/nmyxlyin6mtsndgvw4p4.jpg','2024-09-01 15:31:15','2024-09-01 15:31:15',1,6,9),(5,'Tum hi ho','03:09:00','https://res.cloudinary.com/duanrxtiy/video/upload/v1725205331/ema1xuxuhh9rpvi6cf9c.mp3','https://res.cloudinary.com/duanrxtiy/image/upload/v1725205332/elftyu7cklxr8xuftad2.jpg','2024-09-01 15:42:12','2024-09-01 15:42:12',1,6,9),(6,'On and On','02:08:00','https://res.cloudinary.com/duanrxtiy/video/upload/v1725205659/wgzjyokwmdopwnwjnza9.mp3','https://res.cloudinary.com/duanrxtiy/image/upload/v1725205660/puup6pyqgk2qu8kfv1ib.jpg','2024-09-01 15:47:40','2024-09-01 15:47:40',3,7,9),(7,'On and On','00:00:03','https://res.cloudinary.com/duanrxtiy/video/upload/v1725205828/alxvuboh6nq4t5yq5x4v.mp3','https://res.cloudinary.com/duanrxtiy/image/upload/v1725205829/gvuhkg4kj9tc3aw7zbpc.jpg','2024-09-01 15:50:29','2024-09-01 15:50:29',3,7,9),(8,'On and On','00:03:28','https://res.cloudinary.com/duanrxtiy/video/upload/v1725206025/k4uok9hevhaovy37pnvg.mp3','https://res.cloudinary.com/duanrxtiy/image/upload/v1725206027/glmsujssviaaos0nlesp.jpg','2024-09-01 15:53:47','2024-09-01 15:53:47',3,7,9);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userpreferences`
--

DROP TABLE IF EXISTS `userpreferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userpreferences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `theme` varchar(255) NOT NULL DEFAULT 'light',
  `notificationEnabled` tinyint(1) NOT NULL DEFAULT '1',
  `preferredGenres` json DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userpreferences`
--

LOCK TABLES `userpreferences` WRITE;
/*!40000 ALTER TABLE `userpreferences` DISABLE KEYS */;
INSERT INTO `userpreferences` VALUES (1,'light',1,NULL,'2024-09-01 17:46:24','2024-09-01 17:46:24'),(2,'light',1,NULL,'2024-09-02 00:34:29','2024-09-02 00:34:29');
/*!40000 ALTER TABLE `userpreferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'krishnasureka','krishnasureka0564@gmail.com','$2a$10$xtSEdGhZS7/Yttl70eVzfuyf7dEBWVbP/B35mXGcsLc4tMCteYBQC','2024-08-31 09:35:42','2024-08-31 09:35:42'),(2,'krishsureka','krishnasureka0546@gmail.com','$2a$10$0ojEA0fCCPtBQp1dmcKXhO.BG.R0N2BtgNmBip/tOx1C5Kb8Iv0DO','2024-09-01 17:46:23','2024-09-01 17:46:23'),(4,'krish','krishna@12.com','$2a$10$YYwXhDk0Va.YlnFwodfRb.AU49tfYPJ3lD9c7TEL1Uyj4Hxb/fWrK','2024-09-02 00:34:28','2024-09-02 00:34:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-02 12:34:32
