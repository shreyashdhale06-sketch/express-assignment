# 🚀 Express.js Student Management API

## 📌 Introduction

This project is a simple REST API built using Express.js. It demonstrates how to create a backend server, handle routes, and return JSON data.

---

## ⚙️ Setup Instructions

### 1. Initialize project

npm init -y

### 2. Install dependencies

npm install express

---

## ▶️ Run the Application

node server.js

Open browser:
http://localhost:3000

---

## 📡 API Endpoints

### 🔹 Home Route

GET /
Returns:
"Student Management API Running"

---

### 🔹 Get All Students

GET /students

Example Output:
[
{ "id": 1, "name": "Shreyash", "age": 19 },
{ "id": 2, "name": "Rahul", "age": 20 }
]

---

### 🔹 Get Single Student

GET /students/:id

Example:
GET /students/1

Output:
{ "id": 1, "name": "Shreyash", "age": 19 }

---

## 🧠 Concepts Used

* Express.js Framework
* REST API
* Routing
* Dynamic Routing (Route Parameters)
* Middleware (express.json)
* JSON Responses

---

## 💼 Real-world Use Case

This type of API is used in:

* Student management systems
* School/College portals
* Backend services for web apps

---

## 🧑‍💻 Author

Shreyash Dhale

---

## ✅ Conclusion

This project demonstrates how to build a basic REST API using Express.js with proper routing and JSON data handling.
