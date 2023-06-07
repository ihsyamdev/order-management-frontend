import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/templates/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Account() {
  return (
    <>
      <Head>
        <title>取引先新規登録</title>
      </Head>
      <DefaultLayout>
        <h1>this is new account</h1>
        <div className='font-bold'> this is new account decorated</div>
      </DefaultLayout>
    </>
  )
}
