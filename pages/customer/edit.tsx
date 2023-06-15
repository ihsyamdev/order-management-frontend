import Head from 'next/head';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Customer } from '@/types';
import Link from 'next/link';

interface Props {
  initialCustomer: Customer | null;
}

const CustomerEdit: React.FC<Props> = ({ initialCustomer }) => {
  const router = useRouter();
  const { id } = router.query;

  const [customer, setCustomer] = useState<Customer | null>(initialCustomer);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch('http://localhost:3000/customer/' + id);
        console.log(`${process.env.API_URL}/customer/` + id);
        const data = await response.json();
        setCustomer(data.item.customer);
      } catch (error) {
        console.error('Error fetching customer: ', error);
      }
    };

    if (id) {
      const expectedUrl = `http://localhost:3001/customer/edit?id=${id}`;
      const currentUrl = window.location.href;

      if (currentUrl !== expectedUrl) {
        router.replace(expectedUrl, undefined, { shallow: true });
      }
    }

    if (id && !initialCustomer) {
      fetchCustomer();
    }
  }, [id, initialCustomer, router]);

  const handleSave = async () => {
    // TODO: エンドポイントが作成されたら実装する
    console.log('保存は実行されました')
  }

  return (
    <div>
      <Head>
        <title>取引先詳細</title>
      </Head>
      <DefaultLayout>
        {customer ? (
        <div>
        <h1 className="text-lg font-semibold text-center my-5">
          {customer.name}
        </h1>
        <form className="flex flex-col px-6">
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0 "htmlFor="customerName">取引先名</label>
          <input className="my-2 border flex-grow" type="text" id="customerName" value={customer.name} />
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerPhone">電話番号</label>
          <input className="my-2 border flex-grow" type="text" id="customerPhone" value={customer.phone}/>
        </div>
        <div className='flex items-center pb-4'>
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingPostalCode">郵便番号(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerBillingPostalCode" value={customer.billingPostalCode}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingState">都道府県(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerBillingState" value={customer.billingState}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingCity">市区町村(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerBillingCity" value={customer.billingCity}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingStreet">番地その他(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerBillingStreet" value={customer.billingStreet}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingPostalCode">郵便番号(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerShippingPostalCode" value={customer.shippingPostalCode}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingState">都道府県(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerShippingState" value={customer.shippingState}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingCity">市区町村(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerShippingCity" value={customer.shippingCity}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingStreet">番地その他(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="customerShippingStreet" value={customer.shippingStreet}/>
        </div>
      </form>
      <Link href={`/customer/detail?id=${id}`}>
        <button className="border-2 border-gray-300 rounded-md bg-blue-100 px-2 ml-10" onClick={handleSave}>保存</button>
        <button className="border-2 border-gray-300 rounded-md bg-gray-100 px-2 ml-10">キャンセル</button>
      </Link>

      </div>
      ) : (
          <p>Loading...</p>
        )}
      </DefaultLayout>
    </div>
  );
};

export default CustomerEdit;

