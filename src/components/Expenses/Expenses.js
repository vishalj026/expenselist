import { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

    const selectYearHandler = (year) => {
        console.log(year);
        //console.log(props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear));
        setSelectedYear(year);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={selectedYear} onSelectYear={selectYearHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            {filteredExpenses.length === 0 ? <p>No expenses found for this year.</p> :
             filteredExpenses.map(expense =>
                <ExpenseItem {...expense} key={expense.id} />)}
            
            
        </Card>
    );
}

export default Expenses;