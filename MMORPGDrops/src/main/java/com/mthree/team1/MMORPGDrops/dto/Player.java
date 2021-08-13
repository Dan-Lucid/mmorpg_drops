/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.team1.MMORPGDrops.dto;

/**
 *
 * @author lucid
 */
public class Player {
    private int playerId;
    private String playerName;
    private String teamName;

    public Player() {
        
    }
    
    public Player(int playerId, String playerName) {
        this.playerId = playerId;
        this.playerName = playerName;
    }

    public Player(int playerId, String playerName, String teamName) {
        this.playerId = playerId;
        this.playerName = playerName;
        this.teamName = teamName;
    }
    
    public Player( String playerName, String teamName) {
        this.playerName = playerName;
        this.teamName = teamName;
    }

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
    
    
}
