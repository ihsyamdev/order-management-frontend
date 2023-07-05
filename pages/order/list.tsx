import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export default function OrderList() {
  return (
    <>
      <Head>
        <title>Order Management Sample</title>
      </Head>
      <DefaultLayout>
        <h1>this is order list</h1>
        <div className='font-bold'> this is order list decorated</div>
      </DefaultLayout>
    </>
  )
}
