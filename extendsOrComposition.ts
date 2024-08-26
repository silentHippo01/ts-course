// Это наследование
// Его минус в том, что когда мы наследуем, то тянем за собой еще множестве методов, которые нам не нужны и не подходят под нашу задачу
// поэтому лучше использовать композицию
// Композиция - это когда мы в классе реализуем собственные методы и логику, которая нам нужна.

// {
//     class User {
//         name: string;

//         constructor(name: string) {
//             this.name = name;
//         }
//     }

//     class Users extends Array<User> {


//         searchByName(name: string) {
//             return this.filter(user => user.name === name)
//         }

//         override toString(): string {
//             return this.map(u => u.name).concat(', ').join();
//         }
//     }

//     const users = new Users();
//     users.push(new User('Bob'));
//     users.push(new User('Alex'));

//     console.log(users.toString());
// }

{
    class User {
        name: string;
    }
    class Payment {
        date: Date;
    }

    //наследование - плохое решение
    class UserWithPayment extends Payment {
        name: string;
    }

    //композиция - хорошее решение
    class UserWithPayment2 {
        user: User;
        payment: Payment;

        constructor(user: User, payment: Payment) {
            this.user = user;
            this.payment = payment;
        }
    }
}