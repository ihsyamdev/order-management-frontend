import React, { useState } from 'react'

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
      <input type="text" value={searchQuery} onChange={handleSearchChange} />
      <button type="submit">検索</button>
    </form>
  )
}

export default CustomerSearchForm
