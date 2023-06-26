import { useState } from 'react'
import Head from 'next/head'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import CustomerForm from '@/components/customer/CustomerForm'
import SaveButton from '@/components/common/SaveButton'
import CancelButton from '@/components/common/CancelButton'
import { Customer } from '@/types/customer'

const CustomerNewPage: React.FC = () => {

  const [customer, setCustomer] = useState({})

  const handleSave = () => {
    // TODO: Formのデータを使ってPOST
    console.log('CustomerNewPage: handleSaveが起動しました')
    console.log(customer)
  }

  const handleFormSubmit = (updatedCustomer: Partial<Customer>) => {
    setCustomer(updatedCustomer)
  }

  return (
    <>
      <Head>
        <title>取引先新規登録</title>
      </Head>
      <DefaultLayout>
        <h1 className='p-6 text-xl font-bold'>新規取引先の登録</h1>
        <SaveButton onClick={handleSave}/>
        <CancelButton />
        <CustomerForm onBlur={handleFormSubmit}/>
      </DefaultLayout>
    </>
  )
}

export default CustomerNewPage
