import { Customer } from '@/types/customer'
import { useRouter } from 'next/router'
import styles from './styles.module.css'
import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'

interface CustomerFormProps {
  onBlur?: (customer: Customer) => void
  customer?: Customer
  disabled?: boolean | false
}

  const CustomerForm: React.FC<CustomerFormProps> = ({onBlur, customer, disabled}) => {

  const router = useRouter()

  // onBlurに応じてupdatedCustomerに値をセットし、Pageに返す
  let updatedCustomer: Partial<Customer> = {
  }
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if(event.target.id === 'customerNameInput') {
      updatedCustomer.name = event.target.value
    }
    if(event.target.id === 'customerBillingPostalCodeInput') {
      updatedCustomer.billingPostalCode = event.target.value
    }
    if(event.target.id === 'customerBillingStateInput') {
      updatedCustomer.billingState = event.target.value
    }
    if(event.target.id === 'customerBillingCityInput') {
      updatedCustomer.billingCity = event.target.value
    }
    if(event.target.id === 'customerBillingStreetInput') {
      updatedCustomer.billingStreet = event.target.value
    }
    if(event.target.id === 'customerShippingPostalCodeInput') {
      updatedCustomer.shippingPostalCode = event.target.value
    }
    if(event.target.id === 'customerShippingStateInput') {
      updatedCustomer.shippingState = event.target.value
    }
    if(event.target.id === 'customerShippingCityInput') {
      updatedCustomer.shippingCity = event.target.value
    }
    if(event.target.id === 'customerShippingStreetInput') {
      updatedCustomer.shippingStreet = event.target.value
    }
    if(event.target.id === 'customerPhoneInput') {
      updatedCustomer.phone = event.target.value
    }
    if(event.target.id === 'customerIsNotActiveInput') {
      updatedCustomer.active = !event.target.checked
    }
    // TODO: 後でエラー潰す
    onBlur(updatedCustomer)
  }

  return (
    <>
      <form className={styles.form}>
        <div id='customerName' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerNameInput'>名称</label>
          <input 
            className={styles.formInput}
            id='customerNameInput'
            type='text'
            defaultValue={customer ? customer.name : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerBillingPostalCode' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerBillingPostalCodeInput'>(請求先)郵便番号</label>
          <input
            className={styles.formInput}
            id='customerBillingPostalCodeInput'
            type='text'
            defaultValue={customer ? customer.billingPostalCode : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerBillingState' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerBillingStateInput'>(請求先)都道府県</label>
          <input
            className={styles.formInput}
            id='customerBillingStateInput'
            type='text'
            defaultValue={customer ? customer.billingState : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerBillingCity' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerBillingCityInput'>(請求先)市区町村</label>
          <input
            className={styles.formInput}
            id='customerBillingCityInput'
            type='text'
            defaultValue={customer ? customer.billingCity : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerBillingStreet' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerBillingStreetInput'>(請求先)丁目番地など</label>
          <input
            className={styles.formInput}
            id='customerBillingStreetInput'
            type='text'
            defaultValue={customer ? customer.billingStreet : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerShppingPostalCode' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerShppingPostalCodeInput'>(納品先)郵便番号</label>
          <input
            className={styles.formInput}
            id='customerShppingPostalCodeInput'
            type='text'
            defaultValue={customer ? customer.shippingPostalCode : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerShippingState' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerShippingStateInput'>(納品先)都道府県</label>
          <input
            className={styles.formInput}
            id='customerShippingStateInput'
            type='text'
            defaultValue={customer ? customer.shippingState : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerShippingCity' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerShippingCityInput'>(納品先)市区町村</label>
          <input
            className={styles.formInput}
            id='customerShippingCity'
            type='text'
            defaultValue={customer ? customer.shippingCity : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerShippingStreet' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerShippingStreetInput'>(納品先)丁目番地など</label>
          <input
            className={styles.formInput}
            id='customerShippingStreetInput'
            type='text'
            defaultValue={customer ? customer.shippingStreet : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerPhone' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerPhoneInput'>電話番号</label>
          <input
            className={styles.formInput}
            id='customerPhoneInput'
            type='text'
            defaultValue={customer ? customer.phone : ''}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
        <div id='customerIsNotActive' className={styles.formDiv}>
          <label className={styles.formLabel} htmlFor='customerIsNotActiveInput'>無効</label>
          <input 
            className={`${styles.formInput} ${styles.formInputShort}`}
            id='customerIsNotActiveInput'
            type='checkbox'
            defaultChecked={customer ? !customer.active : false}
            disabled={disabled}
            onBlur={handleBlur}/>
        </div>
      </form>
    </>
  )
}

export default CustomerForm
