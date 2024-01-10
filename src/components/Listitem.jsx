import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { HiCurrencyRupee } from "react-icons/hi"



const Listitem = ({ transaction }) => {
  const { deleteTransaction, editTransaction, isDark } = useContext(ExpenseContext)
  console.log(isDark);

  return (
    <li className={isDark ? "list-group-item mx-2 my-2 shadow-lg bg-dark" : "list-group-item mx-2 my-2 shadow-lg bg-light"}>
      <h2 className="text-primary">Transaction:{transaction.type}</h2>
      <h2 className={transaction.amount > 0 ? "text-success" : "text-danger"}><HiCurrencyRupee />{transaction.amount}</h2>
      <span>
        <button className="btn btn-warning rounded-0 mx-2 float-end" onClick={() => editTransaction(transaction)}>Edit</button>
        <button className="btn btn-danger rounded-0 float-end" onClick={() => deleteTransaction(transaction.id)} >Delete</button>
      </span>
    </li>
  )
}

export default Listitem