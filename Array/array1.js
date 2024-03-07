let arr=[1,2,3,4,5,6];
// console.log(arr);



// concat
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.

// const arr1=new Array(7,8,9,4);
// let arr3=arr.concat(arr1);
// console.log(arr3);

// push

// arr.push(11);
// console.log(arr);

//pop
// arr.pop(11);
// console.log(arr);
// console.log(arr);

/******************shift*******************/

// console.log(arr.shift());
// console.log(arr);
//remoe the first element 

/******************unshift*******************/

// arr.unshift(11)
// console.log(arr);
//Add the element at the first position


/******************copyWithin()*******************/

// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.

// arr.copyWithin(2,0,3);
// console.log(arr);

/******************slice()*******************/

// console.log(arr);
// arr.slice(2);
// console.log(arr.slice(1));

//delete the element from the start



/******************splice()*******************/


// console.log(arr.splice(1));

/******************toString()*******************/

// const arr4=arr.toString();
// const arr4=arr.join();
// console.log(typeof arr4);
// console.log(typeof arr4);

// The join() method also joins all array elements into a string.

//tostring() method is used for converting the array in to string


/******************map()*******************/

// arr.map((item)=>{
//     return console.log(item)
// })



// arr.map((item)=>(console.log(item)))

// arr.map((item)=>console.log(item))

/******************filter()*******************/

 arr.filter((n)=>n>2).map((n)=>{
    console.log(n);
 })
