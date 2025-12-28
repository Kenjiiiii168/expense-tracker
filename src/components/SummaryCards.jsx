// Component สำหรับแสดงการ์ดสรุปยอดเงิน (รายรับ, รายจ่าย, คงเหลือ)
import SummaryCard from './SummaryCard'

function SummaryCards({ totalIncome, totalExpense, balance }) {
    return (
        <div className="summary-cards">
            <SummaryCard
                title="รายรับ"
                amount={totalIncome}
                icon="📈"
                className="income"
            />
            <SummaryCard
                title="รายจ่าย"
                amount={totalExpense}
                icon="📉"
                className="expense"
            />
            <SummaryCard
                title="คงเหลือ"
                amount={balance}
                icon="💵"
                className="balance"
            />
        </div>
    )
}

export default SummaryCards
