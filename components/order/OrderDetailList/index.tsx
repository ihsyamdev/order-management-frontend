import styles from './styles.module.css'
import { OrderDetail } from '@/types/order'

export interface OrderDetailWithChecked extends OrderDetail {
  checked: boolean
}

interface OrderDetailListProps {
  orderDetails: Partial<OrderDetailWithChecked>[]
  disabled?: boolean | false
  onCheckboxChange?: (rowNumber: number) => void
}

const OrderDetailList: React.FC<OrderDetailListProps> = ({ orderDetails, disabled, onCheckboxChange }) => {

  const handleCheckboxChange = (rowNumber: number) => {
    onCheckboxChange(rowNumber)
  }

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.headerField}>選択</th>
          <th className={styles.headerField}>行番号</th>
          <th className={styles.headerField}>商品</th>
          <th className={styles.headerField}>単価</th>
          <th className={styles.headerField}>数量</th>
          <th className={styles.headerField}>小計</th>
          <th className={styles.headerField}>消費税率</th>
        </tr>
      </thead>
      <tbody>
        {orderDetails.map((orderDetail: Partial<OrderDetailWithChecked>) => (
          <tr className={styles.record} key={orderDetail.rowNumber}>
            <td className={styles.recordField}>
              <input 
                type='checkbox'
                onChange={() => handleCheckboxChange(orderDetail.rowNumber)}
                disabled={disabled}
              />
            </td>
            <td className={styles.recordField}>
              <input
                type='number'
                defaultValue={orderDetail.rowNumber}
                disabled={true}
              />
            </td>
            <td className={styles.recordField}>
              <input
                type='text'
                defaultValue={orderDetail.name}
                disabled={disabled}
              />
            </td>
            <td className={styles.recordField}>
              <input
                type='text'
                defaultValue={`${orderDetail.unitPrice}`}
                disabled={disabled}
              />
              <span>円</span>
            </td>
            <td className={styles.recordField}>
              <input
                type='text'
                defaultValue={`${orderDetail.quantity}`}
                disabled={disabled}
              />
              <span>個</span>
            </td>
            <td className={styles.recordField}>
              <input
                type='text'
                defaultValue={`${orderDetail.unitPrice * orderDetail.quantity}`}
                disabled={disabled}
              />
              <span>円</span>
            </td>
            <td className={styles.recordField}>
              <input
                type='text'
                defaultValue={`${orderDetail.taxRate}`}
                disabled={disabled}
              />
              <span>%</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default OrderDetailList
