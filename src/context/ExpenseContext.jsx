import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";


const ExpenseContext = createContext()


export const ExpenseProvider = ({ children }) => {
    const initialState = {
        transactions: [],
        edit: {
            transaction: {},
            editMode: false
        },
        isDark: false
    }
    const [state, dispatch] = useReducer(ExpenseReducer, initialState)

    const addTransaction = (type, amount) => {
        dispatch({
            type: "SAVE",
            payload: {
                id: crypto.randomUUID(),
                type,
                amount
            }
        })

    }
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE",
            payload: id
        })
    }
    const editTransaction = (transaction) => {
        dispatch({
            type: "EDIT",
            payload: transaction
        })

    }
    const updateTransaction = (oldId, newTransaction) => {
        dispatch({
            type: "UPDATE",
            payload: { id: oldId, transaction: newTransaction }
        })


    }
    const changeTheme = () => {
        dispatch({
            type: "CHANGE_THEME",
        })
    }


    return (
        <ExpenseContext.Provider value={{ transactions: state.transactions, edit: state.edit, isDark: state.isDark, addTransaction, deleteTransaction, editTransaction, updateTransaction, changeTheme }}>
            {children}
        </ExpenseContext.Provider>
    )
}









export default ExpenseContext