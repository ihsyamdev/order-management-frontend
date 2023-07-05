import Head from 'next/head'
import { useState } from 'react'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import OrderForm from '@/components/order/OrderForm'
import DraftSaveButton from '@/components/order/DraftSaveButton'
import DetailAddButton from '@/components/order/DetailAddButton'
import DetailRemoveButton from '@/components/order/DetailRemoveButton'
import OrderDetailList from '@/components/order/OrderDetailList'
import { OrderDetail } from '@/types/order'
import { OrderDetailWithChecked } from '@/components/order/OrderDetailList'
import OrderSubmitButton from '@/components/order/OrderSubmitButton'
import { Order } from '@/types/order'
import EditButton from '@/components/common/EditButton'

const OrderDetailPage = () => {

  const [orderDetails, setOrderDetails] = useState<Partial<OrderDetailWithChecked>[]>([
    {
      id: "A001",
      name: '商品A',
      rowNumber: 1,
      unitPrice: 1000,
      quantity: 1,
      taxRate: 10,
      checked: false
    },
    {
      id: "A002",
      name: '商品B',
      rowNumber: 2,
      unitPrice: 2000,
      quantity: 2,
      taxRate: 10,
      checked: false
    },
    {
      id: "A003",
      name: '商品C',
      rowNumber: 3,
      unitPrice: 3000,
      quantity: 3,
      taxRate: 10,
      checked: false
    }
  ])

  const firstDateInThisMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  const [order, setOrder] = useState<Partial<Order>>({
    id: "001",
    shortId: "1",
    sequense: 1,
    customer: "株式会社テスト",
    totalAmountWithoutTax: 10000,
    totalAmountWithTax: 11000,
    submitter: "田中太郎",
    submitDate: firstDateInThisMonth,
    approver: "",
    draft: false,
    approvalStage: '承認待ち',
  })

  return (
    <>
      <Head>
        <title>受注照会</title>
      </Head>
      <DefaultLayout>
        <h1 className='p-6 text-xl font-bold'>受注照会</h1>
        <EditButton url='http://localhost:4000/order/ABC/edit' />
        <OrderForm order={order} disabled={true}/>
        <OrderDetailList orderDetails={orderDetails} disabled={true}/>
      </DefaultLayout>
    </>
  )
}

export default OrderDetailPage
