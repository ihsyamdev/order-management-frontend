import React from 'react'
import { Customer } from '../../../types'

interface CustomerListProps {
  customers: Customer[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <table className="mx-2 my-5">
      <thead className="bg-green-900 text-white text-sm">
        <tr>
          <th className="w-36 border">ID</th>
          <th className="w-36">取引先名</th>
          <th className="w-48 border">請求先住所</th>
          <th className="w-48 border">納品先住所</th>
          <th className="w-24 border">電話番号</th>
          <th className="w-36 border">最終更新日時</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer: Customer) => (
          <tr className="border" key={customer.id}>
            <td className="border">{customer.id}</td>
            <td className="border">{customer.name}</td>
            <td className="border">{customer.billingState + customer.billingCity + customer.billingStreet}</td>
            <td className="border">{customer.shippingState + customer.shippingCity + customer.shippingStreet}</td>
            <td className="border">{customer.phone}</td>
            <td className="border">{customer.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerList
