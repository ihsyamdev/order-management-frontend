import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import OrderForm from '@/components/order/OrderForm'
import DraftSaveButton from '@/components/order/DraftSaveButton'
import DetailAddButton from '@/components/order/DetailAddButton'
import DetailRemoveButton from '@/components/order/DetailRemoveButton'
import OrderDetailList from '@/components/order/OrderDetailList'
import { OrderDetail } from '@/types/order'

const orderDetails: Partial<OrderDetail>[] = [
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
]

export default function Order() {

  const handleSave = () => {
    console.log('saved')
  }


  return (
    <>
      <Head>
        <title>Order Management Sample</title>
      </Head>
      <DefaultLayout>
        <h1 className='p-6 text-xl font-bold'>新規受注の登録</h1>
        <DraftSaveButton />
        <OrderForm />
        <DetailAddButton />
        <DetailRemoveButton />
        <OrderDetailList orderDetails={orderDetails}/>
      </DefaultLayout>
    </>
  )
}
