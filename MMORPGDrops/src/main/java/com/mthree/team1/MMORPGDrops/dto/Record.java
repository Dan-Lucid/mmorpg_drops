/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.team1.MMORPGDrops.dto;

import java.time.LocalDateTime;

/**
 *
 * @author lucid
 */
public class Record {
    private int recordId;
    private int playerId;
    private int itemId;
    private LocalDateTime timeReceived;

    public Record(int recordId, int playerId, int itemId) {
        this.recordId = recordId;
        this.playerId = playerId;
        this.itemId = itemId;
        this.timeReceived = timeReceived;
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public LocalDateTime getTimeReceived() {
        return timeReceived;
    }

    public void setTimeReceived(LocalDateTime timeReceived) {
        this.timeReceived = timeReceived;
    }
    
    
}
