import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(expense => 
                <ExpenseItem {...expense} key={expense.id}/>)}
        </Card>
    );
}

export default Expenses;