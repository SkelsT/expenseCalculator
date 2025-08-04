const { Expense } = require('../model/Expense.js');
const { ExpenseCalculator } = require('../model/ExpenseCalculator.js');
const { Person } = require('../model/Person.js');

const sistema = new ExpenseCalculator("Emanuel", 4500);

const gasto1 = new Expense(500, "Comida", new Date());
const gasto2 = new Expense(300, "Transporte", new Date());
const persona1 = new Person("Daniel", 4500);

console.log(gasto1);
console.log(gasto2);
console.log(persona1);

const gasto3 = new Expense(700, "Ropa", new Date("2025-09-30"));

const mesId = `${gasto1.getDateMonthlyExpense()}`;

const mesId2 = `${gasto3.getDateMonthlyExpense()}`;


sistema.addExpenseToMonth(mesId, gasto1);
sistema.addExpenseToMonth(mesId, gasto2);

sistema.addExpenseToMonth(mesId2, gasto3);

console.log(mesId);
console.log(mesId2);
console.log(sistema);



console.log("Gastos del mes:", sistema.listExpensesByMonth(mesId));
console.log("Gastos:", sistema.listExpensesByMonth(mesId2));
console.log("Total del mes:", sistema.calculateMonthlyExpense(mesId));
console.log("Total del mes:", sistema.calculateMonthlyExpense(mesId2));
console.log("Gasto en comida:", sistema.calculateMonthlyExpenseByCategory(mesId, "Comida"));
console.log("A usted le queda este sueldo:", sistema.calculateMonthlyExpensesWithSalary(mesId));

