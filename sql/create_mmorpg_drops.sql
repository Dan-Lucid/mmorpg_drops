DROP DATABASE IF EXISTS mmorpg_drops;
CREATE DATABASE mmorpg_drops;
USE mmorpg_drops;

CREATE TABLE `item` (
  `ItemID` int NOT NULL AUTO_INCREMENT,
  `ItemName` varchar(45) NOT NULL,
  `PointValue` int NOT NULL,
  PRIMARY KEY (`ItemID`),
  UNIQUE KEY `ItemName_UNIQUE` (`ItemName`)
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `player` (
  `PlayerID` int NOT NULL AUTO_INCREMENT,
  `PlayerName` varchar(12) NOT NULL,
  `TeamID` int DEFAULT NULL,
  PRIMARY KEY (`PlayerID`),
  UNIQUE KEY `PlayerName_UNIQUE` (`PlayerName`),
  KEY `TeamID_idx` (`TeamID`),
  CONSTRAINT `TeamID` FOREIGN KEY (`TeamID`) REFERENCES `team` (`TeamID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `record` (
  `RecordID` int NOT NULL AUTO_INCREMENT,
  `PlayerID` int NOT NULL,
  `ItemID` int NOT NULL,
  `TimeReceived` datetime NOT NULL,
  PRIMARY KEY (`RecordID`),
  KEY `PlayerID_idx` (`PlayerID`),
  KEY `ItemID_idx` (`ItemID`),
  CONSTRAINT `ItemID` FOREIGN KEY (`ItemID`) REFERENCES `item` (`ItemID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `PlayerID` FOREIGN KEY (`PlayerID`) REFERENCES `player` (`PlayerID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `team` (
  `TeamID` int NOT NULL AUTO_INCREMENT,
  `TeamName` varchar(45) NOT NULL,
  PRIMARY KEY (`TeamID`),
  UNIQUE KEY `TeamName_UNIQUE` (`TeamName`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mmorpg_drops`.`v_player_hiscores` AS select dense_rank() OVER (ORDER BY `playercores`.`Points` desc )  AS `Ranking`,`playercores`.`PlayerName` AS `PlayerName`,`playercores`.`Points` AS `Points` from (select `mmorpg_drops`.`player`.`PlayerName` AS `PlayerName`, coalesce(sum((`mmorpg_drops`.`item`.`PointValue` * count(`mmorpg_drops`.`record`.`ItemID`))) OVER (PARTITION BY `mmorpg_drops`.`record`.`PlayerID` ) ,0) AS `Points` from ((`mmorpg_drops`.`player` left join `mmorpg_drops`.`record` on((`mmorpg_drops`.`player`.`PlayerID` = `mmorpg_drops`.`record`.`PlayerID`))) left join `mmorpg_drops`.`item` on((`mmorpg_drops`.`record`.`ItemID` = `mmorpg_drops`.`item`.`ItemID`))) group by `mmorpg_drops`.`player`.`PlayerID`,`mmorpg_drops`.`record`.`ItemID` order by `Points` desc) `playercores`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mmorpg_drops`.`v_team_hiscores` AS select dense_rank() OVER (ORDER BY sum(`playercores`.`PlayerPoints`) desc )  AS `Ranking`,`mmorpg_drops`.`team`.`TeamName` AS `TeamName`,coalesce(sum(`playercores`.`PlayerPoints`),0) AS `Points` from (`mmorpg_drops`.`team` left join (select `mmorpg_drops`.`player`.`TeamID` AS `teamID`,coalesce(sum((`mmorpg_drops`.`item`.`PointValue` * count(`mmorpg_drops`.`record`.`ItemID`))) OVER (PARTITION BY `mmorpg_drops`.`record`.`PlayerID` ) ,0) AS `PlayerPoints` from ((`mmorpg_drops`.`player` left join `mmorpg_drops`.`record` on((`mmorpg_drops`.`player`.`PlayerID` = `mmorpg_drops`.`record`.`PlayerID`))) left join `mmorpg_drops`.`item` on((`mmorpg_drops`.`record`.`ItemID` = `mmorpg_drops`.`item`.`ItemID`))) group by `mmorpg_drops`.`player`.`PlayerID`,`mmorpg_drops`.`record`.`ItemID` order by `PlayerPoints` desc) `playercores` on((`mmorpg_drops`.`team`.`TeamID` = `playercores`.`teamID`))) group by `mmorpg_drops`.`team`.`TeamName`;


