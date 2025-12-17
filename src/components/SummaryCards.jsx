// Component สำหรับแสดงการ์ดสรุปยอดเงิน (รายรับ, รายจ่าย, คงเหลือ)
function SummaryCards({ totalIncome, totalExpense, balance }) {
    return (
        <div className="summary-cards">
            {/* การ์ดรายรับ */}
            <div className="summary-card income">
                <div className="card-icon">📈</div>
                <div className="card-content">
                    <p className="card-label">รายรับ</p>
                    <p className="card-amount">฿{totalIncome.toLocaleString()}</p>
                </div>
            </div>

            {/* การ์ดรายจ่าย */}
            <div className="summary-card expense">
                <div className="card-icon">📉</div>
                <div className="card-content">
                    <p className="card-label">รายจ่าย</p>
                    <p className="card-amount">฿{totalExpense.toLocaleString()}</p>
                </div>
            </div>

            {/* การ์ดยอดคงเหลือ */}
            <div className="summary-card balance">
                <div className="card-icon">💵</div>
                <div className="card-content">
                    <p className="card-label">คงเหลือ</p>
                    <p className="card-amount">฿{balance.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default SummaryCards
