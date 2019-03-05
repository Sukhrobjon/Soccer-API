# Soccer API

### Available Endpoints
### Base URL : ```https://football-api-sg.herokuapp.com/api```

|       Method          |      Endpoint        |      Return Object                         
| -------------       |:--------------------:| ------------------------------------------
| GET                 | /leagues                       |Get all leagues         
| GET                 | /leagues/:leagueId             |Get Specific league   
| GET                 | /leagues/:leagueId/teams       |Get all teams in a specific league
| GET                 | /leagues/:leagueId/teams/:teamId|Get a specific team data    
| GET                 | /leagues/:leagueId/teams/:teamId/players|Get all players in a specific team 
| GET                 | /leagues/:leagueId/teams/:teamId/players/:playerId|Get a specific player data


## What it is
The Soccer API is a RESTful API that stores all available soccer leagues, teams and players. I am still working on creating the database that can host all data. For the sake of testing I have added some data. By creating an account you will have an access to create a league only, and it should be unique. I am still working on how to verify the input from users. Check out the live deployment [here](https://football-api-sg.herokuapp.com/).

## Introduction
This documentation will help you get familiar with the resources of the Soccer API and show you how to make queries to get leagues, teams and players within a nested endpoints.

### Rest
Base url: https://football-api-sg.herokuapp.com/api

The base url contains information about all available API's resources. All responses will return data in `json`.

*Sample Request*
```
https://football-api-sg.herokuapp.com/api
```
```JSON
{
    "leagues": "football-api-sg.herokuapp.com/api/leagues",
    "teams": "football-api-sg.herokuapp.com/api/teams",
    "players": "football-api-sg.herokuapp.com/api/players"
}
```

There are currently 3 available resources and they are all nested:

* Leagues: Gets all leagues
* Teams: Gets all teams
* Players: Gets all players

## Leagues

Currently I have added the raw data myself in the future I will scrape the real time data and store them in my database.

### League Schema
|Key|Type|Description|
|---|---|---|
|name|string|The name of the league.
|country|string|The country it belongs to.
|teams|list of teams(schema object)|All the teams the league consists of.

### Get All Leagues
You can access the list of leagues by using the /api/leagues endpoint.

*Sample Requst*
```
https://football-api-sg.herokuapp.com/api/leagues
```

```json
[
    {
        "teams": [],
        "_id": "5c7cb2e7c32ae80004765548",
        "name": "La Liga",
        "country": "Spain",
        "__v": 0
    },
    {
        "teams": [
            "5c7db2c06187930004aa6ba5",
            "5c7db6666187930004aa6ba6",
            "5c7db6eb6187930004aa6ba7"
        ],
        "_id": "5c7b5c08c2292b0004d34f23",
        "name": "EPL",
        "country": "England",
        "__v": 0
    }
]
```

### Get a single league
You can get a single league by adding its ```id``` as a parameter: 

*Sample Requst*
```
https://football-api-sg.herokuapp.com/api/leagues/5c7b5c08c2292b0004d34f23
```

```json
{
    "teams": [
        "5c7db2c06187930004aa6ba5",
        "5c7db6666187930004aa6ba6",
        "5c7db6eb6187930004aa6ba7"
    ],
    "_id": "5c7b5c08c2292b0004d34f23",
    "name": "EPL",
    "country": "England",
    "__v": 0
}
```
## Teams
Working on adding more teams.

### Team schema
|Key|Type|Description|
|---|---|---|
|name|string|The name of the team.
|manager|string|The current manager of the team.
|stadium|string|The stadium of the team.
|location|string|The city team is located
|players|list of players(schema object)|The Ids of all players of the team
|leagueId|league schema obeject|The league Id the team belongs to

### Get All Teams
You can access the list of all available teams ```/api/teams``` endpoint
```
http://football-api-sg.herokuapp.com/api/teams
```

### Get All Teams From Specific League
You can query the all teams in a specific league use ```/api/leagues/leagueId/teams```

*Sample Requst*
```
https://football-api-sg.herokuapp.com/api/leagues/5c7b5c08c2292b0004d34f23/teams
```

*Example*
```json
{
    "players": [
        "5c7dda5a40a3b30004360723",
        "5c7dda7840a3b30004360724",
        "5c7dda9640a3b30004360725"
    ],
    "_id": "5c7db6eb6187930004aa6ba7",
    "name": "Liverpool F.C",
    "manager": "Jurgen Klopp",
    "location": "Liverpool",
    "stadium": "Anfield",
    "leagueId": "5c7b5c08c2292b0004d34f23",
    "__v": 0
}

```
### Get Single Team
You can get single team by adding the id of the team: ```/api/leagues/leagueId/teams/teamId```

*Sample Requst*
```
https://football-api-sg.herokuapp.com/api/leagues/5c7b5c08c2292b0004d34f23/teams/5c7db6eb6187930004aa6ba7
```

*Example*
```json
{
    "players": [
        "5c7dda5a40a3b30004360723",
        "5c7dda7840a3b30004360724",
        "5c7dda9640a3b30004360725"
    ],
    "_id": "5c7db6eb6187930004aa6ba7",
    "name": "Liverpool F.C",
    "manager": "Jurgen Klopp",
    "location": "Liverpool",
    "stadium": "Anfield",
    "leagueId": "5c7b5c08c2292b0004d34f23",
    "__v": 0
}
```
## Players
Working on adding more players to database.

### Player schema
|Key|Type|Description|
|---|---|---|
|name|string|The full name of the player.
|age|string|The current age of the player.
|nation|string|The current country player has citizenship
|teamId|team schema object|Team id player belongs to

### Get All Player stored in the database 
You can access the list of all available players ```/api/players``` endpoint
```
http://football-api-sg.herokuapp.com/api/players
```

### Get All Players From Specific Team
You can query the all players in a specific team use ```/api/leagues/leagueId/teams/teamId/players```

*Sample Requst*
```
https://football-api-sg.herokuapp.com/api/leagues/5c7b5c08c2292b0004d34f23/teams/5c7db6eb6187930004aa6ba7/players
```

*Example*
```json
{
    "_id": "5c7dda5a40a3b30004360723",
    "name": "Mohamed Salah",
    "age": 30,
    "nation": "Egypt",
    "teamId": "5c7db6eb6187930004aa6ba7",
    "__v": 0
}
```
### Get Single Player from a specific team
You can get single player by adding the id of the player: ```/api/leagues/leagueId/teams/teamId/players/playerId```

*Sample Requst*
```
https://football-api-sg.herokuapp.com/api/leagues/5c7b5c08c2292b0004d34f23/teams/5c7db6eb6187930004aa6ba7/players/5c7dda5a40a3b30004360723
```

*Example*
```json
{
    "_id": "5c7dda5a40a3b30004360723",
    "name": "Mohamed Salah",
    "age": 30,
    "nation": "Egypt",
    "teamId": "5c7db6eb6187930004aa6ba7",
    "__v": 0
}
```

## *NOTE* 
The project is under active development stay tuned for more advanced features. Thank you.