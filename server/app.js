const express = require('express');
const majorsData = require('./majors.json');

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Welcome to BearPlanner!');
});

// app.post('/generate-plan', (req, res) => {
//     const major = req.body.major;
//     if (!major || !majorsData[major]) {
//         return res.status(400).send("Invalid or missing major");
//     }

//     let plan = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []};
//     const majorData = majorsData[major];

//     addLowerDivisionCourses(majorData, plan);
//     addUpperDivisionCourses(majorData, plan);
//     addBreadthCourses(majorData, majorData.breadth_courses, plan);
//     fillWithElectives(plan);

//     res.json({ message: "Plan generated for " + major, plan: plan });
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});