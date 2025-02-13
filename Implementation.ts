interface ILogger {
    log(...args: any[]): void;
    error(...args: any[]): void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args)
    }
    async error(...args: any[]): Promise<void> {
        console.log(...args);
    }

}

interface IPayable {
    pay(paymentId: number): void;
    price?: number;
}

interface IDeletable {
    delete: () => void;
}

class User2 implements IPayable, IDeletable {
    pay(paymentId: number): void {
        throw new Error("Method not implemented.");
    }
    price?: number | undefined;
    delete: () => void;
}