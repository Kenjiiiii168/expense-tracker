import './App.css'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import TransactionForm from './components/TransactionForm'
import FilterSection from './components/FilterSection'
import TransactionList from './components/TransactionList'
import { useTransactions } from './hooks/useTransactions'

function App() {
  const {
    formData,
    setFormData,
    filters,
    setFilters,
    editId,
    handleSubmit,
    startEdit,
    cancelEdit,
    deleteTransaction,
    totalExpense, // ตรวจสอบว่า hook return ค่านี้ออกมา
    totalIncome,
    balance,
    filteredTransactions
  } = useTransactions()

  return (
    <div className="app">
      <div className="container">
        <Header />

        <SummaryCards
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
        />

        <TransactionForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          editId={editId}
          onCancel={cancelEdit}
        />

        <FilterSection
          filters={filters}
          setFilters={setFilters}
        />

        <TransactionList
          transactions={filteredTransactions}
          onEdit={startEdit}
          onDelete={deleteTransaction}
        />
      </div>
    </div>
  )
}

export default App
