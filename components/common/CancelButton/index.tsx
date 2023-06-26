import React from 'react'
import styles from './styles.module.css'

const CancelButton: React.FC = () => {
  const handleCancel = () => {
    console.log('canceled')
  }

  return (
    <button className={styles.button} onClick={handleCancel}>
      キャンセル
    </button>
  )
}

export default CancelButton
