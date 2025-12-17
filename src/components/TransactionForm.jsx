// Component สำหรับฟอร์มเพิ่มรายการใหม่
function TransactionForm({ formData, setFormData, onSubmit, editId, onCancel }) {

    // ฟังก์ชันจัดการเมื่อกรอกข้อมูล
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    return (
        <div className="form-section">
            <h2>{editId ? '✏️ แก้ไขรายการ' : '➕ เพิ่มรายการใหม่'}</h2>
            <form onSubmit={onSubmit}>
                {/* แถวที่ 1: จำนวนเงิน และ หมวดหมู่ */}
                <div className="form-row">
                    <div className="form-group">
                        <label>จำนวนเงิน (บาท)</label>
                        <input
                            type="number"
                            value={formData.amount}
                            onChange={(e) => handleChange('amount', e.target.value)}
                            placeholder="100"
                            step="0.01"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>หมวดหมู่</label>
                        <select
                            value={formData.category}
                            onChange={(e) => handleChange('category', e.target.value)}
                        >
                            <option value="Food">อาหาร</option>
                            <option value="Transport">ค่าเดินทาง</option>
                            <option value="Shopping">ช้อปปิ้ง</option>
                            <option value="Entertainment">ความบันเทิง</option>
                            <option value="Salary">เงินเดือน</option>
                            <option value="Other">อื่นๆ</option>
                        </select>
                    </div>
                </div>

                {/* แถวที่ 2: ประเภท และ วิธีชำระเงิน */}
                <div className="form-row">
                    <div className="form-group">
                        <label>ประเภท</label>
                        <select
                            value={formData.type}
                            onChange={(e) => handleChange('type', e.target.value)}
                        >
                            <option value="expense">รายจ่าย</option>
                            <option value="income">รายรับ</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>วิธีชำระเงิน</label>
                        <select
                            value={formData.paymentMethod}
                            onChange={(e) => handleChange('paymentMethod', e.target.value)}
                        >
                            <option value="Cash">เงินสด</option>
                            <option value="Credit Card">บัตรเครดิต</option>
                            <option value="Debit Card">บัตรเดบิต</option>
                            <option value="E-Wallet">กระเป๋าเงินอิเล็กทรอนิกส์</option>
                        </select>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className={`btn-submit ${editId ? 'edit' : ''}`}>
                        {editId ? 'บันทึกการแก้ไข' : 'เพิ่มรายการ'}
                    </button>
                    {editId && (
                        <button type="button" className="btn-cancel" onClick={onCancel}>
                            ยกเลิก
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default TransactionForm
