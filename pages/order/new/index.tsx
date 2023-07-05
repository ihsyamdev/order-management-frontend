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


const NewOrderPage = () => {

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
    }
  ])

  const [deleteOrderDetails, setDeleteOrderDetails] = useState<Partial<OrderDetailWithChecked>[]>([])

  const clickAddDetail = () => {
    setOrderDetails([
      ...orderDetails,
      {
        id: '',
        name: '',
        rowNumber: orderDetails.length + 1,
        unitPrice: 0,
        quantity: 0,
        taxRate: 0
      }
    ])
    console.log(orderDetails)
  }

  const clickRemoveDetail = () => {
    
  }

  const handleCheckboxChange = (orderDetailId: string) => {
    const updatedOrderDetails = orderDetails.map((orderDetail) => {
      if (orderDetail.id === orderDetailId) {
        console.log(orderDetail)
        // return {
        //   ...orderDetail, checked: !orderDetail.checked
        // }
      }
    })
    // setOrderDetails(updatedOrderDetails)
  }

  const handleRemoveButtonClick = () => {
    const updatedOrderDetails = orderDetails.filter((orderDetail) => {
      return orderDetail.checked === false
    })
    console.log(updatedOrderDetails)
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
        <DetailAddButton handleClick={clickAddDetail} />
        <DetailRemoveButton handleClick={handleRemoveButtonClick}/>
        <OrderDetailList orderDetails={orderDetails} onCheckboxChange={handleCheckboxChange}/>
      </DefaultLayout>
    </>
  )
}

export default NewOrderPage
