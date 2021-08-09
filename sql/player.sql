CREATE TABLE `player` (
  `PlayerID` int NOT NULL AUTO_INCREMENT,
  `PlayerName` varchar(12) NOT NULL,
  `TeamID` int DEFAULT NULL,
  PRIMARY KEY (`PlayerID`),
  UNIQUE KEY `PlayerName_UNIQUE` (`PlayerName`),
  KEY `TeamID_idx` (`TeamID`),
  CONSTRAINT `TeamID` FOREIGN KEY (`TeamID`) REFERENCES `team` (`TeamID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
