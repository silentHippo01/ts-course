
enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
    updateAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifetime(): number {
        return this.createdAt.getTime() - this.updateAt.getTime();
    }

    unholdPayment(): void {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Payment dont be unholded');
        }
        this.status = PaymentStatus.Reversed;
        this.updateAt = new Date()
    }
}

//перегрузка методов


class Userr {
    skills: string[] = [];

    addSkill(skill: string): void;
    addSkill(skill: string[]): void;
    addSkill(skills: string | string[]): void {
        if (typeof skills == 'string') {
            this.skills.push(skills);
        } else if (Array.isArray(skills)) {
            this.skills.push(...skills)
        }
    }
}