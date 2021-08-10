/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.team1.MMORPGDrops.service;

import com.mthree.team1.MMORPGDrops.dto.Hiscore;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author lucid
 */
@Service
public interface ServiceLayer {

    String addPlayer(String playerName);
    String removePlayer(String playerName);
    String addTeam(String teamName);
    String removeTeam(String teamName);
    String addLoot(String playerName, String  itemName);
    String removeLoot(String playerName, String  itemName);
    String joinTeam(String playerName, String  teamName);
    String leaveTeam(String playerName, String  teamName);
    List<Hiscore> getPlayerHiscores();
    List<Hiscore> getTeamHiscores();
    Hiscore getPersonalPoints(String playerName);
    Hiscore getTeamPoints(String teamName);
    
}