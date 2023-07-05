import styles from './styles.module.css'
import { Order } from '@/types/order'

export interface OrderFormProps {
  order?: Partial<Order>
  disabled?: boolean | false
}

const OrderForm: React.FC<OrderFormProps> = ({order, disabled}) => {
  return (
    <>
      <form className={styles.form}>
        <div id='customer' className={styles.formDiv}>
          <label htmlFor='customerInput' className={styles.formLabel}>取引先</label>
          <input
            id='customerInput'
            className={styles.formInput}
            type='text'
            defaultValue={order? `${order.customer}`: ''}
            disabled={disabled}
          />
          <button id='customerSearchButton' className={styles.searchButton}>検索</button>
        </div>
        <div id='orderDate' className={styles.formDiv}>
          <label htmlFor='orderDateInput' className={styles.formLabel}>受注日</label>
          <input
            id='orderDateInput'
            className={styles.formInput}
            type='date'
            defaultValue={order ? `${order.submitDate?.toISOString().split('T')[0]}`: `${new Date().toISOString().split('T')[0]}`}
            disabled={disabled}
          />
        </div>
        <div id='totalAmountWithoutTax' className={styles.formDiv}>
          <label htmlFor='totalAmountWithoutTaxInput' className={styles.formLabel}>受注総額(税別)</label>
          <input
            id='totalAmountWithoutTaxInput'
            className={styles.formInput}
            type='number'
            defaultValue={order? `${order.totalAmountWithoutTax}`: 0}
            disabled={disabled}
          />
        </div>
        <div id='totalAmountWithTax' className={styles.formDiv}>
          <label htmlFor='totalAmountWithTax' className={styles.formLabel}>受注総額(税込)</label>
          <input
            id='totalAmountWithTax'
            className={styles.formInput}
            type='number'
            defaultValue={order? `${order.totalAmountWithTax}`: 0}
            disabled={disabled}
          />
        </div>
        <div id='draft' className={styles.formDiv}>
          <label htmlFor='draftIput' className={styles.formLabel}>下書き</label>
          <input
            id='draftInput'
            className={`${styles.formInput}
            ${styles.formInputShort}`}
            type='checkbox'
            defaultChecked={order? `${order.draft}`: false}
            disabled={true}
          />
        </div>
        <div id='approvalStatus' className={styles.formDiv}>
          <label htmlFor='approvalStatusInput' className={styles.formLabel}>承認ステータス</label>
          <input
            id='approvalStatusInput'
            className={styles.formInput}
            type='text'
            defaultValue={order? `${order.approvalStage}`: ''}
            disabled={true}
          />
        </div>
      </form>
    </>
  )
}

export default OrderForm
