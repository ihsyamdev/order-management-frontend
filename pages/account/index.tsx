import { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/templates/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Account() {

  const [formData, setFormData] = useState({})
  const [postalCodeError, setPostalCodeError] = useState(false)

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
    console.log(formData)

    // 郵便番号チェック
    if (id === 'accountBillingPostalCode' && !/^\d{3}-\d{4}$/.test(value)) {
      setPostalCodeError(true)
    } else {
      setPostalCodeError(false)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <Head>
        <title>取引先新規登録</title>
      </Head>
      <DefaultLayout>
        <h1 className='p-6 text-xl font-bold'>新規取引先の登録</h1>
        <form className="flex flex-col px-6" onSubmit={handleSubmit}>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0 "htmlFor="accountName">取引先名</label>
            <input className="my-2 border flex-grow" type="text" id="accountName" onBlur={handleInputBlur} />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountPhone">電話番号</label>
            <input className="my-2 border flex-grow" type="text" id="accountPhone" />
          </div>
          <div className={`flex items-center ${postalCodeError ? '': 'pb-4'}`}>
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingPostalCode">郵便番号(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountBillingPostalCode" onBlur={handleInputBlur} placeholder='001-0001' pattern='\d{3}-\d{4}' maxLength={8} />
          </div>
          {postalCodeError && <p className="text-xs text-red-500">郵便番号は半角数字の7桁 + ハイフン(-)で入力してください</p>}
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingState">都道府県(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountBillingState" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingCity">市区町村(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountBillingCity" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountBillingStreet">番地その他(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountBillingStreet" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingPostalCode">郵便番号(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountShippingPostalCode" onBlur={handleInputBlur} />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingState">都道府県(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountShippingState" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingCity">市区町村(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountShippingCity" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="accountShippingStreet">番地その他(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="accountShippingStreet" />
          </div>
        </form>
      </DefaultLayout>
    </>
  )
}
