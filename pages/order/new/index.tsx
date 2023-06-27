import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'
import OrderForm from '@/components/order/OrderForm'
import SaveButton from '@/components/common/SaveButton'

const inter = Inter({ subsets: ['latin'] })

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
        <SaveButton onClick={handleSave}/>
        <OrderForm />
      </DefaultLayout>
    </>
  )
}
