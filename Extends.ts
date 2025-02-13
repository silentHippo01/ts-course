{
    type PaymentStatus = 'new' | 'paid' | 'canceled';
    class Payment {
        id: number;
        status: PaymentStatus = 'new';

        constructor(id: number) {
            this.id = id;
        }

        pay(): void {
            this.status = 'paid';
        }
    }


    class PersistedPayment extends Payment {
        databaseId: number;
        paidAt: Date;

        constructor() {
            const id = Math.random();
            super(id); //нужен если переопределяем конструктор
        }

        save() {

        }

        override pay(date?: Date) {
            super.pay();
            if (date) {
                this.paidAt = date;
            }
        }
    }




    class User {
        name: string = 'user';


        constructor() {
            console.log(this.name)
        }
    }

    class Admin extends User {
        name: string = 'admin';

        constructor() {
            super();
            console.log(this.name)
        }
    }

    new Admin();
}

class HttpError extends Error {
    code: number;
    constructor(message: string, code: number) {
        super(message)
        this.code = code ?? 500;
    }
}
