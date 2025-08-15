export default class ExpenseView {
    constructor() {
        this.amountInput = document.getElementById('amount');
        this.categorySelect = document.getElementById('category');
        this.dateInput = document.getElementById('date');
        this.descriptionInput = document.getElementById("description");
        this.submitButton = document.getElementById("add-expense");
        this.tableBody = document.getElementById("expense-table-body");
        this.monthSelector = document.getElementById("month");   
        this.ctx = document.getElementById("expenses-chart");
        this.chart = null; 
        this.onDeleteExpense = null;
        this.onEditExpense = null;
        
    }

    getExpenseInput() {
        return {
            amountExpense: parseFloat(this.amountInput.value),
            categoryExpense: this.categorySelect.value,
            dateExpense: this.dateInput.value,
            descriptionExpense: this.descriptionInput.value,
        }
    }

    clearExpenseInputs() {
    this.amountInput.value = "";
    this.categorySelect.value = "";
    this.dateInput.value = "";
    this.descriptionInput.value = "";
    }

    showExpenseInTable({ idExpense, dateExpense, amountExpense, categoryExpense, descriptionExpense}) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${dateExpense}</td>
        <td>$${amountExpense}</td>
        <td>${categoryExpense}</td>
        <td>${descriptionExpense}</td>
        <td>
            <button class="edit-btn" data-id="${idExpense}">✏️</button>
            <button class="delete-btn" data-id="${idExpense}">🗑️</button>
        </td>
    `;
    this.tableBody.appendChild(row);

    //Boton eliminar
    row.querySelector(".delete-btn").addEventListener("click", e => {
        const id = e.target.getAttribute("data-id");
        if(this.onDeleteExpense) this.onDeleteExpense(id);
    })

    //Boton editar
    row.querySelector(".edit-btn").addEventListener("click", e => {
        const id = e.target.getAttribute("edit-btn");
        if(this.onEditExpense) this.onEditExpense(id);
    })

}

    clearTable() {
        this.tableBody.innerHTML = "";
    }

    showExpensesTotalMonthLabel(totalExpenses) {
        const element = document.getElementById('display-expenses');
        element.textContent= `${totalExpenses}`;
    }

    clearLabelExpenses() {
        const element = document.getElementById('display-expenses');
        element.textContent= `${0}`;

    }

    onAddExpense(callback) {
        this.submitButton.addEventListener("click", callback);
    }

    onMonthChange(callback) {
        this.monthSelector.addEventListener('change',callback);
    }

    createChart(labels,data,colors) {
        const dataChart = {
            labels: labels,
            datasets: [{
                label: "Gastos por categoría",
                data: data,
                backgroundColor: colors,
                borderWidth: 1
            }]
        };

        this.chart = new Chart(this.ctx, {
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
    }

    updateChart(labels, data, colors) {
        if(!this.chart) return;

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = data;
        this.chart.data.datasets[0].backgroundColor = colors;
        this.chart.update();
        
    }

    showError(message) {
        const errorDiv = document.querySelector("#error-message");
        errorDiv.textContent = message;
        errorDiv.style.display = "Block";
    }

    clearError() {
    const errorDiv = document.querySelector("#error-message");
    errorDiv.textContent = "";
    }

        
}