import { useState } from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 700, category: "utility" },
    { id: 2, description: "vvv", amount: 100, category: "activities" },
    { id: 3, description: "bbb", amount: 200, category: "utility" },
    { id: 4, description: "nnn", amount: 900, category: "utility" },
  ]);

  return (
    <div className="App">
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
