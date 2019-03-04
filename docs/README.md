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
Base url: https://football-api-sg.herokuapp.com

The base url contains information about all available API's resources. All responses will return data in `json`.

*Sample Request*
```
https://football-api-sg.herokuapp.com/api/
```

