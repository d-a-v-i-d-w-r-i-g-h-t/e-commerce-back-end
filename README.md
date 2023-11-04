# E-Commerce Back End

## Description 

Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? 

>>>>>include a link to the walkthrough video here<<<<<<<





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

A video walkthrough demonstrating application functionality is available [here](screencastify).

To start the application, use the command

```
npm start
```
or

```
node server.js
```




Provide instructions and examples for use. Include screenshots as needed. 

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

```md
![alt text](assets/images/screenshot.png)
```


## Credits

I used [Express](https://www.npmjs.com/package/express/v/4.17.1) to manage routing and middleware.

I used [dotenv](https://www.npmjs.com/package/dotenv/v/8.2.0) to to load environment variables.

I used [MySQL](https://www.mysql.com/), specifically [MySQL 2](https://www.npmjs.com/package/mysql2/v/2.1.0), to interface with the database.

I used [Sequelize](https://www.npmjs.com/package/sequelize/v/6.34.0) to define models, make associations, and handle requests.


## License

Please refer to the LICENSE in the repo.

---
