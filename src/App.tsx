import { useState } from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import categories from "./Categories";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 700, category: "utility" },
    { id: 2, description: "vvv", amount: 100, category: "activities" },
    { id: 3, description: "bbb", amount: 200, category: "utility" },
    { id: 4, description: "nnn", amount: 900, category: "utility" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  // const onSubmit
  return (
    <div className="App">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
