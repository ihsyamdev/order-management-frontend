import Head from 'next/head'
import { useState } from 'react'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import OrderForm from '@/components/order/OrderForm'
import DraftSaveButton from '@/components/order/DraftSaveButton'
import DetailAddButton from '@/components/order/DetailAddButton'
import DetailRemoveButton from '@/components/order/DetailRemoveButton'
import OrderDetailList from '@/components/order/OrderDetailList'
import { OrderDetail } from '@/types/order'
import OrderSubmitButton from '@/components/order/OrderSubmitButton'


export default function Order() {

  const [orderDetails, setOrderDetails] = useState<Partial<OrderDetail>[]>([
    {
      id: "A001",
      name: '商品A',
      unitPrice: 1000,
      quantity: 1,
      taxRate: 10
    },
    {
      id: "A002",
      name: '商品B',
      unitPrice: 2000,
      quantity: 2,
      taxRate: 10
    }
  ])

  const handleClick = () => {
    setOrderDetails([
      ...orderDetails,
      {
        id: '',
        name: '',
        unitPrice: 0,
        quantity: 0,
        taxRate: 0
      }
    ])
    console.log(orderDetails)
  }

  return (
    <>
      <Head>
        <title>Order Management Sample</title>
      </Head>
      <DefaultLayout>
        <h1 className='p-6 text-xl font-bold'>新規受注の登録</h1>
        <DraftSaveButton />
        <OrderSubmitButton />
        <OrderForm />
        <DetailAddButton handleClick={handleClick} />
        <DetailRemoveButton />
        <OrderDetailList orderDetails={orderDetails}/>
      </DefaultLayout>
    </>
  )
}
