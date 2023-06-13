import Head from 'next/head';
import { DefaultLayout } from '@/components/templates/DefaultLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Customer } from '@/types';
import { GetServerSidePropsContext } from 'next';

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
          <>
            <p>ID: {id}</p>
            <p>取引先名: {customer.name}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </DefaultLayout>
    </div>
  );
};

export default CustomerDetail;
