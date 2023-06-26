import React, { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import CustomerSearchForm from '@/components/customer/CustomerSearchForm'
import CustomerList from '@/components/customer/CustomerList'
import { Customer } from '@/types'

const inter = Inter({ subsets: ['latin'] })

const CustomerListPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([])

  const fetchCustomers = async (accountName: string) => {
    try {
      const response = await fetch(`${process.env.API_URL}/customer/search/` + accountName)
      const jsonData = await response.json()
      const mappedCustomers = jsonData.items.customers.map((customer: Customer) => {
        const convertedDateTime = new Date(customer.updatedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})
        return {
          id: customer.id,
          name: customer.name,
          billingState: customer.billingState,
          billingCity: customer.billingCity,
          billingStreet: customer.billingStreet,
          shippingState: customer.shippingState,
          shippingCity: customer.shippingCity,
          shippingStreet: customer.shippingStreet,
          phone: customer.phone,
          updatedAt: convertedDateTime
        }})
      setCustomers(mappedCustomers)
    } catch (error) {
      console.log('データ取得に失敗しました', error)
    }
  }

  const handleSearch = (searchQuery: string) => {
    fetchCustomers(searchQuery)
  }

  return (
    <>
    <Head>
      <title>取引先一覧</title>  
    </Head>
    <DefaultLayout>
      <div className="m-2">
        <h1 className="m-2 text-xl font-bold">取引先一覧</h1>
        <CustomerSearchForm onSearch={handleSearch} />
        <CustomerList customers={customers} />
      </div>
    </DefaultLayout>
    </>
  )

}

export default CustomerListPage
