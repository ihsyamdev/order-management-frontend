import Link from 'next/link'
import styles from './styles.module.css'
import { OrderDetail } from '@/types/order'

interface OrderDetailListProps {
  orderDetails: Partial<OrderDetail>[]
}

const OrderDetailList: React.FC<OrderDetailListProps> = ({ orderDetails }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.headerField}>選択</th>
          <th className={styles.headerField}>商品</th>
          <th className={styles.headerField}>単価</th>
          <th className={styles.headerField}>数量</th>
          <th className={styles.headerField}>小計</th>
          <th className={styles.headerField}>消費税率</th>
        </tr>
      </thead>
      <tbody>
        {orderDetails.map((orderDetail: Partial<OrderDetail>) => (
          <tr className={styles.record} key={orderDetail.id}>
            <td className={styles.recordField}>
              <input type='checkbox'/>
            </td>
            <td className={styles.recordField}>
              <input type='text' defaultValue={orderDetail.name}/>
            </td>
            <td className={styles.recordField}>
              <input type='text' defaultValue={`${orderDetail.unitPrice}`}/>
              <span>円</span>
            </td>
            <td className={styles.recordField}>
              <input type='text' defaultValue={`${orderDetail.quantity}`}/>
              <span>個</span>
            </td>
            <td className={styles.recordField}>
              <input type='text' defaultValue={`${orderDetail.unitPrice * orderDetail.quantity}`}/>
              <span>円</span>
            </td>
            <td className={styles.recordField}>
              <input type='text' defaultValue={`${orderDetail.taxRate}`}/>
              <span>%</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default OrderDetailList
