import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const hideForm = (event) => {
    setIsFormShown(false);
  };

  const onFormShown = (event) => {
    setIsFormShown(true);
  };

  return (
    <div className="new-expense">
      {!isFormShown && (
        <button className="expense-item__actions" onClick={onFormShown}>
          Add Expense
        </button>
      )}
      {isFormShown && (
        <ExpenseForm
          onSavedExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
