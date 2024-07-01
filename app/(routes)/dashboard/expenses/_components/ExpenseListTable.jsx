import { db } from "@/Utils/dbConfig";
import { Expenses } from "@/Utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast("Expense Deleted!");
      refreshData();
    }
  };
  return (
    <div className="mt-3">
      <h2 className="font-bold text-lg">Latest Expenses</h2>
      <div className="grid grid-cols-4 bg-slate-200 dark:bg-slate-600 p-2 mt-3 border border-black dark:border-white/25">
        <h2 className="font-bold text-primary dark:text-primary">Name</h2>
        <h2 className="font-bold text-primary dark:text-primary">Amount</h2>
        <h2 className="font-bold text-primary dark:text-primary">Action</h2>
        <h2 className="font-bold text-primary dark:text-primary">Date</h2>
      </div>
      {expensesList.map((expenses, index) => (
        <div className="grid grid-cols-4 bg-slate-50 dark:bg-slate-900 p-2 border border-black/25 dark:border-white/25">
          <h2 className="text-primary  dark:text-primary">{expenses.name}</h2>
          <h2 className="text-primary  dark:text-primary">{expenses.amount}</h2>
          <h2 className="text-primary  dark:text-primary">
            {expenses.createdAt}
          </h2>
          <h2>
            <Trash
              className="text-red-600 cursor-pointer"
              onClick={() => deleteExpense(expenses)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
