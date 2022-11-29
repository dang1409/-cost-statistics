import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const openAddressHandle = () => {
    setIsEditing(true);
  };

  const closeAddressHandle = () => {
    setIsEditing(false);
  }

  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={openAddressHandle}>Open address</button>
      ) : (
        <ExpenseForm onCloseAddress={closeAddressHandle} onSaveExpenseData={saveExpenseDataHandle} />
      )}
    </div>
  );
}

export default NewExpense;
