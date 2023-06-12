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
        <h1>新規取引先の登録</h1>
        <form className="flex flex-col">
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0"htmlFor="accountName">取引先名</label>
            <input className="border flex-grow" type="text" id="accountName" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingPostalCode">郵便番号(請求先)</label>
            <input className="border flex-grow" type="text" id="accountBillingPostalCode" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingState">都道府県(請求先)</label>
            <input className="border flex-grow" type="text" id="accountBillingState" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingCity">市区町村(請求先)</label>
            <input className="border flex-grow" type="text" id="accountBillingCity" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingStreet">番地その他(請求先)</label>
            <input className="border flex-grow" type="text" id="accountBillingStreet" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingPostalCode">郵便番号(納品先)</label>
            <input className="border flex-grow" type="text" id="accountShippingPostalCode" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingState">都道府県(納品先)</label>
            <input className="border flex-grow" type="text" id="accountShippingState" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingCity">市区町村(納品先)</label>
            <input className="border flex-grow" type="text" id="accountShippingCity" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingStreet">番地その他(納品先)</label>
            <input className="border flex-grow" type="text" id="accountShippingStreet" />
          </div>
          <div className="flex items-center">
            <label className="w-40 flex-shrink-0" htmlFor="accountPhone">電話番号</label>
            <input className="border flex-grow" type="text" id="accountPhone" />
          </div>
        </form>
      </DefaultLayout>
    </>
  )
}
