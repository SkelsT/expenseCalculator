import { MonthExpense } from './MonthExpense.js';
import { Expense } from './Expense.js';
import { Person } from './Person.js';


export class ExpenseCalculator {
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

    calculateMonthlyExpenseByCategory(monthId) {
        this.ensureMonthId(monthId)
        const expenses = this.monthExpenses[monthId].getAllExpenses();
        const categoryTotals = {};

        expenses.forEach(expense => { 
            const category = expense.getCategoryExpense();
            const amount = expense.getAmount();
            if (categoryTotals[category]) {
                categoryTotals[category] += amount;
            } else {
                categoryTotals[category] = amount;
        }
        });
        const labels = Object.keys(categoryTotals);
        const data = Object.values(categoryTotals);
       
        return {labels, data};
    }


    listExpensesByMonth(monthId) {
        this.ensureMonthId(monthId);
        return this.monthExpenses[monthId].getAllExpenses();
    }

    calculateMonthlyExpensesWithSalary(monthId) {
        this.ensureMonthId(monthId) 
        const salary = this.person.getSalary();
        return salary - this.monthExpenses[monthId].calculateTotalExpenses();  
    }
    
    
    ensureMonthId(monthId) {
    if (!this.monthExpenses[monthId]) {
           this.monthExpenses[monthId] = new MonthExpense(monthId);
        }
    }

}
