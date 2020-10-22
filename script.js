// 1)

let submissions = [
    {
        name: 'Jane',
        score: 95,
        date: '2020-01-24',
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false

    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
]



// 2)

const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission =
    {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60

    }
    array.push(newSubmission);
};

addSubmission(submissions, "Alejandra", 82, "2020-06-02");
// console.log(submissions);



// 3)

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
    //why would it be (index,1)? would it always be 1? what does that number reference? answer: it's the number of indexes that it will delete, so if it were 2 it would be the index you put in the function and the one below it
};

// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);



// 4)

const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((person) => {
        return person.name === name;
    });

    deleteSubmissionByIndex(array, index);
};

deleteSubmissionByName(submissions, "Jill");
console.log(submissions);


// 5)
const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
    return array;
};

editSubmission(submissions, 1, 99)
console.log(submissions);


// 6)
const findSubmissionByName = (array, name) => {
    return array.find((studentName) => {
        return studentName.name === name;
    });
};

//why do you need to name something in the parentheses miscellaneous like "studentName? where is that pulling from? is that a placeholder? how does that even know that 

console.log(findSubmissionByName(submissions, "Alejandra"));


// 7)

const findLowestScore = (array) => {
    let min = Math.min(array.score);
    return min;
};

console.log(findLowestScore(submissions));


// 8) 

const findAverageScore = (array) => {
    let sum = 0;
    for (let entry of submissions) {
        sum += entry.score
    }

    return sum / submissions.length;
};

console.log(findAverageScore(submissions));

// 9) 

const filterPassing = (array) => {

    let newArray = array.filter((entry) => {
        return entry.score >= 60;
    });

    return newArray;
};

console.log(filterPassing(submissions));

// 10) 

function filter90AndAbove(array) {
    return array.filter((entry) => {
        return entry.score <= 90;
    });
};

console.log(filter90AndAbove(submissions));