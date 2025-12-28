import { describe, it, expect } from 'vitest'
import AppReducer from '../context/AppReducer'

describe('AppReducer', () => {
    it('should add a transaction', () => {
        const initialState = { transactions: [] }
        const transaction = { id: 1, text: 'Test', amount: 100 }
        const action = { type: 'ADD_TRANSACTION', payload: transaction }

        const state = AppReducer(initialState, action)

        expect(state.transactions).toHaveLength(1)
        expect(state.transactions[0]).toEqual(transaction)
    })

    it('should delete a transaction', () => {
        const transaction = { id: 1, text: 'Test', amount: 100 }
        const initialState = { transactions: [transaction] }
        const action = { type: 'DELETE_TRANSACTION', payload: 1 }

        const state = AppReducer(initialState, action)

        expect(state.transactions).toHaveLength(0)
    })

    it('should edit a transaction', () => {
        const transaction = { id: 1, text: 'Test', amount: 100 }
        const initialState = { transactions: [transaction] }
        const updatedTransaction = { id: 1, text: 'Updated', amount: 200 }
        const action = { type: 'EDIT_TRANSACTION', payload: updatedTransaction }

        const state = AppReducer(initialState, action)

        expect(state.transactions[0]).toEqual(updatedTransaction)
    })

    it('should return default state', () => {
        const initialState = { transactions: [] }
        const action = { type: 'UNKNOWN' }
        const state = AppReducer(initialState, action)
        expect(state).toEqual(initialState)
    })
})
