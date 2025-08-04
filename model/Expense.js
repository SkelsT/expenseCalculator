export class Expense {
    static nextId = 1;


    constructor(amount, categoryExpense, dateExpense = new Date())
    {
        this.idExpense = Expense.nextId++;
        this.amount = amount;
        this.categoryExpense = categoryExpense;
        this.dateExpense= dateExpense;
    }

    getAmount()
    {
        return this.amount;
    }

    getCategoryExpense()
    {
        return this.categoryExpense;
    }

    getDateMonthlyExpense()
    {
        const year = this.dateExpense.getFullYear();
        const month = String(this.dateExpense.getMonth() + 1).padStart(2, '0');
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

