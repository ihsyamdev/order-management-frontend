import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import CustomerForm from '@/components/customer/CustomerForm'
import Head from 'next/head'
import SaveButton from '@/components/common/SaveButton'
import CancelButton from '@/components/common/CancelButton'
import { Customer } from '@/types/customer'
import { useRouter } from 'next/router'
import axios from 'axios'

const CustomerEditPage: React.FC = () => {
  const router = useRouter()
  const customerId = router.query.customerId
  const [customer, setCustomer] = useState({})

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/customer/${customerId}`)
        // 後でresponseBodyの中身に合わせて修正
        setCustomer(response.data.item.customer)
      } catch (error) {
        console.error('Error fetching customer: ', error)
      }
    }
    fetchCustomerData()
  }, [customerId])

  const handleSave = () => {
    // TODO: Formのデータを使ってPATCH
    console.log('CustomerEditPage: handleSaveが起動しました')
    console.log(customer)
    router.push(`/customer/${customerId}`)
  }

  const handleCancel = () => {
    router.push(`/customer/${customerId}`)
  }

  const handleFormSubmit = (updatedCustomer: Partial<Customer>) => {
    setCustomer((prevCustomer) => ({ ...prevCustomer, ...updatedCustomer }))
  }

  return (
    <div>
      <Head>
        <title>取引先編集</title>
      </Head>
      <DefaultLayout>
        <h1 className="p-6 text-xl font-bold">取引先編集</h1>
        <SaveButton onClick={handleSave}/>
        <CancelButton onClick={handleCancel}/>
        <CustomerForm onBlur={handleFormSubmit} customer={customer}/>
      </DefaultLayout>
    </div>
  )
}

export default CustomerEditPage
