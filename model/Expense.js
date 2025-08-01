class Expense {
    static nextId = 1;


    constructor(idExpense, amount, categoryExpense, Date = new Date())
    {
        this.idExpense = Expense.nextid++;
        this.amount = amount;
        this.categoryExpense = categoryExpense;
        this.Date= new Date();
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
        return this.Date;
    }

    getIdExpense()
    {
        return this.idExpense;
    }


}