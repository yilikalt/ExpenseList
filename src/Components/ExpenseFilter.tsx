import React from "react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Supplies">Supplies</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Planned">Planned</option>
      <option value="Unexpected">UnExpected</option>
    </select>
  );
};

export default ExpenseFilter;
