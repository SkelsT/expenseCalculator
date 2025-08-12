import { Expense } from "../model/Expense.js";
import  ExpenseView  from '../view/ExpenseView.js';
import { ExpenseCalculator } from "../model/ExpenseCalculator.js";

export class ExpenseController {
    constructor(calculator) {
        this.view = new ExpenseView();
        this.calculator = calculator;

        this.view.onAddExpense((expenseData) => this.handleExpenseSubmit(expenseData));
        this.view.onMonthChange(() => this.handleMonthChange());
    }

    handleExpenseSubmit(expenseData) {
        const { amountExpense, categoryExpense, dateExpense, descriptionExpense } = this.view.getExpenseInput();
        if (isNaN(amountExpense) || !categoryExpense || !dateExpense) {
        alert("Por favor complete todos los campos");
        return;
        }
        
        const expense = new Expense(amountExpense, categoryExpense, new Date(dateExpense), descriptionExpense);
        const monthId = expense.getDateMonthlyExpense();

         console.log(dateExpense);
         console.log(monthId);

        this.calculator.addExpenseToMonth(monthId, expense);
        this.view.clearExpenseInputs();

        const selectedMonth = this.view.monthSelector.value;
        if(selectedMonth === monthId) {
            this.handleMonthChange();
        }
    
    }


    handleMonthChange() {
        const selectedMonth = this.view.monthSelector.value;
            
        try {
            /*¨cambia label */
            const totalExpenses = this.calculator.calculateMonthlyExpense(selectedMonth);

            this.view.showExpensesTotalMonthLabel(totalExpenses);

            /* crea y cambia gráfico*/
            let {labels, data} = this.calculator.calculateMonthlyExpenseByCategory(selectedMonth);
            let colors = labels.map((_, i) => `hsl(${i * 60}, 70%, 60%)`);
            if (labels.length === 0) {
                labels = ["No Existen Gastos"];
                data = [1];
                colors = ["#cccccc"];
            }

            if (this.view.chart) {
                this.view.updateChart(labels,data,colors);
            } else {
            this.view.createChart(labels, data, colors);
            }

            /*muestra en tabla */
            this.view.clearTable();
            
            const expenses = this.calculator.listExpensesByMonth(selectedMonth);
            
            for (const expense of expenses) {
                this.view.showExpenseInTable({
                                            dateExpense: expense.getFormattedDate(),
                                            amountExpense: expense.getAmount(),
                                            categoryExpense: expense.getCategoryExpense(),
                                            descriptionExpense: expense.getDescriptionExpense()
                                        })
            }    
        } catch(error) {  
            this.view.clearTable();
            this.view.clearLabelExpenses();
            
        }
    }



}



