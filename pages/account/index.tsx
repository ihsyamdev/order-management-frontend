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
        <form className="mx-auto">
          <div>
            <label htmlFor="accountName">取引先名</label>
            <input className="border" type="text" id="accountName" />
          </div>
          <div>
            <label htmlFor="accountBillingPostalCode">郵便番号(請求先)</label>
            <input className="border" type="text" id="accountBillingPostalCode" />
          </div>
          <div>
            <label htmlFor="accountBillingState">都道府県(請求先)</label>
            <input className="border" type="text" id="accountBillingState" />
          </div>
          <div>
            <label htmlFor="accountBillingCity">市区町村(請求先)</label>
            <input className="border" type="text" id="accountBillingCity" />
          </div>
          <div>
            <label htmlFor="accountBillingStreet">番地その他(請求先)</label>
            <input className="border" type="text" id="accountBillingStreet" />
          </div>
          <div>
            <label htmlFor="accountShippingPostalCode">郵便番号(納品先)</label>
            <input className="border" type="text" id="accountShippingPostalCode" />
          </div>
          <div>
            <label htmlFor="accountShippingState">都道府県(納品先)</label>
            <input className="border" type="text" id="accountShippingState" />
          </div>
          <div>
            <label htmlFor="accountShippingCity">市区町村(納品先)</label>
            <input className="border" type="text" id="accountShippingCity" />
          </div>
          <div>
            <label htmlFor="accountShippingStreet">番地その他(納品先)</label>
            <input className="border" type="text" id="accountShippingStreet" />
          </div>
          <div>
            <label htmlFor="accountPhone">電話番号</label>
            <input className="border" type="text" id="accountPhone" />
          </div>
        </form>
      </DefaultLayout>
    </>
  )
}
