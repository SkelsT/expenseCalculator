const { Expense } = require('../model/Expense.js');

class MonthExpense {

    constructor(monthId) {
        this.monthId = monthId;
        this.expenses = [];
    }

    addExpense(expense) {
        const expenseMonthId = this.getMonthIdFromDate(expense.getDate());
        const alreadyExists = this.expenses.some( (e) => e.getIdExpense() === expense.getIdExpense());
        if (!(expense instanceof Expense)) {
            throw new Error("No es una instancia de Expense");
        } else if (expenseMonthId !== this.monthId) {
            throw new Error("La fecha del gasto no corresponde al mes actual");
        } else if (alreadyExists) {
            throw new Error("El gasto ya existe en este mes");
        }
        this.expenses.push(expense);
    }

    calculateTotalExpenses() {
        return this.expenses.reduce((total, expense) => total + expense.getAmount(), 0);
    }

    calculateExpensesByCategory(category) {
        return this.expenses
                            .filter((expense) => expense.getCategoryExpense() == category)
                            .reduce((total, expense) => total + expense.getAmount(), 0);    
    }                       

    getMonthId() {
        return this.monthId;
    }


    getAllExpenses() {
        return this.expenses.map((e) => ({
            idExpense : e.getIdExpense(),
            amount : e.getAmount(),
            categoryExpense : e.getCategoryExpense(),
            date : e.getFormattedDate(),
        }));
    }

    getMonthIdFromDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
    }
}

module.exports = { MonthExpense };