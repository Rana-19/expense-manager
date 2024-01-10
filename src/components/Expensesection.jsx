import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { HiCurrencyRupee } from "react-icons/hi"

const Expensesection = () => {
  const { transactions, isDark } = useContext(ExpenseContext)
  const income = transactions.filter(item => item.amount > 0).reduce((a, b) => { return a + b.amount }, 0)
  const expense = transactions.filter(item => item.amount < 0).reduce((a, b) => { return a + b.amount }, 0)

  return (
    <div className=" row gap-4 mx-2 my-3   ">
      <div className={isDark ? "card col-md-5 col-sm-12 my-2 bg-dark shadow-lg " : "card col-md-5 col-sm-12 my-2 bg-light shadow-lg "}>
        <h4 className="display-4 text-primary">Income:</h4>
        <h4 className="display-3 text-success"><HiCurrencyRupee /> {income}</h4>
      </div>
      <div className={isDark ? "card col-md-5 col-sm-12 my-2 bg-dark shadow-lg " : "card col-md-5 col-sm-12 my-2 bg-light shadow-lg "}>
        <h4 className="display-4 text-primary">Expense:</h4>
        <h4 className="display-3 text-danger"><HiCurrencyRupee /> {expense}</h4>
      </div>

    </div>
  )
}

export default Expensesection