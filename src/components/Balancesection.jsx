import React, { useContext, useEffect, useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { HiCurrencyRupee } from "react-icons/hi"
const Balancesection = () => {
  const { transactions, addTransaction, edit, updateTransaction, isDark } = useContext(ExpenseContext)
  const balance = transactions.reduce((a, b) => { return a + b.amount }, 0)
  const [type, setType] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (edit.editMode) {
      updateTransaction(edit.transaction.id, { type, amount: parseInt(amount) })
    } else {

      addTransaction(type, parseInt(amount))

    }
    setType("")
    setAmount("")



  }
  useEffect(() => {
    setAmount(edit.transaction.amount)
    setType(edit.transaction.type)
  }, [edit])


  return (
    <div className=" row gap-4 mx-2 my-3 ">
      <div className={isDark ? "card col-md-5 col-sm-12 my-2 bg-dark shadow-lg " : "card col-md-5 col-sm-12 my-2 bg-light shadow-lg "}>
        <h2 className="display-3 text-primary">Balance:</h2>
        <h2 className={balance > 0 ? "display-2 text-success" : "display-2 text-danger"}><HiCurrencyRupee />{balance}</h2>
      </div>
      <div className={isDark ? "card col-md-5 col-sm-12 my-2 bg-dark shadow-lg " : "card col-md-5 col-sm-12 my-2 bg-light shadow-lg "}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className="form-control rounded-1 my-2" required placeholder="Enter Transaction" onChange={(e) => setType(e.target.value)} value={type} />
          <input type="number" className="form-control rounded-1 my-2" required placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} value={amount} />
          <button className="btn btn-success float-end w-50 my-2">Save</button>
        </form>
      </div>
    </div>
  )
}

export default Balancesection