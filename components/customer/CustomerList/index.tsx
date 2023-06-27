import React from 'react'
import { Customer } from '../../../types'
import Link from 'next/link'
import styles from './styles.module.css'

interface CustomerListProps {
  customers: Customer[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th className={styles.headerField}>ID</th>
          <th className={styles.headerField}>取引先名</th>
          <th className={styles.headerField}>請求先住所</th>
          <th className={styles.headerField}>納品先住所</th>
          <th className={styles.headerField}>電話番号</th>
          <th className={styles.headerField}>最終更新</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer: Customer) => (
          <tr className={styles.record} key={customer.id}>
            <Link href={`/customer/detail?id=${customer.id}`} as={`${customer.id}`}>
              <td className={styles.recordField}>{customer.id}</td>
            </Link>
            <td className={styles.recordField}>{customer.name}</td>
            <td className={styles.recordField}>{customer.billingState + customer.billingCity + customer.billingStreet}</td>
            <td className={styles.recordField}>{customer.shippingState + customer.shippingCity + customer.shippingStreet}</td>
            <td className={styles.recordField}>{customer.phone}</td>
            <td className={styles.recordField}>{customer.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerList
