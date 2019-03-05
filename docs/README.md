# Soccer API

### Available Endpoints
```javascript
/leagues
/leagues/:leagueId
/leagues/:leagueId/teams
/leagues/:leagueId/teams/:teamsId
/leagues/:leagueId/teams/:teamsId/matches
/leagues/:leagueId/teams/:teamsId/players
/leagues/:leagueId/teams/:teamsId/players/:playersId
```

# Soccer API


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
|teams|list|All the teams the league consists of.

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
You can get a single league by its ```id``` as a parameter: 

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
