export class Person {
    
    constructor(name, salary)
    {
        if(!name || name.trim() === '') {
            throw new Error('Por favor ingrese un nombre');      
        }
        if (salary !== undefined && salary !== null && (isNaN(salary) || salary < 0)) {
            throw new Error('El salario debe ser un número válido mayor o igual a 0');
        }
        this.name = name.trim();
        this.salary = salary || 0;
    }

    getNamePerson()
    {
        return this.name;
    }

    getSalary()
    {
        return this.salary;
    }
}

