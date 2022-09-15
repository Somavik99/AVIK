import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
// import AddExpenses from "./AddExpenses";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveExpenses = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* <AddExpenses onSaveExpenseData={saveExpenses} /> */}
      {!isEditing && <button onClick={startEditing}>Add Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenses} />}
    </div>
  );
};

export default NewExpenses;
