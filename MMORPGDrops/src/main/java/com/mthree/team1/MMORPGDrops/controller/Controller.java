/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.team1.MMORPGDrops.controller;

import com.mthree.team1.MMORPGDrops.dto.Hiscore;
import com.mthree.team1.MMORPGDrops.dto.Player;
import com.mthree.team1.MMORPGDrops.service.ServiceLayerImpl;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

    @GetMapping("/addPlayer/{playerName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> addPlayer(@PathVariable String playerName) {
        String addedPlayer = service.addPlayer(playerName);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(addedPlayer + " added to competition.");
    }
    
    @GetMapping("/removePlayer/{playerName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> removePlayer(@PathVariable String playerName) {
        String removedPlayer = service.removePlayer(playerName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(removedPlayer + " removed from competition.");
    }
    
    @GetMapping("/addTeam/{teamName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> addTeam(@PathVariable String teamName) {
        String addedTeam = service.addTeam(teamName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("Team " + addedTeam + " added to competition.");
    }
    
    @GetMapping("/removeTeam/{teamName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> removeTeam(@PathVariable String teamName) {
        String removedTeam = service.removeTeam(teamName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("Team " + removedTeam + " removed from competition.");
    }
    
    @GetMapping("/addLoot/{playerName}/{itemName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> addLoot(@PathVariable String playerName, @PathVariable String itemName) {
        String addedLoot = service.addLoot(playerName, itemName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(addedLoot + " added for "+ playerName);
    }
    
    @GetMapping("/removeLoot/{playerName}/{itemName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> removeLoot(@PathVariable String playerName, @PathVariable String itemName) {
        String removedLoot = service.removeLoot(playerName, itemName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(removedLoot + " removed for " + playerName);
    }
    
    @GetMapping("/joinTeam/{playerName}/{teamName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> joinTeam(@PathVariable String playerName, @PathVariable String teamName) {
        String joinedTeam = service.joinTeam(playerName, teamName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(playerName + " joined Team " + joinedTeam);
    }
    
    @GetMapping("/leaveTeam/{playerName}/{teamName}")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> leaveTeam(@PathVariable String playerName, @PathVariable String teamName) {
        String leftTeam = service.leaveTeam(playerName, teamName);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(playerName + " left Team " + leftTeam);
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
    
}
