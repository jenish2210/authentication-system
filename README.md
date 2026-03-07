# Authentication System – Internship Task

This project is a simple authentication system developed as part of an internship assignment.
It demonstrates a modern backend architecture using **PHP, MySQL, Redis, and MongoDB** with an **AJAX-based frontend**.

---

## 🚀 Project Flow

Register → Login → Profile

1. User registers with name, email, and password.
2. User logs in using registered credentials.
3. After successful login, a **token is generated and stored in Redis**.
4. The token is stored in **browser localStorage**.
5. The profile page allows users to save additional information such as age, date of birth, and contact.
6. Profile data is stored in **MongoDB**.

---

## 🧰 Tech Stack

Frontend

* HTML
* CSS
* JavaScript
* jQuery (AJAX)
* Bootstrap / Custom UI

Backend

* PHP

Databases

* MySQL – User authentication
* Redis – Session token storage
* MongoDB – User profile data

Tools

* Docker (for Redis and MongoDB)
* XAMPP (Apache + MySQL)
* Composer (PHP dependencies)

---

## 📁 Project Structure

```
intern/
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
│   ├── redis.php
│   ├── mongo.php
│   ├── register.php
│   ├── login.php
│   └── profile.php
│
├── vendor/ (Composer dependencies)
│
├── login.html
├── register.html
└── profile.html
```

---

## 🔐 Security Features

* Password hashing using `password_hash()`
* Secure login validation using `password_verify()`
* Redis-based session token authentication
* Token stored in browser `localStorage`
* Prepared statements used for MySQL queries
* Protected profile endpoint (token validation)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/authentication-system.git
cd authentication-system
```

---

### 2️⃣ Install Dependencies

```
composer install
```

---

### 3️⃣ Start XAMPP

Start:

* Apache
* MySQL

---

### 4️⃣ Create Database

Open **phpMyAdmin** and create database:

```
intern
```

Create table:

```
users
```

Columns:

| Column   | Type               |
| -------- | ------------------ |
| id       | INT AUTO_INCREMENT |
| name     | VARCHAR            |
| email    | VARCHAR            |
| password | VARCHAR            |

---

### 5️⃣ Run Redis (Docker)

```
docker run -d -p 6379:6379 --name redis-server redis
```

---

### 6️⃣ Run MongoDB (Docker)

```
docker run -d -p 27017:27017 --name mongo-db mongo
```

---

### 7️⃣ Run the Project

Open in browser:

```
http://localhost/intern/register.html
```

---

## 🌐 Live Demo

Live URL:
``

---

## 💻 GitHub Repository

Repository URL:
`https://github.com/jenish2210/authentication-system.git`

---

## 👨‍💻 Author

Jenish
BCA Student | Python & Django Developer
