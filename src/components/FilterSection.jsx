// Component สำหรับกรองรายการ
function FilterSection({ filters, setFilters }) {

    // ฟังก์ชันจัดการเมื่อเปลี่ยน filter
    const handleFilterChange = (field, value) => {
        setFilters({ ...filters, [field]: value })
    }

    return (
        <div className="filter-section">
            <h2>🔍 กรองรายการ</h2>
            <div className="filter-row">
                {/* กรองตามหมวดหมู่ */}
                <div className="filter-group">
                    <label>หมวดหมู่</label>
                    <select
                        value={filters.category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                    >
                        <option value="all">ทั้งหมด</option>
                        <option value="Food">อาหาร</option>
                        <option value="Transport">ค่าเดินทาง</option>
                        <option value="Shopping">ช้อปปิ้ง</option>
                        <option value="Entertainment">ความบันเทิง</option>
                        <option value="Salary">เงินเดือน</option>
                        <option value="Other">อื่นๆ</option>
                    </select>
                </div>

                {/* กรองตามประเภท */}
                <div className="filter-group">
                    <label>ประเภท</label>
                    <select
                        value={filters.type}
                        onChange={(e) => handleFilterChange('type', e.target.value)}
                    >
                        <option value="all">ทั้งหมด</option>
                        <option value="expense">รายจ่าย</option>
                        <option value="income">รายรับ</option>
                    </select>
                </div>

                {/* กรองตามวิธีชำระเงิน */}
                <div className="filter-group">
                    <label>วิธีชำระเงิน</label>
                    <select
                        value={filters.paymentMethod}
                        onChange={(e) => handleFilterChange('paymentMethod', e.target.value)}
                    >
                        <option value="all">ทั้งหมด</option>
                        <option value="Cash">เงินสด</option>
                        <option value="Credit Card">บัตรเครดิต</option>
                        <option value="Debit Card">บัตรเดบิต</option>
                        <option value="E-Wallet">กระเป๋าเงินอิเล็กทรอนิกส์</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterSection
