import React from 'react'
import styles from './styles.module.css'

interface SaveButtonProps {
  onClick: () => void
}

  const SaveButton: React.FC<SaveButtonProps> = ({onClick}) => {
  const handleSave = () => {
    onClick()
  }

  return (
    <button className={styles.button} onClick={handleSave}>
      保存
    </button>
  )
}

export default SaveButton
