import Head from 'next/head';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Customer } from '@/types';
import Link from 'next/link';

interface Props {
  initialCustomer: Customer | null;
}

const CustomerDetail: React.FC<Props> = ({ initialCustomer }) => {
  const router = useRouter();
  const { id } = router.query;

  const [customer, setCustomer] = useState<Customer | null>(initialCustomer);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch('http://localhost:3000/customer/' + id);
        console.log('http://localhost:3000/customer/' + id);
        const data = await response.json();
        setCustomer(data.item.customer);
      } catch (error) {
        console.error('Error fetching customer: ', error);
      }
    };

    if (id) {
      const expectedUrl = `http://localhost:3001/account/detail?id=${id}`;
      const currentUrl = window.location.href;

      if (currentUrl !== expectedUrl) {
        router.replace(expectedUrl, undefined, { shallow: true });
      }
    }

    if (id && !initialCustomer) {
      fetchCustomer();
    }
  }, [id, initialCustomer, router]);

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
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountName" defaultValue={customer.name} />
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountPhone">電話番号</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountPhone" defaultValue={customer.phone} readOnly/>
        </div>
        <div className='flex items-center pb-4'>
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingPostalCode">郵便番号(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountBillingPostalCode" defaultValue={customer.billingPostalCode} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingState">都道府県(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountBillingState" defaultValue={customer.billingState} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingCity">市区町村(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountBillingCity" defaultValue={customer.billingCity} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountBillingStreet">番地その他(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountBillingStreet" defaultValue={customer.billingStreet} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingPostalCode">郵便番号(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountShippingPostalCode" defaultValue={customer.shippingPostalCode} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingState">都道府県(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountShippingState" defaultValue={customer.shippingState} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingCity">市区町村(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountShippingCity" defaultValue={customer.shippingCity} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="accountShippingStreet">番地その他(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="accountShippingStreet" defaultValue={customer.shippingStreet} readOnly/>
        </div>
      </form>

      <Link href={`/account/edit?id=${id}`}>
      {/* <Link href={`/account/list`}> */}
        <button>編集</button>
      </Link>

      </div>
      ) : (
          <p>Loading...</p>
        )}
      </DefaultLayout>
    </div>
  );
};

export default CustomerDetail;
