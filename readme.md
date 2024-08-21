# Video Streaming Backend Project

This project is a backend implementation of a video streaming website similar to YouTube. It is built using Node.js, MongoDB, Mongoose, and Express. The project includes user registration, login, logout, and other functionalities.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

## Features

- User Registration
- User Login and Logout
- Video Upload and Streaming
- User Profiles
- Like/Dislike Videos
- Commenting on Videos
- Subscriptions

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: v14.x or above
- **MongoDB**: A running MongoDB instance (local or cloud-based)
- **Git**: Latest version

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nitesh3423/Youtube_Backend.git
   cd Youtube_Backend
2. **Intalling dependencies**:
   ```bash
   To intall all required dependencies run following command
   npm install
   ```


## Running Locally
      To run locally command
      npm run dev



## Environment Variables
    PORT=5000
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
    JWT_SECRET=mySuperSecretKey
    CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>


## API Endpoints , you can use postman
  ***Register User***
  ```bash
http://localhost:8000/api/v1/users/register
```
***Body***
```json
{
    "email": "@gmail.com",
    "password": "",
    "username": "",
    "avatar": "image_file",
    "background image": "image_file",
       
}
```
  ***Post Login use Postman***
  ```bash
http://localhost:8000/api/v1/users/login
```
**Body**
```json
{
    "email": "",
    "password": ""
}
```
  ***Post Logout***
  ```bash
http://localhost:8000/api/v1/users/logout
```



