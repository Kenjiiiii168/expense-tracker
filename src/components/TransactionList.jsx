// Component สำหรับแสดงรายการทั้งหมด
import TransactionItem from './TransactionItem'

function TransactionList({ transactions, onEdit, onDelete }) {

    // ถ้าไม่มีรายการ แสดงข้อความว่าง
    if (transactions.length === 0) {
        return (
            <div className="transactions-section">
                <h2>📋 รายการทั้งหมด (0)</h2>
                <div className="empty-state">
                    <p>ยังไม่มีรายการ กรุณาเพิ่มรายการใหม่</p>
                </div>
            </div>
        )
    }

    return (
        <div className="transactions-section">
            <h2>📋 รายการทั้งหมด ({transactions.length})</h2>

            <div className="transaction-list">
                {transactions.map((transaction) => (
                    <TransactionItem
                        key={transaction.id}
                        transaction={transaction}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default TransactionList
