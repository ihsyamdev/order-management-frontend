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
        const response = await fetch(`${process.env.API_URL}/customer/` + id);
        console.log(`${process.env.API_URL}/customer/` + id);
        const data = await response.json();
        setCustomer(data.item.customer);
      } catch (error) {
        console.error('Error fetching customer: ', error);
      }
    };

    if (id) {
      const expectedUrl = `${process.env.FRONT_URL}/customer/detail?id=${id}`;
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
        <h1 className="text-lg font-semibold text-center my-5">
          {customer.name}
        </h1>
        <Link href={`/customer/edit?id=${id}`}>
          <button className="border-2 border-gray-300 rounded-md bg-blue-100 px-2 ml-10">編集</button>
        </Link>
        <form className="flex flex-col px-6">
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0 "htmlFor="customerName">取引先名</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerName" defaultValue={customer.name} />
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerPhone">電話番号</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerPhone" defaultValue={customer.phone} readOnly/>
        </div>
        <div className='flex items-center pb-4'>
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingPostalCode">郵便番号(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerBillingPostalCode" defaultValue={customer.billingPostalCode} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingState">都道府県(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerBillingState" defaultValue={customer.billingState} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingCity">市区町村(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerBillingCity" defaultValue={customer.billingCity} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerBillingStreet">番地その他(請求先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerBillingStreet" defaultValue={customer.billingStreet} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingPostalCode">郵便番号(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerShippingPostalCode" defaultValue={customer.shippingPostalCode} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingState">都道府県(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerShippingState" defaultValue={customer.shippingState} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingCity">市区町村(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerShippingCity" defaultValue={customer.shippingCity} readOnly/>
        </div>
        <div className="flex items-center pb-4">
          <label className="w-40 flex-shrink-0" htmlFor="customerShippingStreet">番地その他(納品先)</label>
          <input className="my-2 border flex-grow bg-gray-100" type="text" id="customerShippingStreet" defaultValue={customer.shippingStreet} readOnly/>
        </div>
      </form>

      </div>
      ) : (
          <p>Loading...</p>
        )}
      </DefaultLayout>
    </div>
  );
};

export default CustomerDetail;
