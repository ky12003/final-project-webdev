// empty list for each semester
let plan = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []};

function addLowerDivisionCourses(majorData, plan) {
    // Add lower_div_prereq and lower_div_req courses
    [...majorData.lower_div_prereq, ...majorData.lower_div_req].forEach(course => {
        let semester = getRandomSemester(course.earliest_semester, course.latest_semester);
        plan[semester].push(course.name);
    });
}

function addUpperDivisionCourses(majorData, plan) {
    // Add one upper_div_design course
    let designCourse = getRandomCourse(majorData.upper_div_design.options);
    let semester = getRandomSemester(4, 8);
    plan[semester].push(designCourse.name);

    // Add four upper_div courses
    let upperCourses = selectRandomCourses(majorData.upper_div.options, 4);
    upperCourses.forEach(course => {
        let semester = getRandomSemester(4, 8);
        plan[semester].push(course.name);
    });

    // Add one non_cs_tech course
    let nonCsTechCourse = getRandomCourse(majorData.non_cs_tech.options);
    semester = getRandomSemester(4, 8);
    plan[semester].push(nonCsTechCourse.name);
}

function addBreadthCourses(majorData, breadthData, plan) {
    for (let i = 0; i < 7; i++) {
        let breadthCourse = getRandomCourse(breadthData);
        let index = breadthData.indexOf(breadthCourse);
        breadthData.splice(index, 1);
        semester = getRandomSemester(1, 8);
        plan[semester].push(breadthCourse.name);
    }
}

function getRandomCourse(courseArray) {
    return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function selectRandomCourses(courseArray, count) {
    let shuffled = [...courseArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomSemester(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillWithElectives(plan) {
    Object.keys(plan).forEach(semester => {
        while (plan[semester].length < 4) {
            plan[semester].push("Elective");
        }
    });
}