const { Expense } = require('../model/Expense.js');
const { MonthExpense } = require('../model/MonthExpense.js');
const { ExpenseCalculator } = require('../model/ExpenseCalculator.js');

const sistema = new ExpenseCalculator();

const gasto1 = new Expense(1, 500, "Comida", new Date());
const gasto2 = new Expense(3, 300, "Transporte", new Date());

console.log(gasto1);

const mesId = `${gasto1.getDate().getFullYear()}-${String(gasto1.getDate().getMonth() + 1).padStart(2, '0')}`;


sistema.addExpenseToMonth(mesId, gasto1);
sistema.addExpenseToMonth(mesId, gasto2);

console.log("Gastos:", sistema.listExpensesByMonth(mesId));
console.log("Total del mes:", sistema.calculateMonthlyExpense(mesId));
console.log("Gasto en comida:", sistema.calculateMonthlyExpenseByCategory(mesId, "Comida"));