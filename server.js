const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    { id: 1, name: "Shreyash", course: "IT" }
];

app.get('/', (req, res) => {
    res.send("Student Management API Running");
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.json(newStudent);
});

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.send("Student deleted");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});