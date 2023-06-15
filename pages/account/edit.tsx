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
      const expectedUrl = `http://localhost:3001/account/edit?id=${id}`;
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
        <h1>
          取引先詳細: {customer.name} ({customer.id})
        </h1>
        <form className="flex flex-col px-6">
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0 "htmlFor="accountName">取引先名</label>
          <input className="my-2 border flex-grow" type="text" id="accountName" value={customer.name} />
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountPhone">電話番号</label>
          <input className="my-2 border flex-grow" type="text" id="accountPhone" value={customer.phone}/>
        </div>
        <div className='flex items-center pb-4'>
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingPostalCode">郵便番号(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountBillingPostalCode" value={customer.billingPostalCode}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingState">都道府県(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountBillingState" value={customer.billingState}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingCity">市区町村(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountBillingCity" value={customer.billingCity}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingStreet">番地その他(請求先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountBillingStreet" value={customer.billingStreet}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingPostalCode">郵便番号(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountShippingPostalCode" value={customer.shippingPostalCode}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingState">都道府県(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountShippingState" value={customer.shippingState}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingCity">市区町村(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountShippingCity" value={customer.shippingCity}/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingStreet">番地その他(納品先)</label>
          <input className="my-2 border flex-grow" type="text" id="accountShippingStreet" value={customer.shippingStreet}/>
        </div>
      </form>
      <Link href={`/account/detail?id=${id}`}>
        <button onClick={handleSave}>保存</button>
        <button>キャンセル</button>
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

