# E-Commerce Back End

## Description 

For this project, I had to build the back end for an e-commerce site. I had to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database. This application wasn't deployed, so I created a walkthrough video that demonstrates its functionality. A link to the video is provided below in the [Usage](#usage) section.

The database contains three tables: Products, Categories, and Tags. All three tables have full Create, Read, Update, and Delete (CRUD) capability, including GET all, GET one by id, POST (create), PUT (update), and DELETE. 



## Installation

Copy all files and folders from the repo to the desired location. On the command line, navigate to the installation directory and install dependencies with the command

```
npm install
```

Create the database from a MySQL command line in the same directory with the command

```
source db/schema.sql;
```
Seed the database from the same directory with the command

```
npm run seed
```

Update the password in file ```/lib/mysqlQuery.js``` as desired.


## Usage

A video walkthrough demonstrating application functionality is available [here](https://watch.screencastify.com/v/x7WO4nYb6gloKhppT4Pj).

To start the server, use the command

```
npm start
```
or

```
node server.js
```

![Starting the server](assets/images/npm-start.png)

As this application is only the back end, routes and functionality can be demonstarted and tested using Insomnia, as shown above in the walkthrough video.

![Testing with Insomia](assets/images/insomnia.png)


## Credits

I used [Express](https://www.npmjs.com/package/express/v/4.17.1) to manage routing and middleware.

I used [dotenv](https://www.npmjs.com/package/dotenv/v/8.2.0) to to load environment variables.

I used [MySQL](https://www.mysql.com/), specifically [MySQL 2](https://www.npmjs.com/package/mysql2/v/2.1.0), to interface with the database.

I used [Sequelize](https://www.npmjs.com/package/sequelize/v/6.34.0) to define models, make associations, and handle requests.


## License

Please refer to the LICENSE in the repo.

---
