class Person {
    personName;
    salary;

    constructor(personName, salary)
    {
        this.personName = personName;
        this.salary = salary;
    }

    getNamePerson()
    {
        return this.personName;
    }

    getSalary()
    {
        return this.salary;
    }
}