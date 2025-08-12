export class Expense {
    static nextId = 1;


    constructor(amount, categoryExpense, dateExpense = new Date(), description)
    {
        this.idExpense = Expense.nextId++;
        this.amount = amount;
        this.categoryExpense = categoryExpense;
        this.dateExpense= dateExpense;
        this.description = description;
    }

    getAmount()
    {
        return this.amount;
    }

    getCategoryExpense()
    {
        return this.categoryExpense;
    }

    getDescriptionExpense()
    {
        return this.description;
    }

    getDateMonthlyExpense()
    {
        const year = this.dateExpense.getFullYear();
        const month = String(this.dateExpense.getUTCMonth() + 1).padStart(2, '0');
        console.log(month);
        return `${year}-${month}`;
    }

    getIdExpense()
    {
        return this.idExpense;
    }

    getFormattedDate() {
    return this.dateExpense.toISOString().split('T')[0];
    }

    
}

