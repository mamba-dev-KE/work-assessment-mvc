# Quotes CRUD Application

This application is a sample for teaching basic CRUD functionalities, MVC architecture, and API creation and consumption in the JavaScript ecosystem.

## Table of contents

- [Installation](#installation)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

### Installation

- Clone the repository then cd into it

```
git clone git@github.com:mamba-dev-KE/work-assessment-mvc.git
cd work-assessment-mvc

```

- Create a .env file in the root of the /backend folder

```
/work-assessment-mvc/backend/.env
```

- Add the following environment variables to the .env file

```
MONGO_URI=mongodb+srv://work-assessment:<password>@<username>.wpaib.mongodb.net/quotes?retryWrites=true&w=majority
PORT=5000
```
- The MONGO_URI can be gotten from the Mongo Atlas platform after creating a database and choosing the connect to application option.
- The PORT is the port where we want our Node server to run

- Run the following commands from the root of the whole project (in order)

```
npm install
npm run dev

```

- The first command will install all dev dependencies while the second command will run start scripts in the backend and frontend
- After everything runs correctly, you can access the application under

```
http://localhost:3000

```

Create the desktop and modbile designs as presented in the design foldrer.

### Screenshot

[screenshot.png](https://postimg.cc/3WJm9dyB)

### Links

- Solution URL: [GitHub](https://github.com/mamba-dev-KE/qr-code-component)
- Live Site URL: [Visit here](https://wonderful-nobel-e5bbb6.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Framer Motion
- React Icons
- CSS Grid
- Mobile-first workflow
- CSS Custom Properties
- CSS Logical Properties
- Other modern CSS techniques

## Author

- Website - [Joseph Maramba Weyao](https://josephmaramba.tech)
- Frontend Mentor - [@mamba-dev-KE](https://www.frontendmentor.io/profile/mamba-dev-KE)
- Twitter - [@Maramba_Joseph](https://twitter.com/Maramba_Joseph)
