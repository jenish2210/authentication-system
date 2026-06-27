# Authentication System

A secure and responsive **Authentication System** developed using **PHP, MySQL, MongoDB, Redis, Bootstrap, JavaScript, jQuery, and Docker**. The application allows users to register, log in securely, manage their profile, and store profile information across multiple databases.

---

## Features

* User Registration
* Secure Login Authentication
* Password Hashing using PHP `password_hash()`
* Session Token Authentication using Redis
* Profile Management
* Profile Data Storage in MongoDB
* User Credentials Storage in MySQL
* Responsive Bootstrap UI
* Glassmorphism Dashboard Design
* AJAX-based Form Submission
* Toast Notifications
* Docker Support
* Render Deployment Ready

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* jQuery
* Font Awesome

### Backend

* PHP 8
* MySQL
* MongoDB
* Redis

### Tools

* Composer
* Docker
* Git
* GitHub
* Render

---

## Database Design

### MySQL

**users**

| Field    | Type    |
| -------- | ------- |
| id       | INT     |
| name     | VARCHAR |
| email    | VARCHAR |
| password | VARCHAR |

Stores user authentication credentials.

---

### MongoDB

**profiles**

```json
{
    "user_id":"1",
    "name":"Jenison",
    "age":"22",
    "dob":"2003-10-22",
    "contact":"9876543210"
}
```

Stores user profile information.

---

### Redis

Stores temporary login session tokens.

Example:

```
Token
↓

a83f7bcf9ef92....

↓

User ID
```

---

## Project Structure

```
authentication-system/

│
├── css/
│   └── style.css
│
├── js/
│   ├── login.js
│   ├── register.js
│   └── profile.js
│
├── php/
│   ├── db.php
│   ├── mongo.php
│   ├── redis.php
│   ├── register.php
│   ├── login.php
│   ├── profile.php
│   └── getProfile.php
│
├── vendor/
├── composer.json
├── Dockerfile
├── index.html
├── login.html
├── profile.html
└── README.md
```

---

## Application Workflow

```
Register
     │
     ▼
MySQL
     │
     ▼
Login
     │
     ▼
Redis Token
     │
     ▼
Profile Page
     │
     ▼
Save Profile
     │
     ▼
MongoDB
     │
     ▼
Load Profile
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/jenish2210/authentication-system.git
```

Move into the project directory

```bash
cd authentication-system
```

Install Composer packages

```bash
composer install
```

Run the PHP server

```bash
php -S localhost:8000
```

---

## Environment Variables

Configure the following environment variables.

```
MYSQL_HOST=

MYSQL_USER=

MYSQL_PASSWORD=

MYSQL_DATABASE=

REDIS_URL=

MONGO_URI=
```

---

## Security Features

* Password hashing using BCrypt
* Redis session token authentication
* Prepared SQL statements
* AJAX-based communication
* Input validation
* Secure database access
* Separation of authentication and profile data

---

## Future Enhancements

* Email Verification
* Forgot Password
* JWT Authentication
* User Avatar Upload
* Two-Factor Authentication
* Admin Dashboard
* Activity Logs

---

## Screenshots

* Registration Page
* Login Page
* User Dashboard
* Profile Summary

---

## Deployment

This project can be deployed using:

* Docker
* Render
* Railway
* VPS with Apache/Nginx

---

## Author

**Jenison**

GitHub:
https://github.com/jenish2210

Email:
[jenisonjenish22@gmail.com](mailto:jenisonjenish22@gmail.com)

---

## License

This project is created for educational and internship assessment purposes.
