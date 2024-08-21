
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