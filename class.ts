
//Перегрузка конструктора
class User {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);

    constructor(nameOrAge?: string | number, age?: number) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge;
        } else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge;
        } else if (typeof nameOrAge === 'string' && typeof age === 'number') {
            this.name = nameOrAge;
            this.age = age;
        }
    }
}

const pavel = new User('pavel');
const vasya = new User();


class Admin {
    role!: number;
}

const admin = new Admin();

admin.role = 1;


class User1 {
    _login: string;
    password: string;

    set login(l: string) {
        this._login = 'user-' + l;
    }

    get login() {
        return this._login;
    }
}

const user1 = new User1();
user1.login = 'logIN';

console.log(user1.login);