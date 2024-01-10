import React from 'react'
import Listitem from './Listitem'
import { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'

const Listgroup = () => {
  const { transactions } = useContext(ExpenseContext)
  return (
    <ul className="list-group my-2">
      {
        transactions.map(transaction => <Listitem key={transaction.id} transaction={transaction} />)
      }
    </ul>
  )
}

export default Listgroup