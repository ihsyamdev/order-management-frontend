import React from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router'

interface EditButtonProps {
  url: string
}

const EditButton: React.FC<EditButtonProps> = (config) => {

  const router = useRouter()

  const handleEdit = () => {
    router.push(config.url)
  }

  return (
    <button className={styles.button} onClick={handleEdit}>
      編集
    </button>
  )
}

export default EditButton
