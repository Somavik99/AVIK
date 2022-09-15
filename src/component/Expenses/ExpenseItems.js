import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDates from "./ExpenseDate";

import React from "react";
const ExpenseItems = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDates date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItems;
