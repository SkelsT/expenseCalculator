


export function getExpenseInputs() {
    return {
        amount: parseFloat(document.getElementById('amount').value),
        category: document.getElementById('category').value,
        date: new Date(document.getElementById('date').value),
        description: document.getElementById("description").value

    };
}

export function clearExpenseInputs() {
    document.getElementById('amount').value = "";
    document.getElementById('category').value = "";
    document.getElementById('date').value = "";
    document.getElementById('description').value = "";
}

export function showExpenseInTable(expense) {
    const tbody = document.getElementById('expense-table-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${expense.getFormattedDate()}</td>
        <td>${expense.getAmount()}</td>
        <td>${expense.getCategoryExpense()}</td>
        <td>${expense.getDescriptionExpense()}</td>
    `;
    tbody.appendChild(row);
}

export default {
    getExpenseInputs,
    clearExpenseInputs,
    showExpenseInTable
};