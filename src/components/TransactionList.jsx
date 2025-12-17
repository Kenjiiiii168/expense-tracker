// Component สำหรับแสดงรายการทั้งหมด
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
                    <div
                        key={transaction.id}
                        className={`transaction-item ${transaction.type}`}
                    >
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
                ))}
            </div>
        </div>
    )
}

export default TransactionList
