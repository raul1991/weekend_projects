import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import FilteredExpenses from "./FilteredExpenses";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterExpensesHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearSelected={filterExpensesHandler}
          selected={selectedYear}
        />
        <FilteredExpenses expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
