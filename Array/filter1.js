// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
// So, the original Array.filter function takes a callback function as an argument and that callback function can have three arguments passed into it :
// a. current value
// b. index of the current value [optional]
// c. array [optional]

// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])

// 1.

// const arr=[1,2,3,4,5]

// function isOdd(x)
// {
//    return x%2; 
// }
// const output=arr.filter(isOdd);

// console.log(output);


// 2

// const arr=[1,2,3,4,5]
// const output=arr.filter((x)=>{ 
// return x>4
// });
// console.log(output);

/*Q1. Given an array of objects users, print fullname.*/

// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];
//   //List of fullname
//   const name=users.map((item)=>
//   {
//     return item.firstName +" "+item.lastName;
//   })
//   console.log(name);

/*Given an array of objects users, print user of particular age along with their frequency.*/

// const users=[
//     {firstName:"john",lastName:"Biden",age:26},
//     {firstName:"jimmy",lastName:"cob",age:75},
//     {firstName:"sam",lastName:"lewis",age:50},
//     {firstName:"Ronald",lastName:"Mathew",age:26},  
//   ];

//   const output=users.reduce(function(acc,curr){
//       if(acc[curr.age])
//       { 
//         acc[curr.age]++;            
//       }
//     else
//     {
//        acc[curr.age]=1;      
//     }
//       return acc;
//   },{})

//   console.log(output);

  /*GQ3.Print object having marks greater than 60 and rollNumber greater than 15.*/

//   let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];


//    student.filter((x)=> x.marks>60 && x.rollNumber>15).map((x)=>{return console.log(x)});


/*Q4.Print sum of marks of all the student*/

// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];

//    const details = student.reduce((acc,curr)=>{
//     return acc+=curr.marks;
// },0);
// console.log(details);

// Q7.Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];
   
   const totalMarks=student.map((stu)=>{
       if(stu.marks<60){
           stu.marks+=20;
       }
       return stu;
   }).filter((stu)=>stu.marks>60).reduce((acc,curr)=>acc+curr.marks,0);
   console.log(totalMarks);





