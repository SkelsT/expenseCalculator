import { Expense } from '../model/Expense.js';
import { ExpenseCalculator } from '../model/ExpenseCalculator.js';
import { UserController } from './UserController.js';
import { ExpenseController} from './ExpenseController.js';

const userController = new UserController();
const sistema = new ExpenseCalculator();
const expenseController = new ExpenseController(sistema);
