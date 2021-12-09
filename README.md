# StoryHub Frontend

# About
This repository serves as a frontend for my StoryHub applcation which is a fullstack internship learning project at CEFALO.  

# Getting Started

To get the React server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Start the [backend server](https://github.com/RakibulRanak/simple-web-api-learning-with-express) and set REACT_APP_URL in .env file according to your backend server ip:port
- `npm start` to start the local react server

Alternately, you can quickly visit the web app at https://story-hub-application.herokuapp.com/

# Description
StoryHub is mainly a simple blogging web app, where a random person can become an user by signing up with email, username, name and password. A user can post story with a valid title, and content. Users can also edit or delete their respective stories while logged in.

# Tools and Technologies

- [react](https://www.npmjs.com/package/react) - As a javascript library for creating user interfaces
- [chakra](https://www.npmjs.com/package/chakra) - As a library for building react application blocks
- [axios](https://www.npmjs.com/package/axios) - As a http client
- [yup](https://www.npmjs.com/package/yup) - As a schema builder for value parsing and validation 

# Dockerization & Deployment

- Instructions I Followed For :

    - [Dockerization](/documentation/docker.md) 
    - [Deployment](/documentation/deploy.md) 

*[read backend documentation](https://github.com/RakibulRanak/simple-web-api-learning-with-express/blob/main/readme.md)*
