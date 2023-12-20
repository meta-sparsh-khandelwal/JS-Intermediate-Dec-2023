function getGradeForStudents(studentMarks) {
    const studentGrades = [];

    studentMarks.forEach((student)=>{
        const name = student.name;
        const marks = student.marks;
        let grade;
        if (marks < 60) {
            grade = 'F';
        } else if (marks < 70) {
            grade = 'D';
        } else if (marks < 80) {
            grade = 'C';
        } else if (marks < 90) {
            grade = 'B';
        } else {
            grade = 'A';
        }

        studentGrades.push({name, grade});
    });

    return studentGrades;
}

const studentMarks = [{name: 'David', marks: 80}, {name: 'Vinoth', marks:77}, {name: 'Divya', marks:88}, {name: 'Ishitha', marks:95}, {name: 'Thomas', marks:68}];

console.log(getGradeForStudents(studentMarks));