// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(','); //string으로 변환
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    // const result = fruits.split(',',2); //limit
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result); // 인덱스 2~4까지. 3,4,5
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{

    //한명을 찾으면 바로 return!!! ,, 콜백 함수라서 한 줄이라서 return을 생략함.
    // find는 return true가 나오면 바로 멈춤.
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{

    // array로 return!
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    //console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); //한명이라도 있으면 true

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); //true
}
//console.clear();
// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score,0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'

{
    console.clear()
    console.log("Q10");
    const result = students
        .map((student) => student.score) //점수만 있는 배열
        .filter((score) => score >= 50)
        .join(); //string 변환.
    console.log(result);

}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'


const result= students
    .map((student)=>student.score)
    .sort((a,b)=>a-b)  //오름차순// 내림차순은 b-a!!
    .join();
console.log(result);





// {
//     const result = students
//         .map((student) => student.score)
//         .sort((a, b) => b - a)
//         .join();
//     console.log(result);
// }
