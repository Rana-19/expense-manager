import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'

const Navbar = () => {
  const { changeTheme, isDark } = useContext(ExpenseContext)
  return (
    <>
      <nav className={isDark ? "navbar navbar-light bg-dark" : "navbar navbar-light bg-primary"}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-light">Expense Manager</span>
          <button className="btn btn-outline-light" onClick={() => changeTheme()} >{isDark ? "Light Mode" : "Dark Mode"}</button>
        </div>
      </nav>

    </>
  )
}

export default Navbar