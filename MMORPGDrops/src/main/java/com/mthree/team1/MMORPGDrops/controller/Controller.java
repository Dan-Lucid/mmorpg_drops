/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.team1.MMORPGDrops.controller;

import com.mthree.team1.MMORPGDrops.dto.Hiscore;
import com.mthree.team1.MMORPGDrops.dto.Item;
import com.mthree.team1.MMORPGDrops.dto.Player;
import com.mthree.team1.MMORPGDrops.dto.Record;
import com.mthree.team1.MMORPGDrops.dto.Team;
import com.mthree.team1.MMORPGDrops.service.ServiceLayerImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lucid
 */
@RestController
public class Controller {
    @Autowired
    ServiceLayerImpl service;

    @PostMapping("/addPlayer/{playerName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Player> addPlayer(@PathVariable String playerName) {
        Player addedPlayer = service.addPlayer(playerName);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(addedPlayer);
    }
    
    @PostMapping("/removePlayer/{playerName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> removePlayer(@PathVariable String playerName) {
        String removedPlayer = service.removePlayer(playerName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(removedPlayer + " removed from competition.");
    }
    
    @PostMapping("/addTeam/{teamName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Team> addTeam(@PathVariable String teamName) {
        Team addedTeam = service.addTeam(teamName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(addedTeam);
    }
    
    @PostMapping("/removeTeam/{teamName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> removeTeam(@PathVariable String teamName) {
        String removedTeam = service.removeTeam(teamName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("Team " + removedTeam + " removed from competition.");
    }
    
    @PostMapping("/addLoot/{playerName}/{itemName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Record> addLoot(@PathVariable String playerName, @PathVariable String itemName) {
        Record addedLoot = service.addLoot(playerName, itemName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(addedLoot);
    }
    
    @PostMapping("/removeLoot/{playerName}/{itemName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> removeLoot(@PathVariable String playerName, @PathVariable String itemName) {
        String removedLoot = service.removeLoot(playerName, itemName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(removedLoot + " removed for " + playerName);
    }
    
    @PutMapping("/joinTeam/{playerName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Player> joinTeam(@PathVariable String playerName, @RequestBody String teamName) {
        teamName = teamName.replace("\"", "");
        Player editedPlayer = service.joinTeam(playerName, teamName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(editedPlayer);
    }
    
    @PostMapping("/leaveTeam/{playerName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Player> leaveTeam(@PathVariable String playerName) {
        Player editedPlayer = service.leaveTeam(playerName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(editedPlayer);
    }
    
    @GetMapping("/playerHiscores")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<Hiscore> getPlayerHiscores() {
        return service.getPlayerHiscores();
    }
    
    @GetMapping("/teamHiscores")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<Hiscore> getTeamHiscores() {
        return service.getTeamHiscores();
    }

    @GetMapping("/allPlayers")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<Player> getAllPlayers() {
        return service.getAllPlayers();
    }
    
    @GetMapping("/allRecords")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<Record> getAllRecords() {
        return service.getAllRecords();
    }
    
    @GetMapping("/allTeams")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<Team> getAllTeams() {
        return service.getAllTeams();
    }
    
    @GetMapping("/allItems")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<Item> getAllItems() {
        return service.getAllItems();
    }
}
