# Quotes CRUD Application

This application is a sample for teaching basic CRUD functionalities, MVC architecture, and API creation and consumption in the JavaScript ecosystem.

## Table of contents

- [Installation](#installation)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

### Installation

- Clone the repository then change directory into it.

```
git clone git@github.com:mamba-dev-KE/work-assessment-mvc.git
cd work-assessment-mvc

```

- Create a .env file in the root of the /backend folder.

```
/work-assessment-mvc/backend/.env
```

- Add the following environment variables to the .env file.

```
MONGO_URI=mongodb+srv://<username>:<password>@mamba.wpaib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

- The MONGO_URI can be gotten from the Mongo Atlas platform after creating a database and choosing the connect to application option.
- The PORT is the port where we want our Node server to run, set it to 5000.

- Run the following command from the root of the project.

```
npm install

```

- Change directory into the frontend directory and run the command again.

```
cd frontend
npm install

```

- Change directory back to the root folder and run the following command.

```
cd ..
npm run dev

```

- The first two commands will install all project dependencies from NPM while the third command will run start scripts in the backend and frontend
- After everything runs correctly, you can access the application under.

```
http://localhost:3000/

```

### Links

- Code URL: [GitHub](https://github.com/mamba-dev-KE/work-assessment-mvc)
- Live Site URL: [Visit here](http://mamba-quotes.herokuapp.com/)

## My process

### Built with

- ReactJS
- NodeJS
- ExpressJS
- MongoDB
- HTML5
- SASS
- Framer Motion
- React Icons
- CSS Grid
- Mobile-first workflow
- CSS Custom Properties
- CSS Logical Properties

## Author

- Website - [Joseph Maramba Weyao](https://josephmaramba.tech)
- Twitter - [@Maramba_Joseph](https://twitter.com/Maramba_Joseph)
