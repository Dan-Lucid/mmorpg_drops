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
public class Item {
    private int itemId;
    private String itemName;
    private int pointValue;

    public Item(int itemId, String itemName, int pointValue) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.pointValue = pointValue;
    }
    
    public Item(int itemId, String itemName) {
        this.itemId = itemId;
        this.itemName = itemName;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getPointValue() {
        return pointValue;
    }

    public void setPointValue(int pointValue) {
        this.pointValue = pointValue;
    }
    
    
}
