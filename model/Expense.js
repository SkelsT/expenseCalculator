class Expense {
    amount;
    categoryExpense;
    Date;


    constructor(amount, categoryExpense, Date = new Date())
    {
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


}