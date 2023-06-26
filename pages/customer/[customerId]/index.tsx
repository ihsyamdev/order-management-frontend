import Head from 'next/head'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import CustomerForm from '@/components/customer/CustomerForm'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import EditButton from '@/components/common/EditButton'

const CustomerDetailPage: React.FC = () => {
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

  return (
    <div>
      <Head>
        <title>取引先の詳細</title>
      </Head>
      <DefaultLayout>
        <h1 className="text-lg font-semibold text-center my-5">取引先詳細</h1>
        <EditButton url={`http://localhost:4000/customer/${customerId}/edit`}/>
        <CustomerForm customer={customer} disabled={true}/>
      </DefaultLayout>
    </div>
  )
}

export default CustomerDetailPage
