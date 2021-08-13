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
public class Record {
    private int recordId;
    private String playerName;
    private String itemName;

    public Record(int recordId, String playerName, String itemName) {
        this.recordId = recordId;
        this.playerName = playerName;
        this.itemName = itemName;
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }
    
    
    
    
}
