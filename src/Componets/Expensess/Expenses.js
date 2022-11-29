import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandle = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilteredChange={filteredChangeHandle}
        />
        <ExpenseChart items={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
