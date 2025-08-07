import { Expense } from '../model/Expense.js';
import { ExpenseCalculator } from '../model/ExpenseCalculator.js';
import { UserController } from './UserController.js';
import { ExpenseController} from './ExpenseController.js';

const userController = new UserController();
const sistema = new ExpenseCalculator();
const expenseController = new ExpenseController(sistema);


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
                display: false,
            }
        }
    }
});




