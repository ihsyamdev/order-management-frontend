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

  // TODO: 後でAPIから取得するようにする
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

  // 追加ボタンを押したら空のレコードを追加
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
  }

  // チェックボックスをクリックしたらチェック状態を反転させる
  const handleCheckboxChange = (rowNumber: number) => {
    orderDetails.map(row => {
      if (row.rowNumber === rowNumber) {
        row.checked = !row.checked
      }
    })
  }

  // 削除ボタンを押したらチェックされたレコードを削除
  const handleRemoveButtonClick = () => {
    const deletedOrderDetails = orderDetails.filter(row => row.checked === false)
    const newOrderDetails = deletedOrderDetails.map((item, index) => {
      item.rowNumber = index + 1
      return item
    })
    setOrderDetails(newOrderDetails)
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
