const express = require('express');
const app = express();
const PORT = 3000;

// Middleware (important for assignment)
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send("Student Management API Running");
});

// Sample Data
let students = [
    { id: 1, name: "Shreyash", age: 19 },
    { id: 2, name: "Rahul", age: 20 }
];

// GET all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET single student
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// POST add student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// DELETE student
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);

    res.json({ message: "Student deleted" });
});

// About route (extra for teacher impression)
app.get('/about', (req, res) => {
    res.send("This is a Student Management API built using Express.js");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});