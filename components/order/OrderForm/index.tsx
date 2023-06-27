import { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import OrderDetailList from '../OrderDetailList'
import { OrderDetail } from '@/types/order'

const orderDetailsSample: Partial<OrderDetail>[] = [
  {
    id: 'A001',
    name: '商品A',
    unitPrice: 1000,
    quantity: 1,
    taxRate: 10,
  },
  {
    id: 'A002',
    name: '商品B',
    unitPrice: 2000,
    quantity: 2,
    taxRate: 10,
  }
]

const OrderForm: React.FC = () => {
  return (
    <>
      <form className={styles.form}>
        <div id='customer' className={styles.formDiv}>
          <label htmlFor='customerInput' className={styles.formLabel}>取引先</label>
          <input id='customerInput' className={styles.formInput} type='text'/>
          <button id='customerSearchButton' className={styles.searchButton}>検索</button>
        </div>
        <div id='orderDate' className={styles.formDiv}>
          <label htmlFor='orderDateInput' className={styles.formLabel}>受注日</label>
          <input id='orderDateInput' className={styles.formInput} type='date'/>
        </div>
        <div id='totalAmountWithoutTax' className={styles.formDiv}>
          <label htmlFor='totalAmountWithoutTaxInput' className={styles.formLabel}>受注総額(税別)</label>
          <input id='totalAmountWithoutTaxInput' className={styles.formInput} type='number'/>
        </div>
        <div id='totalAmountWithTax' className={styles.formDiv}>
          <label htmlFor='totalAmountWithTax' className={styles.formLabel}>受注総額(税込)</label>
          <input id='totalAmountWithTax' className={styles.formInput} type='number'/>
        </div>
        <div id='draft' className={styles.formDiv}>
          <label htmlFor='draftIput' className={styles.formLabel}>下書き</label>
          <input id='draftInput' className={`${styles.formInput} ${styles.formInputShort}`} type='checkbox' disabled={true}/>
        </div>
        <div id='approvalStatus' className={styles.formDiv}>
          <label htmlFor='approvalStatusInput' className={styles.formLabel}>承認ステータス</label>
          <input id='approvalStatusInput' className={styles.formInput} type='text' disabled={true}/>
        </div>
      </form>

      <OrderDetailList orderDetails={orderDetailsSample}/>

    </>

  )
}

export default OrderForm
