import React, { useState } from 'react'
import styles from './styles.module.css'

interface CustomerSearchFormProps {
  onSearch: (searchQuery: string) => void
}

const CustomerSearchForm: React.FC<CustomerSearchFormProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input 
        className={styles.searchBar}
        type="text" value={searchQuery}
        onChange={handleSearchChange}
        placeholder="社名を入力してください" />
      <button
        className={styles.searchButton}
        type="submit">検索
      </button>
    </form>
  )
}

export default CustomerSearchForm
