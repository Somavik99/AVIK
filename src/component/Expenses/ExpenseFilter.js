import React from "react";
import "./expenseFilter.css";
// import ExpenseItems from "./ExpenseItems";

const ExpenseFilter = (props) => {
  const filterChange = (event) => {
    props.onExpenseFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={filterChange}>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
          <option>2031</option>
          <option>2032</option>
          <option>2033</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
