import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Balancesection from "./components/Balancesection"
import Expensesection from "./components/Expensesection"
import Listgroup from "./components/Listgroup"
import { ExpenseProvider } from "./context/ExpenseContext"


function App() {




  return (

    <ExpenseProvider>
      <Navbar />
      <div>
        <Balancesection />
        <Expensesection />
        <Listgroup />
      </div>

    </ExpenseProvider>

  )

}

export default App
