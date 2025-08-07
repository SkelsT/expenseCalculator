export default class ExpenseView {
    constructor() {
        this.amountInput = document.getElementById('amount');
        this.categoryInput = document.getElementById('category');
        this.dateInput = document.getElementById('date');
        this.descriptionInput = document.getElementById("description");
        this.submitButton = document.getElementById("add-expense");
        this.tableBody = document.getElementById("expense-table-body");
        this.monthSelector = document.getElementById("month");    
    }

    getExpenseInput() {
        return {
            amountExpense: parseFloat(this.amountInput.value),
            categoryExpense: this.categoryInput.value,
            dateExpense: this.dateInput.value,
            descriptionExpense: this.descriptionInput.value,
        }
    }

    clearExpenseInputs() {
    this.amountInput.value = "";
    this.categoryInput.value = "";
    this.dateInput.value = "";
    this.descriptionInput = "";
    }

    showExpenseInTable({ dateExpense, amountExpense, categoryExpense, descriptionExpense}) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${dateExpense}</td>
        <td>${amountExpense}</td>
        <td>${categoryExpense}</td>
        <td>${descriptionExpense}</td>
    `;
    this.tableBody.appendChild(row);
}

    clearTable() {
        this.tableBody.innerHTML = "";
    }

    onAddExpense(callback) {
        this.submitButton.addEventListener("click", callback);
    }

    onMonthChange(callback) {
        this.monthSelector.addEventListener('change',callback);
    }
}