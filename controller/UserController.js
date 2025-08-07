import { Person } from '../model/Person.js';
import  UserView  from '../view/userView.js';


export class UserController {
    constructor() {
        this.view = new UserView();
        this.person = null;

        this.view.onSubmit(() => this.handleUserSubmit());
    }

    handleUserSubmit() {
        const { namePerson, salaryPerson } = this.view.getUserInput();

        if(!namePerson) {
            alert('Por favor ingrese un nombre');
            return;
        }

        this.person = new Person(namePerson, salaryPerson);
        console.log("llegue aca");
        this.view.showGreeting(this.person.getNamePerson());
        this.view.showSalaryOnLabel(this.person.getSalary());
        
    }
}