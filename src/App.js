import Expenses from "./component/Expenses/Expenses";
import NewExpenses from "./component/NewExpenses/NewExpenses";
import React, { useState } from "react";
const DummyExpenses = [
  // {
  //   id: "e1",
  //   title: "Cigarettes",
  //   amount: 94,
  //   date: new Date(2020, 7, 14),
  // },
  // { id: "e2", title: "New TV", amount: 799, date: new Date(2021, 2, 12) },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 294,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 450,
  //   date: new Date(2021, 5, 12),
  // },
];
function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addFilter = (dateWithFilter) => {
    console.log("In App.js");
    console.log(dateWithFilter);
  };

  const addExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("in App.js");
    console.log(expense);
  };

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <h1>Lets get started 😀😉</h1>
      <NewExpenses onAddExpense={addExpenseData} />
      <Expenses expenses={expenses} dateFilter={addFilter} />
    </div>
  );
}

export default App;
