import { useState } from "react"
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'



export const SearchBar = ({ onSubmit }) => {
     const [value, setValue] = useState('')

     const handleInputChange = (e) =>{
        setValue(e.currentTarget.value.toLowerCase())
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim() === '') {
          toast.error()
        }
        onSubmit(value)
        setValue('')
     }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={value}
              onChange={handleInputChange}
               />
            <button type="submit">Search</button>
          </form>
        </>
    )
}


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}