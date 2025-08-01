class MonthExpense {
    monthId;
    expenses = [];

    constructor(monthId) {
        this.monthId = monthId;
        this.expenses = [];
    }

    addExpense(expense) {
        if (expense instanceof Expense && expense.getDate().getMonth() === this.monthId && this.expense != Expense) {
            this.expenses.push(expense);
        }
        else {
            throw new Error("No es una instancia de Expense");
       }
    }

    calculateTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.getAmount(), 0);
    }

    calculateExpensesByCategory(category) {
        return this.expenses.filter((expense) => expense.getCategoryExpense) == category
                            .reduce((total, expense) => total + expense.getAmount(), 0);    
    }                       

    getMonthId() {
        return this.monthId;
    }


    getAllExpenses() {
        return this.expenses;
    }
}