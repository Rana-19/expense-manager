const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case "SAVE":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
            break;
        case "DELETE":
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
            break;
        case "EDIT":
            return {
                ...state,
                edit: {
                    transaction: action.payload,
                    editMode: true
                }
            }
        case "UPDATE":
            return {
                ...state,
                transactions: state.transactions.map(item => item.id === action.payload.id ? action.payload.transaction : item),
                edit: {
                    transaction: {},
                    editMode: false
                }
            }
        case "CHANGE_THEME":
            return {
                ...state,
                isDark: state.isDark ? false : true
            }
            break;



        default:
            break;
    }

}
export default ExpenseReducer