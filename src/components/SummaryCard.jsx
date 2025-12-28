// Component สำหรับแสดงการ์ดสรุปยอด
function SummaryCard({ title, amount, icon, className }) {
    return (
        <div className={`summary-card ${className}`}>
            <div className="card-icon">{icon}</div>
            <div className="card-content">
                <p className="card-label">{title}</p>
                <p className="card-amount">฿{amount.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default SummaryCard
