// Create an array of objects representing students
const students = [
    { name: 'Jeff', age: 20, grade: 'A' },
    { name: 'Doubra', age: 22, grade: 'B' },
    { name: 'Gousi', age: 21, grade: 'A' },
    { name: 'David', age: 23, grade: 'C' },
    { name: 'Miracle', age: 20, grade: 'B' }
];

// Write the filterByGrade function using a for loop
const filterByGrade = (students, grade) => {
    const filteredStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade === grade) {
            filteredStudents.push(students[i]);
        }
    }
    return filteredStudents;
};

//  Write the averageAge function using a for loop
const averageAge = (students) => {
    let totalAge = 0;
    for (let i = 0; i < students.length; i++) {
        totalAge += students[i].age;
    }
    return totalAge / students.length;
};



// Testing the functions
console.log('Students with grade A:', filterByGrade(students, 'A')); // Should return Jeff and Gousi
console.log('Students with grade B:', filterByGrade(students, 'B')); // Should return Doubra and Miracle
console.log('Students with grade C:', filterByGrade(students, 'C')); // Should return david

const avgAge = averageAge(students);
console.log('Average age of students:', avgAge); // Should return the average age of all students


// const gradeAStudents = filterByGrade(students, 'A');
// console.log('Students with grade A:', gradeAStudents); 

// const gradeBStudents = filterByGrade(students, 'B');
// console.log('Students with grade B:', gradeBStudents); 

// const gradeCStudents = filterByGrade(students, 'C');
// console.log('Students with grade C:', gradeCStudents); // Should return David