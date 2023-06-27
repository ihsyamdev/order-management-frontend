import React from 'react'
import styles from './styles.module.css'

interface CancelButtonProps {
  onClick: () => void
}

const CancelButton: React.FC<CancelButtonProps> = ({onClick}) => {
  const handleCancel = () => {
    console.log('canceled')
    onClick()
  }

  return (
    <button className={styles.button} onClick={handleCancel}>
      キャンセル
    </button>
  )
}

export default CancelButton
