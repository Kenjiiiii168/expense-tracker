import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const useTransactions = () => {
    // ใช้ Global State แทน Local State สำหรับ transactions
    const {
        transactions,
        addTransaction,
        deleteTransaction: deleteTransactionContext,
        editTransaction
    } = useContext(GlobalContext)

    // State สำหรับฟอร์ม
    const [formData, setFormData] = useState({
        amount: '',
        category: 'Food',
        type: 'expense',
        paymentMethod: 'Cash'
    })

    // State สำหรับ Filter
    const [filters, setFilters] = useState({
        category: 'all',
        type: 'all',
        paymentMethod: 'all'
    })

    // State สำหรับแก้ไขรายการ
    const [editId, setEditId] = useState(null)

    // ฟังก์ชันสำหรับเพิ่มหรือแก้ไขรายการ
    const handleSubmit = (e) => {
        e.preventDefault()

        // ตรวจสอบว่าใส่จำนวนเงินถูกต้องหรือไม่
        if (!formData.amount || formData.amount <= 0) {
            alert('กรุณาใส่จำนวนเงินที่ถูกต้อง')
            return
        }

        if (editId) {
            // กรณีแก้ไขรายการเดิม
            const updatedTransaction = {
                id: editId,
                ...formData,
                amount: parseFloat(formData.amount),
                date: transactions.find(t => t.id === editId)?.date || new Date().toLocaleDateString('th-TH')
            }
            editTransaction(updatedTransaction)
            setEditId(null)
        } else {
            // กรณีเพิ่มรายการใหม่
            const newTransaction = {
                id: Date.now(),
                ...formData,
                amount: parseFloat(formData.amount),
                date: new Date().toLocaleDateString('th-TH')
            }
            addTransaction(newTransaction)
        }

        // รีเซ็ตฟอร์ม
        resetForm()
    }

    const resetForm = () => {
        setFormData({
            amount: '',
            category: 'Food',
            type: 'expense',
            paymentMethod: 'Cash'
        })
    }

    // ฟังก์ชันเริ่มแก้ไขรายการ
    const startEdit = (transaction) => {
        setEditId(transaction.id)
        setFormData({
            amount: transaction.amount,
            category: transaction.category,
            type: transaction.type,
            paymentMethod: transaction.paymentMethod
        })
    }

    // ฟังก์ชันยกเลิกการแก้ไข
    const cancelEdit = () => {
        setEditId(null)
        resetForm()
    }

    // ฟังก์ชันลบรายการ
    const deleteTransaction = (id) => {
        if (window.confirm('คุณต้องการลบรายการนี้ใช่หรือไม่?')) {
            deleteTransactionContext(id)
            // ถ้าลบรายการที่กำลังแก้ไขอยู่ ให้ยกเลิกการแก้ไข
            if (editId === id) {
                cancelEdit()
            }
        }
    }

    // ฟังก์ชันสำหรับกรองรายการ
    const getFilteredTransactions = () => {
        return transactions.filter(transaction => {
            const categoryMatch = filters.category === 'all' ||
                transaction.category === filters.category
            const typeMatch = filters.type === 'all' ||
                transaction.type === filters.type
            const paymentMatch = filters.paymentMethod === 'all' ||
                transaction.paymentMethod === filters.paymentMethod

            return categoryMatch && typeMatch && paymentMatch
        })
    }

    // ฟังก์ชันคำนวณยอดรวม
    const calculateTotal = (type) => {
        const filtered = getFilteredTransactions()
        return filtered
            .filter(t => t.type === type)
            .reduce((sum, t) => sum + t.amount, 0)
    }

    // Derived state
    const totalExpense = calculateTotal('expense')
    const totalIncome = calculateTotal('income')
    const balance = totalIncome - totalExpense
    const filteredTransactions = getFilteredTransactions()

    return {
        transactions,
        formData,
        setFormData,
        filters,
        setFilters,
        editId,
        handleSubmit,
        startEdit,
        cancelEdit,
        deleteTransaction,
        totalExpense,
        totalIncome,
        balance,
        filteredTransactions
    }
}
