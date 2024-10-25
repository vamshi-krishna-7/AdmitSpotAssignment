# Contact Management System API

This is a comprehensive RESTful API built with **Node.js**, **Express**, and **MySQL** for managing user contacts. It includes features like user authentication, contact management, filtering, sorting, file handling, and batch processing. The project supports CSV/Excel uploads and downloads for bulk contact management.

## Features

- **User Authentication** using JWT:
  - User registration and login
  - Email verification
  - Password reset via one-time code
- **Contact Management**:
  - Create, update, retrieve, and delete contacts
  - Filter and sort contacts
  - Batch processing for adding/updating multiple contacts
- **File Handling**:
  - CSV/Excel file upload for bulk contact creation/updating
  - Download contacts in CSV/Excel format
- **Timezone Support**:
  - Store timestamps in UTC and convert them to the user’s specified timezone when retrieving data
- **Data Validation** using `Joi`
- **Database**: MySQL with fully normalized schema and relationships
- **Security**:
  - Rate limiting on sensitive endpoints
  - Password hashing
- **Deployment**: Hosted on [Render](https://render.com), [Heroku](https://heroku.com), or a similar platform.

## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Database Schema](#database-schema)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/contact-management-api.git
   cd contact-management-api
