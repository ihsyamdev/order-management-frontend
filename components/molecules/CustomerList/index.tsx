import React from 'react'
import { Customer } from '../../../types'

interface CustomerListProps {
  customers: Customer[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer: Customer) => (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerList
