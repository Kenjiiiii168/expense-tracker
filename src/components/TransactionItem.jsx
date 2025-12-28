// Component สำหรับรายการธุรกรรมแต่ละรายการ
function TransactionItem({ transaction, onEdit, onDelete }) {
    return (
        <div className={`transaction-item ${transaction.type}`}>
            {/* ข้อมูลรายการ */}
            <div className="transaction-info">
                <h3>{transaction.category}</h3>
                <div className="transaction-details">
                    <span className="badge">
                        {transaction.type === 'expense' ? 'รายจ่าย' : 'รายรับ'}
                    </span>
                    <span className="badge">{transaction.paymentMethod}</span>
                    <span className="date">{transaction.date}</span>
                </div>
            </div>

            {/* ส่วนขวา: จำนวนเงิน และ ปุ่มจัดการ */}
            <div className="transaction-actions">
                <div className={`transaction-amount ${transaction.type}`}>
                    {transaction.type === 'expense' ? '-' : '+'}
                    ฿{transaction.amount.toLocaleString()}
                </div>
                <div className="action-buttons">
                    <button
                        className="btn-edit"
                        onClick={() => onEdit(transaction)}
                        title="แก้ไข"
                    >
                        ✏️
                    </button>
                    <button
                        className="btn-delete"
                        onClick={() => onDelete(transaction.id)}
                        title="ลบ"
                    >
                        🗑️
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TransactionItem
