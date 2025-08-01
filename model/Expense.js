class Expense {
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

    getDate()
    {
        return this.dateExpense;
    }

    getIdExpense()
    {
        return this.idExpense;
    }

    getFormattedDate() {
    return this.dateExpense.toISOString().split('T')[0];
    }

}

module.exports = { Expense };