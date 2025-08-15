export class Expense {
    static nextId = 1;


    constructor(amount, categoryExpense, dateExpense, description)
    {
        const validDate = dateExpense && !isNaN(new Date(dateExpense).getTime());

        if (isNaN(amount) || !categoryExpense || !validDate) {
            throw new Error("Por favor complete todos los campos");
        }
        if (amount < 0) {
            throw new Error("El monto debe ser mayor o igual a 0");
        }
        if (new Date(dateExpense).getTime() > new Date())
        {
            throw new Error("Ingrese una fecha actual o anterior");
        }
        this.idExpense = Expense.nextId++;
        this.amount = amount;
        this.categoryExpense = categoryExpense;
        this.dateExpense= new Date(dateExpense);
        this.description = description;
    }

    getAmount()
    {
        return this.amount;
    }

    getCategoryExpense()
    {
        return this.categoryExpense;
    }

    getDescriptionExpense()
    {
        return this.description;
    }

    getDateMonthlyExpense()
    {
        const year = this.dateExpense.getFullYear();
        const month = String(this.dateExpense.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}`;
    }

    getIdExpense()
    {
        return this.idExpense;
    }

    getFormattedDate() {
    return this.dateExpense.toISOString().split('T')[0];
    }

    
}

