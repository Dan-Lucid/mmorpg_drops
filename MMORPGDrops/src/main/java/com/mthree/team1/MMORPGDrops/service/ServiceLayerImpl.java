/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.team1.MMORPGDrops.service;

import com.mthree.team1.MMORPGDrops.dao.DatabaseDao;
import com.mthree.team1.MMORPGDrops.dto.Hiscore;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author lucid
 */
@Service
public class ServiceLayerImpl implements ServiceLayer{
    
    @Autowired
    DatabaseDao dao;
    
    
    @Override
    public String addPlayer(String playerName) {
        return dao.addPlayer(playerName);
    }

    @Override
    public String removePlayer(String playerName) {
        return dao.removePlayer(playerName);
    }

    @Override
    public String addTeam(String teamName) {
        return dao.addTeam(teamName);
    }

    @Override
    public String removeTeam(String teamName) {
        return dao.removeTeam(teamName);
    }

    @Override
    public String addLoot(String playerName, String  itemName) {
        return dao.addLoot(playerName, itemName);
    }

    @Override
    public String removeLoot(String playerName, String  itemName) {
        return dao.removeLoot(playerName, itemName);
    }

    @Override
    public String joinTeam(String playerName, String  teamName) {
        return dao.joinTeam(playerName, teamName);
    }

    @Override
    public String leaveTeam(String playerName, String  teamName) {
        return dao.leaveTeam(playerName, teamName);
    }

    @Override
    public List<Hiscore> getPlayerHiscores() {
        return dao.getPlayerHiscores();
    }

    @Override
    public List<Hiscore> getTeamHiscores() {
        return dao.getTeamHiscores();
    }

    @Override
    public Hiscore getPersonalPoints(String playerName) {
        return dao.getPersonalPoints(playerName);
    }

    @Override
    public Hiscore getTeamPoints(String teamName) {
        return dao.getTeamPoints(teamName);
    }
}
