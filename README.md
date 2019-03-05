# Soccer API

Soccer API developed during backend class @makeschool as a **Custom API Project**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Or you can interact with live version [here](https://football-api-sg.herokuapp.com/) and documentaion [here](https://sukhrobjon.github.io/Soccer-API/)

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

## What It is
The Soccer API is a RESTful API that stores all available soccer leagues, teams and players. I am still working on creating the database that can host all data. For the sake of testing I have added some data. The project is fully authenticated, you can create an account. In the future user can create their own fantazy team, right now I am working on how to verify user input. Check out the live deployment [here](https://football-api-sg.herokuapp.com/). 


## How to use it
There are **three** nested resources: leagues, teams, and players. The resources are one to many relationship based.*For example:* There are multiple leagues, one leagues has many teams, one team has many players. You can read full documentation [here](https://sukhrobjon.github.io/Soccer-API/)


 
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
