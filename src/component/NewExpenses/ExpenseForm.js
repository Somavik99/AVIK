import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitleChange] = useState("");
  const [enteredAmount, setAmountChange] = useState("");
  const [enteredDate, setDate] = useState("");
  const [cancle, setCancle] = useState(false);

  const titleChange = (event) => {
    setTitleChange(event.target.value);
    console.log("TitleChanged !");
  };

  const amountChange = (event) => {
    setAmountChange(event.target.value);
    console.log("AmountChanged !");
  };

  const dateChange = (event) => {
    setDate(event.target.value);
    console.log("DateChanged !");
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitleChange("");
    setAmountChange("");
    setDate("");
  };

  const CancleHandeler = () => {
    setCancle(true);
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChange} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChange}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChange}
            type="date"
            min="01.01.2019"
            max="01.01.2033"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {!cancle && <button type="button" onClick={CancleHandeler}>Cancle</button>}
        {!cancle && <button type="submit">Add Items</button>}
      </div>
    </form>
  );
};
export default ExpenseForm;
