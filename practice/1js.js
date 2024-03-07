// var user1 = {
//     id : 1,
//    firstName : 'Ramesh',
//    lastName : 'Fadatare',
//    emailId : 'ramesh@gmail.com',
//    age : 29
// }

// var user2 = {
//    id : 2,
//    firstName : 'John',
//    lastName : 'Cena',
//    emailId : 'john@gmail.com',
//    age : 29
// }


// we have an array of objects, we want to remove one object using only the id property
// var users = [user1, user2];

// console.log(users);


// console.log('Before removing object from an array -> ' + JSON.stringify(users));


// remove object
// users.splice(1);
// console.log(users);
// console.log('After removing object from an array -> ' + JSON.stringify(users));



function Animal (name) {
   this.name = name;  
}

Animal.prototype.speak = function () {
   console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
     console.log(this.name + ' barks.');
  }
}

let d = new Dog('Mitzie');
d.super.speak(); 