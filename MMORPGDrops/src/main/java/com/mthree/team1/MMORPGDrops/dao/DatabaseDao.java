/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mthree.team1.MMORPGDrops.dao;

import com.mthree.team1.MMORPGDrops.dto.Hiscore;
import com.mthree.team1.MMORPGDrops.dto.Item;
import com.mthree.team1.MMORPGDrops.dto.Player;
import com.mthree.team1.MMORPGDrops.dto.Record;
import com.mthree.team1.MMORPGDrops.dto.Team;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

/**
 *
 * @author lucid
 */
@Repository
public class DatabaseDao implements Dao {
    
    private final JdbcTemplate jdbc;

    @Autowired
    public DatabaseDao(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }
    
    @Override
    public Player addPlayer(String playerName) {
        final String ADD_PLAYER = "INSERT INTO player (PlayerName) VALUES (?);";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    ADD_PLAYER,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setString(1, playerName);
            return statement;
        }, keyHolder);
        
        Player addedPlayer = new Player(keyHolder.getKey().intValue(), playerName);
        
        return addedPlayer;
    }

    @Override
    public String removePlayer(String playerName) {
        final String REMOVE_PLAYER = "DELETE FROM player WHERE PlayerName = ?;";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    REMOVE_PLAYER,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setString(1, playerName);
            return statement;
        }, keyHolder);
        

        
        return playerName;
    }

    @Override
    public Team addTeam(String teamName) {
        final String ADD_TEAM = "INSERT INTO team (TeamName) VALUES (?);";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    ADD_TEAM,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setString(1, teamName);
            return statement;
        }, keyHolder);
        
        Team newTeam = new Team(keyHolder.getKey().intValue(), teamName);
        
        return newTeam;
    }

    @Override
    public String removeTeam(String teamName) {
        final String REMOVE_TEAM = "DELETE FROM team WHERE TeamName=?;";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    REMOVE_TEAM,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setString(1, teamName);
            return statement;
        }, keyHolder);
        

        
        return teamName;
    }

    @Override
    public Record addLoot(String playerName, String  itemName) {
        
        final String GET_PLAYER = "SELECT PlayerId, PlayerName FROM player WHERE PlayerName = ?";
        Player playerReceived = jdbc.queryForObject(GET_PLAYER, new PlayerMapper(), playerName);
        
        int playerId = playerReceived.getPlayerId();
        
        final String GET_ITEM = "SELECT itemId, ItemName FROM item WHERE itemName = ?;";
        Item itemReceived = jdbc.queryForObject(GET_ITEM, new ItemMapper(), itemName);
        
        int itemId = itemReceived.getItemId();
        
        final String ADD_LOOT = "INSERT INTO record (PlayerId, ItemId, TimeReceived) VALUES (?, ?, NOW());";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    ADD_LOOT,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setInt(1, playerId);
            statement.setInt(2, itemId);
            return statement;
        }, keyHolder);
        
        Record addedLoot = new Record(keyHolder.getKey().intValue(), playerName, itemName);
        
        
        return addedLoot;
    }

    @Override
    public String removeLoot(String playerName, String  itemName) {
        final String GET_PLAYER = "SELECT PlayerId, PlayerName FROM player WHERE PlayerName = ?";
        Player playerReceived = jdbc.queryForObject(GET_PLAYER, new PlayerMapper(), playerName);
        
        int playerId = playerReceived.getPlayerId();
        
        final String GET_ITEM = "SELECT itemId, ItemName FROM item WHERE itemName = ?;";
        Item itemReceived = jdbc.queryForObject(GET_ITEM, new ItemMapper(), itemName);
        
        int itemId = itemReceived.getItemId();
        
        final String REMOVE_LOOT = "DELETE FROM record WHERE PlayerID = ? AND ItemID = ? LIMIT 1;";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    REMOVE_LOOT,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setInt(1, playerId);
            statement.setInt(2, itemId);
            return statement;
        }, keyHolder);
        


        
        return itemName;
    }

    @Override
    public Player joinTeam(String playerName, String  teamName) {
        
        final String GET_TEAM = "SELECT TeamId, TeamName FROM team WHERE TeamName = ?;";
        Team teamJoined = jdbc.queryForObject(GET_TEAM, new TeamMapper(), teamName);
        
        final String GET_PLAYER = "SELECT PlayerId, PlayerName FROM player WHERE PlayerName = ?";
        Player playerReceived = jdbc.queryForObject(GET_PLAYER, new PlayerMapper(), playerName);
        int playerId = playerReceived.getPlayerId();
        
        int teamId = teamJoined.getTeamId();
        
        final String JOIN_TEAM = "UPDATE player SET TeamID = ? WHERE PlayerName = ?;";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    JOIN_TEAM,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setInt(1, teamId);
            statement.setString(2, playerName);
            return statement;
        }, keyHolder);
        Player updatedPlayer = new Player(playerId, playerName, teamName);
        return updatedPlayer;
    }

    @Override
    public Player leaveTeam(String playerName) { 
        final String LEAVE_TEAM = "UPDATE player SET TeamID = ? WHERE PlayerName = ?;";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        
        final String GET_PLAYER = "SELECT PlayerId, PlayerName FROM player WHERE PlayerName = ?";
        Player playerReceived = jdbc.queryForObject(GET_PLAYER, new PlayerMapper(), playerName);
        int playerId = playerReceived.getPlayerId();
        
        jdbc.update((Connection conn) -> {
            
            PreparedStatement statement = conn.prepareStatement(
                    LEAVE_TEAM,
                    Statement.RETURN_GENERATED_KEYS);
            
            statement.setNull(1, Types.INTEGER);
            statement.setString(2, playerName);
            return statement;
        }, keyHolder);
        
        Player updatedPlayer = new Player(playerId, playerName, "");
        return updatedPlayer;
    }

    @Override
    public List<Hiscore> getPlayerHiscores() {
        final String PLAYER_HISCORES = "SELECT * FROM v_player_hiscores";
        List<Hiscore> playerHS = jdbc.query(PLAYER_HISCORES, new PlayerHiscoreMapper());
        return playerHS;
    }

    @Override
    public List<Hiscore> getTeamHiscores() {
        final String TEAM_HISCORES = "SELECT * FROM v_team_hiscores";
        List<Hiscore> teamHS = jdbc.query(TEAM_HISCORES, new TeamHiscoreMapper());
        return teamHS;
    }

    @Override
    public List<Player> getAllPlayers() {
        final String ALL_PLAYERS = "SELECT PlayerId, PlayerName, TeamName FROM mmorpg_drops.player LEFT JOIN team ON player.teamID = team.teamID";
        List<Player> AllPlayers = jdbc.query(ALL_PLAYERS, new PlayersMapper());
        return AllPlayers;
    }
    
    @Override
    public List<Record> getAllRecords() {
        final String ALL_RECORDS = "SELECT RecordID, PlayerName, ItemName FROM(SELECT RecordID, PlayerName, itemID FROM record LEFT JOIN player ON player.playerID = record.playerID) a LEFT JOIN item ON a.itemID = item.itemID";
        List<Record> AllRecords = jdbc.query(ALL_RECORDS, new RecordsMapper());
        return AllRecords;
    }
    
    @Override
    public List<Team> getAllTeams() {
        final String ALL_TEAMS = "SELECT * FROM team";
        List<Team> AllTeams = jdbc.query(ALL_TEAMS, new TeamsMapper());
        return AllTeams;
    }
    
    @Override
    public List<Item> getAllItems() {
        final String ALL_ITEMS = "SELECT * FROM item";
        List<Item> AllItems = jdbc.query(ALL_ITEMS, new ItemsMapper());
        return AllItems;
    }

    private static final class PlayerMapper implements RowMapper<Player> {
        
        @Override
        public Player mapRow(ResultSet rs, int index) throws SQLException {
            Player player = new Player(rs.getInt("PlayerID"), rs.getString("PlayerName"));
            
            return player;
        }
    }
    private static final class ItemMapper implements RowMapper<Item> {
        
        @Override
        public Item mapRow(ResultSet rs, int index) throws SQLException {
            Item item = new Item(rs.getInt("itemId"), rs.getString("itemName"));
            
            return item;
        }
    }
    private static final class TeamMapper implements RowMapper<Team> {
        
        @Override
        public Team mapRow(ResultSet rs, int index) throws SQLException {
            Team team = new Team(rs.getInt("teamId"), rs.getString("teamName"));
            
            return team;
        }
    }
    private static final class PlayerHiscoreMapper implements RowMapper<Hiscore> {
        
        @Override
        public Hiscore mapRow(ResultSet rs, int index) throws SQLException {
            Hiscore hiscore = new Hiscore(rs.getInt("Ranking"), rs.getString("playerName"), rs.getInt("Points"));
            return hiscore;
        }
    }
    private static final class TeamHiscoreMapper implements RowMapper<Hiscore> {
        
        @Override
        public Hiscore mapRow(ResultSet rs, int index) throws SQLException {
            Hiscore hiscore = new Hiscore(rs.getInt("Ranking"), rs.getString("teamName"), rs.getInt("Points"));
            return hiscore;
        }
    }

    private static final class PlayersMapper implements RowMapper<Player> {

        @Override
        public Player mapRow(ResultSet rs, int index) throws SQLException {
            Player player = new Player(rs.getInt("PlayerID"), rs.getString("PlayerName"), rs.getString("TeamName"));
            return player;
        }
    }
    
    private static final class RecordsMapper implements RowMapper<Record> {

        @Override
        public Record mapRow(ResultSet rs, int index) throws SQLException {
            Record record = new Record(rs.getInt("RecordId"), rs.getString("PlayerName"), rs.getString("ItemName"));
            return record;
        }
    }
    
    private static final class TeamsMapper implements RowMapper<Team> {

        @Override
        public Team mapRow(ResultSet rs, int index) throws SQLException {
            Team team = new Team(rs.getInt("TeamId"), rs.getString("TeamName"));
            return team;
        }
    }
    
    private static final class ItemsMapper implements RowMapper<Item> {

        @Override
        public Item mapRow(ResultSet rs, int index) throws SQLException {
            Item item = new Item(rs.getInt("ItemId"), rs.getString("ItemName"),rs.getInt("PointValue"));
            return item;
        }
    }
}
