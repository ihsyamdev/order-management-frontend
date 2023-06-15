import React from 'react'
import { Customer } from '../../../types'
import Link from 'next/link'

interface CustomerListProps {
  customers: Customer[]
}

const CustomerTable: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <table className="mx-2 my-5">
      <thead className="bg-blue-700 text-white text-sm">
        <tr>
          <th className="w-36 border">ID</th>
          <th className="w-48">取引先名</th>
          <th className="w-60 border">請求先住所</th>
          <th className="w-60 border">納品先住所</th>
          <th className="w-36 border">電話番号</th>
          <th className="w-36 border">最終更新</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer: Customer) => (
          <tr className="border text-sm" key={customer.id}>
            <Link href={`/customer/detail?id=${customer.id}`} as={`${customer.id}`}>
              <td className="border">{customer.id}</td>
            </Link>
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

export default CustomerTable
