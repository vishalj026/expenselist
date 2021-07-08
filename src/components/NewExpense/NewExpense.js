import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);

    const startEditing = () => {
        setShowForm(true);
    }

    const stopEditing = () => {
        setShowForm(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
            {showForm === false ? <button onClick={startEditing}>Add Expense</button> :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={stopEditing}/>
            }
        </div>
    );
}

export default NewExpense;