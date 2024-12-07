import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const SearchBar = ({ handleChange }) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    handleChange(query)
  }

  return (
      <>
        <TextField 
          variant="outlined"
          className='hero-search-input'
          fullWidth
          placeholder="Search for a service..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className='btn btn-primary'  onClick={handleSearch} sx={{minWidth:"150px"}}>
          Search
        </Button>
      </>
  )
}

export default SearchBar
