import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/layouts/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Order() {
  return (
    <>
      <Head>
        <title>Order Management Sample</title>
      </Head>
      <DefaultLayout>
        <h1>this is new order</h1>
        <div className='font-bold'> this is new order decorated</div>
      </DefaultLayout>
    </>
  )
}
