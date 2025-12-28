import { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    transactions: (() => {
        try {
            return JSON.parse(localStorage.getItem('transactions')) || []
        } catch (e) {
            return []
        }
    })()
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Sync with localStorage whenever transactions change
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions))
    }, [state.transactions])

    // Actions
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function editTransaction(transaction) {
        dispatch({
            type: 'EDIT_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction,
            editTransaction,
            dispatch // Exposing dispatch just in case, though helper functions are better
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
