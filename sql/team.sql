CREATE TABLE `team` (
  `TeamID` int NOT NULL AUTO_INCREMENT,
  `TeamName` varchar(45) NOT NULL,
  PRIMARY KEY (`TeamID`),
  UNIQUE KEY `TeamName_UNIQUE` (`TeamName`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
