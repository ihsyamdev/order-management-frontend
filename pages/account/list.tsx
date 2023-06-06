import React, { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/templates/DefaultLayout'
import CustomerSearchForm from '@/components/organisms/CustomerSearchForm'
import CustomerList from '@/components/molecules/CustomerList'
import { Customer } from '@/types'

const inter = Inter({ subsets: ['latin'] })

const AccountList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([])

  const fetchCustomers = async (accountName: string) => {
    try {
      const response = await fetch('http://localhost:3000/customer/search/' + accountName)
      const jsonData = await response.json()
      const mappedCustomers = jsonData.items.customers.map((customer: Customer) => {
        return {
          id: customer.id,
          name: customer.name,
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
      <title>Order Management Sample</title>  
    </Head>
    <DefaultLayout>
      <h1>取引先一覧</h1>
      <CustomerSearchForm onSearch={handleSearch} />
      <CustomerList customers={customers} />
    </DefaultLayout>
    </>
  )

}

export default AccountList
