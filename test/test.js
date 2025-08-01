const { Expense } = require('../model/Expense.js');
const { ExpenseCalculator } = require('../model/ExpenseCalculator.js');

const sistema = new ExpenseCalculator();

const gasto1 = new Expense(500, "Comida", new Date());
const gasto2 = new Expense(300, "Transporte", new Date());

console.log(gasto1);
console.log(gasto2);

const gasto3 = new Expense(700, "Ropa", new Date("2025-09-02"));

const mesId = `${gasto1.getDate().getFullYear()}-${String(gasto1.getDate().getMonth() + 1).padStart(2, '0')}`;
const mesId2 = `${gasto3.getDate().getFullYear()}-${String(gasto3.getDate().getMonth() + 1).padStart(2, '0')}`;


sistema.addExpenseToMonth(mesId, gasto1);
sistema.addExpenseToMonth(mesId, gasto2);

sistema.addExpenseToMonth(mesId2, gasto3);

console.log(mesId);
console.log(mesId2);

console.log("Gastos del mes:", sistema.listExpensesByMonth(mesId));
console.log("Gastos:", sistema.listExpensesByMonth(mesId2));
console.log("Total del mes:", sistema.calculateMonthlyExpense(mesId));
console.log("Total del mes:", sistema.calculateMonthlyExpense(mesId2));
console.log("Gasto en comida:", sistema.calculateMonthlyExpenseByCategory(mesId, "Comida"));
