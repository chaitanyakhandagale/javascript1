class User {
    constructor(firstName, lastName, emailId, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._emailId = emailId;
        this._age = age;
    }

    set firstName(firstName) {
        this._firstName = firstName;

    }

    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get lastName() {
        return this._lastName;
    }

    set emailId(emailId) {
        this._emailId = emailId;
    }

    get emailId() {
        return this._emailId;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;
    }
}

let user = new User('Ramesh', 'Fadatare', 'ramesh@gmail.com', 29);
console.log('Before changing attributes of User object');
console.log(JSON.stringify(user));

// change first name
user.firstName = 'Ram';
console.log(user.firstName);

// change last name
user.lastName = 'Stark';
console.log(user.lastName);

console.log('After changing attributes of User object');
console.log(JSON.stringify(user));

