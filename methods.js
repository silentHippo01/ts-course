"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifetime() {
        return this.createdAt.getTime() - this.updateAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('Payment dont be unholded');
        }
        this.status = PaymentStatus.Reversed;
        this.updateAt = new Date();
    }
}
//перегрузка методов
class Userr {
    constructor() {
        this.skills = [];
    }
    addSkill(skills) {
        if (typeof skills == 'string') {
            this.skills.push(skills);
        }
        else if (Array.isArray(skills)) {
            this.skills.push(...skills);
        }
    }
}
