import { Expense } from '../model/Expense.js';
import { ExpenseCalculator } from '../model/ExpenseCalculator.js';
import { Person } from '../model/Person.js';
import { MonthExpense } from '../model/MonthExpense.js';



const sistema = new ExpenseCalculator("insta", 4500);
const nombre = document.getElementById('name');
const sueldo = document.getElementById('salary');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const dateInput = document.getElementById('date');
const expenseList = document.getElementById('expense-list');
const totalSpan = document.getElementById('total');
const addButton = document.getElementById('add-expense');


const ctx = document.getElementById("expenses-chart");

const dataChart = {
    labels: ['Comida', 'Transporte', 'Ropa'],
    datasets: [{
        label: 'Gastos por categoría',
        data: [500,300,200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1
    }]
};

new Chart(ctx, {
    type: "doughnut",
    data: dataChart,
    options: {
        responsive: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});



addButton.addEventListener('click', () => {
    
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;
    const date = new Date(dateInput.value);


    if(isNaN(amount) || !category || !dateInput.value) {
        alert("Por favor complete todos los campos");
        return;
    }
    

    const expense = new Expense(amount, category, date);
    const monthId = expense.getDateMonthlyExpense();


    sistema.addExpenseToMonth(monthId, expense);

    const li = document.createElement('li');
    li.textContent = `${expense.getFormattedDate()} - ${category}: $${amount}`;
    expenseList.appendChild(li);

    totalSpan.textContent = sistema.calculateMonthlyExpense(monthId);


    amountInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";


});
