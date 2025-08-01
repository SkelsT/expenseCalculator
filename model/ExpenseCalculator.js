const { MonthExpense } = require('../model/MonthExpense.js');
const { Expense } = require('../model/Expense.js');


class ExpenseCalculator {
    constructor() {
        this.monthExpenses = {};
    }

    

    addExpenseToMonth(monthId, expense) {
        if (!this.monthExpenses[monthId]) {
            this.monthExpenses[monthId] = new MonthExpense(monthId);
        }
        if (!(expense instanceof Expense)) {
            throw new Error("No es una instancia de Expense");
        }
        this.monthExpenses[monthId].addExpense(expense);
    }

    calculateMonthlyExpense(monthId) {
        this.ensureMonthId(monthId) 
        return this.monthExpenses[monthId].calculateTotalExpenses();
        
    }

    calculateMonthlyExpenseByCategory(monthId, category) {
        this.ensureMonthId(monthId)
        return this.monthExpenses[monthId].calculateExpensesByCategory(category);
    }
    

    listExpensesByMonth(monthId) {
        this.ensureMonthId(monthId) 
        return this.monthExpenses[monthId].getAllExpenses();
    }
    
    
    ensureMonthId(monthId) {
    if (!this.monthExpenses[monthId]) {
            throw new Error("No hay gastos registrados para este mes");
        }
    }

}

module.exports = { ExpenseCalculator };