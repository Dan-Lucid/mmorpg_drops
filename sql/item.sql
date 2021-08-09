CREATE TABLE `item` (
  `ItemID` int NOT NULL AUTO_INCREMENT,
  `ItemName` varchar(45) NOT NULL,
  `PointValue` int NOT NULL,
  PRIMARY KEY (`ItemID`),
  UNIQUE KEY `ItemName_UNIQUE` (`ItemName`)
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
