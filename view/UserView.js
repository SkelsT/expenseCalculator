export default class UserView {
    constructor() {
        this.nameInput = document.getElementById('username');
        this.salaryInput = document.getElementById('salary');
        this.submitButton = document.getElementById('add-user');
    }


getUserInput() {
    const salaryValue = this.salaryInput.value.trim();
    return {
        namePerson: this.nameInput.value.trim(),
        salaryPerson: salaryValue === '' ? undefined : parseFloat(salaryValue)
    };
}

showGreeting(namePerson) {
    const section = document.querySelector('.user-section');
    section.innerHTML = "";


    const greetingLabel = document.createElement("h2");
    greetingLabel.textContent = `¡Hola, ${namePerson}!`;

    section.appendChild(greetingLabel);
    
}

showSalaryOnLabel(salary) {
    const element = document.getElementById('display-salary');
    element.textContent= `${salary}`;
}

onSubmit(callback) {
    this.submitButton.addEventListener('click', callback);
}

showError(message) {
    const errorDiv = document.querySelector("#user-error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "Block";
    }

clearError() {
    const errorDiv = document.querySelector("#user-error-message");
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
    }



}