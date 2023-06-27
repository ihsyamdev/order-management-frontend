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
          <th className={styles.headerField}>商品</th>
          <th className={styles.headerField}>単価</th>
          <th className={styles.headerField}>数量</th>
          <th className={styles.headerField}>小計</th>
          <th className={styles.headerField}>消費税率</th>
          <th className={styles.headerField}></th>
        </tr>
      </thead>
      <tbody>
        {orderDetails.map((orderDetail: Partial<OrderDetail>) => (
          <tr className={styles.record} key={orderDetail.id}>
            <td className={styles.recordField}>{orderDetail.name}</td>
            <td className={styles.recordField}>{orderDetail.unitPrice}円</td>
            <td className={styles.recordField}>{orderDetail.quantity}個</td>
            <td className={styles.recordField}>{`${orderDetail.unitPrice * orderDetail.quantity}円`}</td>
            <td className={styles.recordField}>{orderDetail.taxRate}%</td>
            <td className={styles.recordField}><button className={styles.deleteButton}>削除</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default OrderDetailList
