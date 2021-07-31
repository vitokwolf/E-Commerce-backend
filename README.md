# E-Commerce-backend
___
## Description
Simple back end for an e-commerce site, using Express.js API to use Sequelize to interact with a MySQL database.

___
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Deployment](#deployment)
* [Questions?](#questions)


___
## Demo
![demo](./assets/demo.gif)

Or watch it on [Youtube](https://youtu.be/zzHwVXfP5Q8)


___
## Installation
The application requires Node.js and SQL that needs to be installed first. Clone the repo on your local machine. In the terminal navigate to root and run 
```js 
npm i
```
to install all necessary dependecies.
In order to use the application, User will need to create an *.env* file at the root of project. The file will need to contain:
```
DB_NAME='ecommerce_db'
DB_USER='<Username>'
DB_PW='<password>'
```
replacing **Username** and **password** with Users mysql credentials.

___
## Usage
To create and seed the tables, in the terminal run
```js
npm run seed
```
It is recommended to use Insomnia, if no front end is connected. 
To start the server, run in terminal
```js
npm start
```
Then navigate to the desired endpoints(a hint to endpoints is commented in the ./routes/api/index.js).
___
## Deployment
No deployement available for this project.
Here is github repo link : https://github.com/vitokwolf/E-Commerce-backend
___
## Questions?
Contact Me:
* Github: https://github.com/vitokwolf/
* Email: sinajeen@gmail.com
