"use strict";
//Перегрузка конструктора
class User {
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        }
        else if (typeof nameOrAge === 'string' && typeof age === 'number') {
            this.name = nameOrAge;
            this.age = age;
        }
    }
}
const pavel = new User('pavel');
const vasya = new User();
class Admin {
}
const admin = new Admin();
admin.role = 1;
class User1 {
    set login(l) {
        this._login = 'user-' + l;
    }
}
const user1 = new User1();
user1.login;
console.log(user1);
