import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [changeTitle, setChangeTitle] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState("");
  const changeTitleHandler = (event) => {
    setChangeTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setChangeAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setChangeDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: changeTitle,
      amount: +changeAmount,
      date: new Date(changeDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setChangeTitle(""); // to clear the input fields after the submission of form
    setChangeAmount(""); //we add 'value' in input field and set them to their intial value.
    setChangeDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={changeTitleHandler}
            value={changeTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={changeAmountHandler}
            value={changeAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={changeDateHandler}
            value={changeDate}
            type="date"
            min="2000-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
