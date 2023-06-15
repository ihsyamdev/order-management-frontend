import { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { DefaultLayout } from '@/components/templates/DefaultLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Customer() {

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
    if (id === 'customerBillingPostalCode' && !/^\d{3}-\d{4}$/.test(value)) {
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
            <label className="w-40 flex-shrink-0 "htmlFor="customerName">取引先名</label>
            <input className="my-2 border flex-grow" type="text" id="customerName" onBlur={handleInputBlur} />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerPhone">電話番号</label>
            <input className="my-2 border flex-grow" type="text" id="customerPhone" />
          </div>
          <div className={`flex items-center ${postalCodeError ? '': 'pb-4'}`}>
            <label className="w-40 flex-shrink-0" htmlFor="customerBillingPostalCode">郵便番号(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerBillingPostalCode" onBlur={handleInputBlur} placeholder='001-0001' pattern='\d{3}-\d{4}' maxLength={8} />
          </div>
          {postalCodeError && <p className="text-xs text-red-500">郵便番号は半角数字の7桁 + ハイフン(-)で入力してください</p>}
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerBillingState">都道府県(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerBillingState" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerBillingCity">市区町村(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerBillingCity" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerBillingStreet">番地その他(請求先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerBillingStreet" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerShippingPostalCode">郵便番号(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerShippingPostalCode" onBlur={handleInputBlur} />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerShippingState">都道府県(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerShippingState" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerShippingCity">市区町村(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerShippingCity" />
          </div>
          <div className="flex items-center pb-4">
            <label className="w-40 flex-shrink-0" htmlFor="customerShippingStreet">番地その他(納品先)</label>
            <input className="my-2 border flex-grow" type="text" id="customerShippingStreet" />
          </div>
        </form>
      </DefaultLayout>
    </>
  )
}
