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
      <input className="border-2 border-gray-500 rounded-md px-2 mx-5 w-60" type="text" value={searchQuery} onChange={handleSearchChange} placeholder="社名を入力してください" />
      <button className="border-2 border-gray-300 rounded-md bg-green-100 px-2" type="submit">検索</button>
    </form>
  )
}

export default CustomerSearchForm
