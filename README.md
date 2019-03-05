# Soccer API

Soccer API developed during backend class @makeschool for custom api project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Install all dependencies

```
npm install
```

Create .env file

```
touch .env
```

Add secret key to .env

```
SECRET = ???
```
## Available Endpoints
#### Base URL : ```https://football-api-sg.herokuapp.com/api```


|       Method          |      Endpoint        |      Return Object                         
| -------------       |:--------------------:| ------------------------------------------
| GET                 | /leagues                       |Get all leagues         
| GET                 | /leagues/:leagueId             |Get Specific league   
| GET                 | /leagues/:leagueId/teams       |Get all teams in a specific league
| GET                 | /leagues/:leagueId/teams/:teamId|Get a specific team data    
| GET                 | /leagues/:leagueId/teams/:teamId/players|Get all players in a specific team 
| GET                 | /leagues/:leagueId/teams/:teamId/players/:playerId|Get a specific player data


## What It is
The Soccer API is a RESTful API that stores all available soccer leagues, teams and players. I am still working on creating the database that can host all data. For the sake of testing I have added some data. By creating an account you will have an access to create a league only, and it should be unique. I am still working on how to verify the input from users. Check out the live deployment [here](https://football-api-sg.herokuapp.com/). 

### How to use it

You can find full documentation [here](https://sukhrobjon.github.io/Soccer-API/)
 
## Built With

* [Node](https://nodejs.org/en/) - JavaScript run-time environment
* [Express](https://expressjs.com/) - Web application framework
* [Bootstrap](https://getbootstrap.com/) - Web framework
* [Npm](https://www.npmjs.com/) - Dependency management
* [Json Web Tokens](https://jwt.io/) - Encryption
* [MongoDB](https://www.mongodb.com/) - Document based database

## Authors

* **Sukhrobjon Golibboev** - *Initial work* - [Sukrobjon](https://github.com/Sukhrobjon)

See also the list of [contributors](https://github.com/Sukhrobjon/Soccer-API/graphs/contributors) who participated in this project.

## License

This project is licenced under the MIT License - see the <a href="https://github.com/Sukhrobjon/Soccer-API/blob/master/LICENSE">LICENSE</a> file for details

## Acknowledgments

* Thanks to [Blackrock Digital](https://github.com/BlackrockDigital) for the styling template.
* Thanks to Backend Intructor - [Dani](https://github.com/droxey)
* Thanks to Connor - [Coswold](https://github.com/Coswold)
