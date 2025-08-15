import { Person } from '../model/Person.js';
import  UserView  from '../view/UserView.js';


export class UserController {
    constructor() {
        this.view = new UserView();
        this.person = null;

        this.view.onSubmit(() => this.handleUserSubmit());
    }

    handleUserSubmit() {
        try {
        const { namePerson, salaryPerson } = this.view.getUserInput();

        this.view.clearError();
        this.person = new Person(namePerson, salaryPerson);
        this.view.showGreeting(this.person.getNamePerson());
        this.view.showSalaryOnLabel(this.person.getSalary());
        
    } catch (error) {
        this.view.showError(error.message);
    }
}
}