export class Person {
    
    constructor(name, salary)
    {
        if(!name) {
            throw new Error('Por favor ingrese un nombre');      
        }
        this.name = name;
        this.salary = salary;
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

